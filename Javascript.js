var quotes=['Hello Guys!How are you all doing?','My Name is Harsimranpreet Kaur','This is my first project','Javascript is very interesting language','There are so many important concepts']
function Generate(){
var random=Math.floor(Math.random()*(quotes.length));
 document.getElementById('QuoteDisplay').innerHTML=quotes[random];
}