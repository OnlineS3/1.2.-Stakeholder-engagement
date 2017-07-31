var path = require('path');
var express = require('express');
var config = require('./webpack.config.prod');
var api = require('./api/api.js')

const cookieParser = require('cookie-parser');
const session = require('express-session');
var db = require('./models/index.js');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
var request = require('request');
var clientSecret = require('./clientSecret.js')


var app = express();
var port = process.env.port || 80

const strategy = new Auth0Strategy({
  domain: 'onlines3.eu.auth0.com',
  clientID: 'MR10gvsqqda9MXjppWw4QHKJe789JV7E',
  clientSecret: clientSecret,
  callbackURL:  'http://engagement.s3platform.eu/callback'
}, (accessToken, refreshToken, extraParams, profile, done) => {
  return done(null, profile);
});
passport.use(strategy);
passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  done(null, user);
});
app.use(cookieParser());
app.use(
  session({
    secret: 'shhhhhhhhh',
    resave: true,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, 'dist')));

app.use(function(req, res, next) {
  res.locals.loggedIn = false;
  if (req.session.passport && typeof req.session.passport.user != 'undefined') {
    res.locals.loggedIn = true;
    db.User.refreshUser(req.session.passport.user.nickname, req.session.passport.user._json.sub).then(() => {
      next();
    });
  } else {
    next();
  }
});

app.use('/api', api);
app.all(
  '/login',
  passport.authenticate('auth0', {
    clientID: 'MR10gvsqqda9MXjppWw4QHKJe789JV7E',
    domain: 'onlines3.eu.auth0.com',
    redirectUri: 'http://localhost:8888/callback',
    audience: 'https://onlines3.eu.auth0.com/userinfo',
    responseType: 'code',
    scope: 'openid profile'
  }),
  function(req, res) {
    res.redirect('/');
  });
app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

app.get(
  '/callback',
  passport.authenticate('auth0', {
    failureRedirect: '/'
  }),
  function(req, res) {
    res.redirect(req.session.returnTo || '/');
  }
);

app.get('/static/bundle.js',
  function(req, res) {
    res.sendFile(path.join(__dirname, '/static/bundle.js'));
  }
);
app.get('/static/*',
  function(req, res) {
    res.sendFile(path.join(__dirname, req.url));
  }
);
app.get('/css',
  function(req, res) {
    res.sendFile(path.join(__dirname, '/css/bootstrap.min.css'));
  }
);
app.get('*',
  function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
  }
);

app.listen(port, function(err) {
  if (err) {
    console.log(err);
    return;
  }
});
