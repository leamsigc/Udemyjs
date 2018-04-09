
class httpLibrary {
    //GET REQUEST
    async get(url){
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    //POST 
    async post(url,data){
        const response = await fetch(url,{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(data)
        });
        const responseData = await response.json();
        return responseData;
    }
    //PUT
    async put(url,data){
        const response = await fetch(url,{
            method:'PUT',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(data)
        });
        const responseData = await response.json();

        return responseData;
    }
    //DELETE
    async delete(url){
        const response = await fetch(url,{
            method:'DELETE',
            headers:{
                'Content-type':'application/json'
            }
        });
        const responseData = await  'You deleted the data successfully';

        return responseData;
    }
}