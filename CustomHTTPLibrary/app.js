const call = new customHTTP();
// const post = call.get('https://jsonplaceholder.typicode.com/posts');
// console.log(post);

// call.get("https://jsonplaceholder.typicode.com/posts", function(
//   error,
//   response
// ) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(response);
//   }
// });

// /*========= GET SINGLE POST ========*/

// call.get("https://jsonplaceholder.typicode.com/posts/1",function(error,post){
//     if (error) {
//         console.log(error);
//     }else{
//         console.log(post);
//     }
// });

// /*========= post request custom library========*/
const data = {
    title:'Custom post',
    body:'This is a custom post'
};
// call.post('https://jsonplaceholder.typicode.com/posts',data,function(error,resp){
//     if(error)
//     { console.log(error);}
//     else    {
//         console.log(resp);
//     }
// });


 /** 
  * update a post
 * */ 
call.put('https://jsonplaceholder.typicode.com/posts/2',data,function(error,resp){
    if(error) console.log(error);
    else console.log(resp); 
});

/** 
 * DELETE A POST 
 * */ 
call.delete("https://jsonplaceholder.typicode.com/posts/1",function(err,resp){
    if(err){
        console.log(err);
    }else{
        console.log(resp);
    }
});