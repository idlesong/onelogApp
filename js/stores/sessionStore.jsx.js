(function(Reflux, PostActions, global){
  'use strict';

  global.SessionStore = Reflux.createStore({
    listenables: [UserActions],
    onLogin: function(){
    },

    onLogout: function(){
    },

    onSignup: function(){
    },

    onCreateProfile: function(){
    },

    onUpdateProfile: function(){
    },

    onViewProfile: function(){
    },

    onFollow: function(){
    },

    onUnfollow: function(){
    }
  });

})(window.Reflux, window.SessionStore, window)
