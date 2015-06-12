(function(Reflux, global){
  'use strict';

  global.PostActions = Reflux.createActions([
    // user actions
    'login',
    'logout': {asyncResult: true},
    'register',
    'createProfile',
    'updateProfile',
    "viewProfile",
    "follow",
    "unfollow",

    //post actions
    "newPost",
    "replyPost",
    "resharePost",
    "likeTags",

    // firebase actions
    'listenToProfile': {},
    'listenToPost': {},
    'listenToPosts': {},
    'stopListeningToProfile': {},
    'stopListeningToPosts': {},
    'stopListeningToPost': {},
    // error actions
    'loginError': {},
    'postError': {},
    // ui actions
    'showOverlay': {},
    'goToPost': {}
  ]);


})(window.Reflux, window)
