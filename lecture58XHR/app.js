<<<<<<< HEAD
console.log('hello ');
=======
/*jslint es6 */


// load data 
function loadData() {
    //Create a xhr Object
    const xhr = new XMLHttpRequest();
    // console.log(xhr);
    //open(RequestType,Url,asynchronous)

    xhr.open('get', 'data.txt', true);
    console.log(xhr.readyState);

    xhr.onload = function () {
    /**
     * HTTP Statuses
     * 200 : 'OK'
     * 403: 'Forbidden'
     * 404: 'Not found'
     */
        console.log(this.status);
        if (this.status === 200) {
            document.querySelector('.out').textContent = this.responseText;
            
        }

    };

    //Error
    xhr.onerror = function(){
        console.log('Request error...');
    }
    /*xhr.onreadystatechange = function () {
        if (this.status === 200 && this.readyState === 4) {
            console.log(this.responseText);
        }
    }*/
    //you have to call send 
    xhr.send();
}

document.getElementById('button').addEventListener('click', loadData);
>>>>>>> 6c21ff21c7d53c9eb564872dd2fc72ada6a65265
