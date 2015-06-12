

var PostsPage = React.createClass({
  getInitialState: function(){
    return {
      posts: PostStore.getAllPosts(),
      errors: []
    };
  },

  handleViewPost: function(){

  },

  render: function(){
    var errors = (this.state.length > 0) ? <ErrorNotice error={this.state.errors}/> : <div></div>
    return (
      <div>
        {errors}
        <div className = "row">
          <PostList posts={this.state.posts} />
        </div>
      </div>
    )
  }
});

var PostItem = React.createClass({
  render: function() {
    return (
      <li className = "post">
       <div className = "post_body"> {this.props.post}post</div>
       <span className = "author"> {this.props.post.user.username}author</span>
       <span className = "post_date"> {this.props.post.created_at}time</span>
      </li>
    );
  }
});

var PostsList = React.createClass({
  render: function() {
    return (
      <ul className = "post_list" >
        {this.props.posts.map(function(post, index){
            return <PostItem post={post} key={"post-" + index} />
        })}
      </ul>
    );
  }
});


var PostNew = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    var body = this.refs.body.getDOMNode().value;

  },

  render: function() {
    return (
      <div className="content full-width">
          { content }
          <form className='comment-form' onSubmit={ this.addComment }>
              <textarea placeholder="Post a Comment" ref="commentText" className="comment-input full-width"></textarea>
              <button type="submit" className="button button-primary">Submit</button>
          </form>
      </div>
    );
  }
})
