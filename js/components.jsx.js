/** @jsx React.DOM */

(function(React, ReactRouter, Reflux, PostActions, postStore, global) {

  var Profile = React.createClass({
    render: function() {
      return ( <h1>Hello PostsList!</h1> );
    }
  });

  var NewPostItem = React.createClass({
    render: function() {
      return ( <h1>Hello PostsList!</h1> );
    }
  });

  var TagsGroup = React.createClass({
    render: function() {
      return ( <h1>Hello PostsList!</h1> );
    }

  });

  var PostItem = React.createClass({
    render: function() {
      return ( <h1>Hello PostsList!</h1> );
    }

  });

  var PostsList = React.createClass({
    render: function() {
      return ( <h1>Hello PostsList!</h1> );
    }

  });

  var OnelogApp = React.createClass({
    render: function() {
        return (
            <div>
                  <h1>Hello onelog!</h1>
            </div>
        );
    }

  });

  var routes = (
    <ReactRouter.Route handler={OnelogApp}>
      <ReactRouter.Route name="posts" path="/posts" handler={PostsList} />
    </ReactRouter.Route>
  );

  ReactRouter.run(routes, function(Handler){
    React.render(<Handler/>, document.getElementById('onelogapp'));
  });


})(window.React, window.ReactRouter, window.Reflux, window.PostActions, window.postStore, window);
