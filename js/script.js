const requestURL = "https://www.googleapis.com/books/v1/volumes?q=harry+potter"
const request = async () =>{
    try{
        const response = await fetch(requestURL);
        if(!response.ok){
            throw new Error("Failed to fetch data");
        }
        else{
            const convertJSON = await response.json()
        }
    }
    catch(err){
        console.error("An error occured", err);
    }

}
request();