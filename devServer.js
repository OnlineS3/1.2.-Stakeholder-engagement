var path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
var db = require('./models/index.js');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');
var api = require('./api/api.js')
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
var request = require('request');
var clientSecret = require('./clientSecret.js')

var app = express();
var compiler = webpack(config);

//Configure Auth0
const strategy = new Auth0Strategy({
  domain: 'onlines3.eu.auth0.com',
  clientID: 'MR10gvsqqda9MXjppWw4QHKJe789JV7E',
  clientSecret: clientSecret,
  callbackURL:  'http://localhost:8888/callback'
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

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(function(req, res, next) {
  res.locals.loggedIn = false;
  if (req.session.passport && typeof req.session.passport.user != 'undefined') {
    res.locals.loggedIn = true;
  }
  next();
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
    if (req.session.passport && typeof req.session.passport.user != 'undefined') {
      db.User.refreshUser(req.session.passport.user.nickname, req.session.passport.user._json.sub).then(() => {
        res.redirect(req.session.returnTo || '/');
      }).catch(() => {
        res.redirect(req.session.returnTo || '/');
      });
    }
  }
);

app.get('/static/*',
  function(req, res) {
    res.sendFile(path.join(__dirname, req.path));
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

app.listen(8888, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:8888');
});


//TODO: REMOVE THIS IN PRODUCTION

if(!true){
  db.sequelize.sync({force: true})
  .then(() => {
    db.Area.create({
      name: "Uusimaa"
    })
  })
  .then(() => {
    db.Area.create({
      name: "Pohjanmaa"
    })
  }).then(() => {
     db.Area.create({
      name: "Åland"
    })
  }).then(() => {
    db.Category.addNew({
      AreaName: "Uusimaa",
      title: "Kategoria",
      description: "kuvaus"
    })
  }).then(() => {
    db.Category.addNew({
      AreaName: "Åland",
      title: "Kategoria",
      description: "kuvaus"
    })
  }).then(() => {
    db.User.create({
      user_id: "auth0|5936949e71a6ab763a62ad62",
      username: "Henrik Aarnio"
    })
  }).then(() => {
    db.Permission.create({
      AreaName: "Uusimaa",
      user_id: "auth0|5936949e71a6ab763a62ad62"
    })
  }).then(() => {
    db.Permission.create({
      AreaName: "Pohjanmaa",
      user_id: "auth0|5936949e71a6ab763a62ad62"
    })
  });
}
