/*jslint es6 */

document.querySelector(".get-jokes").addEventListener("click", getJokes);

//get jokes
function getJokes(e) {
    //prevent default behavior
    e.preventDefault();

    const number = document.querySelector("#number").value;

    const xhr = new XMLHttpRequest();
    xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onload = function () {
        if (this.status === 200) {
            const data = JSON.parse(this.responseText);
            displayJokes(data);
        }
    };
    xhr.send();
    
}

//display data
function displayJokes(data) {
    let output = "";
    if (data.type === "success") {
        data.value.map(joke => {
            return (output += `<li><span>${joke.id}</span> ${joke.joke}</li>`);
        });
    } else {
        output += "<li>Something went wrong!</li>";
    }
    document.querySelector("#display-jokes").innerHTML = output;
    document.querySelector('#number').value = "";
}