const easyHttp = new httpLibrary;

// const getUsers = easyHttp.get('https://jsonplaceholder.typicode.com/users');
// getUsers
// .then(data => console.log(data));

//post user 
const user ={
    name:'ismael Garcia',
    username:'leamsigc',
    email:'leamsigc@gmail.com'
}
// easyHttp.post('https://jsonplaceholder.typicode.com/users',user)
//     .then(data => console.log(data));

//update post 
easyHttp.put('https://jsonplaceholder.typicode.com/users/2',user)
    .then(data => console.log(data));
//delete user 
easyHttp.delete('https://jsonplaceholder.typicode.com/users/3')
    .then(dt => console.log(dt));