/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
var result = [];
var k = 0;
var newTweet = "";
var x = "";
tweet+=" ";
while(tweet.indexOf('#')!=-1){
newTweet = tweet.slice((tweet.indexOf('#')+1),tweet.length);
for (var i=0;i<newTweet.indexOf(' ');i++)
  x+=newTweet[i];
result.push(x);
tweet = newTweet;
x='';}

return result;
};
