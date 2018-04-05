const http = new HTTPFetch;

//GET DATA FROM JSON PLACEHOLDER
/*
 http.get('https://jsonplaceholder.typicode.com/users')
.then(data => console.log(data))
.catch(err => console.log(err));
//*/

//create user data 
const user = {
    name:'Ismael Garcia ',
    username:'leamsigc',
    email:'leamsigc@hotmail.com'
}
//Post request
/*http.post('https://jsonplaceholder.typicode.com/posts',user)
.then(data => console.log(data));
*/
// update post
http.put('https://jsonplaceholder.typicode.com/posts/2',user)
.then(data => console.log(data));

//delete Post
http.delete('https://jsonplaceholder.typicode.com/posts/2')
.then(data => console.log(data)).catch(err => console.log(err));