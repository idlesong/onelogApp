//var ServerActionCreators = require('../actions/ServerActionCreators.react.jsx');
var request = require('superagent');

module.exports = {

  signup: function(email, username, password, passwordConfirmation){
    request.post(APIEndpoints.REGISTRATION)
      .send({ user: {
        email: email,
        username: username,
        password: password,
        password_confirmation: passwordConfirmation
        }
      })
      .set('Accept', 'application/json')
      .end(function(error, res){
        if(res) {
          if(res.error) {
            var errorMsgs = _getErrors(res);
            ServerActionCreators.receiveLogin(null, errorMsgs);
          } else {
            json = JSON.parse(res.text);
            ServerActionCreators.receiveLogin(json, null);
          }
        }
      });
  },

  login: function(email, password){
    request.post('http://localhost:8080/v1/login')
      .send({ username: email, password: password, grant_type: 'password'})
      .set('Accept', 'application/json')
      .end(function(error, res){
        if (res) {
          if (res.error) {
            var errorMsgs = _getErrors(res);
          } else {
            json = JSON.parse(res.text);
            ServerActionCreators.receiveLogin(json, null);
          }
        }
      });
  },

  loadPost: function(postId) {

  },

  createPost: function(title, body) {

  }



}
