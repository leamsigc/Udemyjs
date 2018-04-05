/**
 * HTTPFetch Library
 * library to make HTTP Request
 * @version 1.1
 * @author Ismael Garcia
 * @license MIT
 *
 */

class HTTPFetch {
  //get request
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(resp => resp.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }

  //Post request
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(resp => resp.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }

  //Put Request
  put(url,data){
    return new Promise((resolve, reject) => {
        fetch(url,{
            method:'PUT',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }

  //Delete Request
  delete(url){
    return new Promise((resolve,reject) => {
        fetch(url,{
            method:'DELETE',
            headers:{
                'Content-type':'application/json'
            }
        })
        .then(data => data.json())
        .then(() => resolve('Resource Deleted successfully... ')) //return empty object so is better to return a string 
        .catch(err => reject(err));
    });
  }
}
