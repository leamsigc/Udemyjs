

//load customer
function loadCustomer(e){
    const xhr = new XMLHttpRequest();

    xhr.open('GET','customer.json',true);
    xhr.onload = function(){
        if(this.status === 200 ){
            const response = JSON.parse(this.response);
            
            document.querySelector('#customer').innerHTML = `<ul>
                                                            <li>${response.name}</li>
                                                            <li>${response.company}</li>
                                                            <li>${response.id}</li>
                                                            </ul>`;
        }
    }
    xhr.send();
}

document.querySelector('#button1').addEventListener('click',loadCustomer,false);

//get customers
document.querySelector('#button2').addEventListener('click',getAllCostumers,false);

//get all customers
function getAllCostumers() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET','customers.json',true);
    xhr.onload = function(){
        if(this.status === 200){
            let output = `<ul> `;
            const customers = JSON.parse(this.responseText);
            customers.map( customer => {
                output += `
                <li>Name:${customer.name}</li>    
                <li>Company:${customer.company}</li>    
                <li>ID:${customer.id}</li>    
                `;
            });
            output+= '</ul>';
            document.querySelector('#customers').innerHTML = output;
        }
    };
    xhr.send();
}