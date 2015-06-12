(function(Reflux, PostActions, global){
  'use strict';

  global.PostStore = Reflux.createStore({
    listenables: [PostActions],
    onNewPost: function(){
    },

    onReplyPost: function(){
    },

    onResharePost: function(){
    },

    onLikeTags: function(){
    }

  });

})(window.Reflux, window.PostActions, window)
