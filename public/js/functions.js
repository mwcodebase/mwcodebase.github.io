var twitter_application_consumer_key = '6Z0crZNH4bZb25HMjc7Si2dWI';
var twitter_application_secret = 'AAd1ydhnSFVNVcF6Q5ofGyt25QCOcI1BePUQ3qXMz2nCvaOGqm';
var twitter_user_access_token = '';
var twitter_user_secret = '';

var oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  twitter_application_consumer_key,
  twitter_application_secret,
  '1.0A',
  null,
  'HMAC-SHA1'
);

function post_tweet() {
  var message = document.getElementById("tweet_body").value

  if (message === "") {
    alert("Cannot post blank Tweet.");
    return;
  }

  alert(message);
  
  // oauth.post('https://api.twitter.com/1.1/statuses/update.json',
  //   twitter_user_access_token,
  //   twitter_user_secret,
  //   { 'status': message },
  //   '',
  //   function (err, data, res) {
  //     if (err) {
  //       console.log(err);
  //       alert("Tweet failed. See console log for details.")
  //     } else {
  //       alert("Tweet successful.")
  //     }
  //   });
}
