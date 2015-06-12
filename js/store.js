(function(Reflux, PostActions, global){
  'use strict';

  global.postStore = Reflux.createStore({
    listenables: [PostActions],
    onRefresh: function(){
    }
  });

})(window.Reflux, window.PostActions, window)
