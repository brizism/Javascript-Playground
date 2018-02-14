const http = new easyHTTP;

// Get Posts
// http.get('http://jsonplaceholder.typicode.com/posts', function(err, response){
//   err ? console.log(err) : console.log(response);
// })

// Get Single Post
// http.get('http://jsonplaceholder.typicode.com/posts/2', function(err, post){
//   err ? console.log(err) : console.log(post);
// })


// Create Data
const data = {
  title: 'Custom Post',
  body: 'This is a custom post'
};

// Create Post
// http.post('http://jsonplaceholder.typicode.com/posts', data, function(err, post){
//   err ? console.log(err) : console.log(post);
// })

// Update Post
http.put('http://jsonplaceholder.typicode.com/posts/5', data, function(err, post){
  err ? console.log(err) : console.log(post);
})