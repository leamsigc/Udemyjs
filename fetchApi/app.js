//button 1
const btn1 = document.querySelector('#button1');
const btn2 = document.querySelector('#button2');
const btn3 = document.querySelector('#button3');
//output
const output = document.querySelector('#output');
btn1.addEventListener('click',getText);
btn2.addEventListener('click',getJson);
btn3.addEventListener('click',getJsonGit);

function getText(){
  //fetch the text file
  fetch('text.txt')
  .then(resp => resp.text())
  .then(data => {
    console.log(data);
    output.innerHTML = `Data Recive From The Call: <strong>${data}</strong>`;
  });
};

//get Json file
function getJson(){
  fetch('app.json')
  .then(resp => resp.json())
  .then(resp => {
    const li = resp.data.map(item => {
      return `<li>Name: ${item.name}<br><strong> ${item.position}</strong></li>`
    });
    output.innerHTML = `<ul>${li.join('')}</ul>`;
  });
};

//get json file from github
function getJsonGit(){
  fetch('https://api.github.com/users')
  .then(resp => resp.json())
  .then(data => {
    console.log(data);

    const dataDisplay = data.map(item => {
      return `<li>${item.login} <img src='${item.avatar_url}' width='200px' height='200-x' > </li>`
    });

    output.innerHTML = `<ul>${dataDisplay.join('')}</ul>`;
  });
}
