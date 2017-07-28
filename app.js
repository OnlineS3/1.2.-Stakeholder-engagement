var path = require('path');
var express = require('express');
var config = require('./webpack.config.prod');
var api = require('./api/api.js')

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

app.get('/css',
  function(req, res) {
    res.sendFile(path.join(__dirname, '/css/bootstrap-grid.min.css'));
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
