
var Onelog = React.createClass({
  getInitialState: function(){
    return {
      user: userStore.getDefaultData(),
      showPanel: false,
      showOverlay: false,
      overlayType: 'login'
    };
  },
  goToPost: function(postId){
    
  },
  showOverlay: function(type){
    //var overlay = this.refs.overlay.getDOMNode();
  },
  submitPost: function(e) {
    e.preventDefault();

    var titleEl = this.refs.title.getDOMNode();
    var linkEl = this.refs.link.getDOMNode();

    var user = this.state.user;

    if(!user.isLoggedIn) {
      actions.showOverlay('login');
      return;
    }

    if(titleEl.value.trim() === ''){
      this.setState({
        'postError': 'title_error'
      });
      return;
    }

    var post = {
      title: titleEl.value.trim(),
      url: linkEl.value.trim(),
      creator: user.profile.username,
      creatorUID: user.uid,
      time: Date.now()
    };

    actions.submitPost(post);

    titleEl.value = '';
    linkEl.value = '';

    this.togglePanel();
  },

  render: function(){
    <h1>Hello user, posts page </h1>
  }
}


var routes = (
  <ReactRouter.Route name="app" path="/" handler={OnelogApp}>
    <ReactRouter.DefaultRoute handler={PostsPage} />
    ReactRouter.Route name="login" path="/login" handler={LoginPage}
    ReactRouter.Route name="signup" path="/signup" handler={SignupPage}
    ReactRouter.Route name="posts" path="/posts" handler={PostsPage}
    ReactRouter.Route name="post" path="/posts/:postId" handler={PostPage}
    ReactRouter.Route name="new-post" path="/post/new" handler={PostNew}
  </ReactRouter.Route>
);

ReactRouter.run(routes, function(Handler){
  React.render(<Handler/>, document.getElementById('onelogapp'));
});














  }
});
