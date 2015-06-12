(function(Reflux, global){
  'use strict';

  global.UserActions = Reflux.createActions([
    // user actions
    'login',
    'logout': {asyncResult: true},
    'register',
    'createProfile',
    'updateProfile',
    "viewProfile",
    "follow",
    "unfollow"
  ]);

  global.PostActions = Reflux.createActions([
    //post actions
    "newPost",
    "replyPost",
    "resharePost",
    "likeTags"
  ]);

  global.ApiActions = Reflux.createActions([
    // firebase actions
    'listenToProfile': {},
    'listenToPost': {},
    'listenToPosts': {},
    'stopListeningToProfile': {},
    'stopListeningToPosts': {},
    'stopListeningToPost': {}
  ]);

  global.BasicActions = Reflux.createActions([
    // error actions
    'loginError': {},
    'postError': {},
    // ui actions
    'showOverlay': {},
    'goToPost': {}
  ]);

  actions.login.listen(function(email, password){
    WebAPIUtils.login(email, password);
  });

  actions.logout.listen(function(){

  });

  actions.signup.listen(function(){

  });

















})(window.Reflux, window.actions, window)
