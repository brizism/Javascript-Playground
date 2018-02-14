const http = new easyHTTP;

// Get Posts
http.get('http://jsonplaceholder.typicode.com/posts', function(err, response){
  err ? console.log(err) : console.log(response);
})