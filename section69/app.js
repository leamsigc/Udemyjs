// async function myFunction(){
//    // return 'Hello';

//    const promise = new Promise((resolve,reject) => {
//        setTimeout(() => resolve('Hello from one second'),1000);
//    });

//    const res = await promise; // Wait until promise is resolve 

//    return res;
// }


// async function  myFunction() {
//     const promise = new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve('Hello from one second back');
//         }, 1000);
//     });

//     const error = false;
//     if(!error){
//         //Wait until promise is resolve 
//         const res = await promise;
//         return res;
//     }else{
//         await Promise.reject(new Error('Sorry something went terrible wrong!'));
//     }
// }


// myFunction()
//     .then(resp => console.log(resp))
//     .catch(err => console.log(err));


/**
 * USE FETCH AND ASYNC & AWAIT
 */

//get users
async function getUsers(url) {
    
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

getUsers('https://jsonplaceholder.typicode.com/posts')
    .then(data => console.log(data));