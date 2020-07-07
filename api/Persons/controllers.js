
exports.list = (request, response) => {
    global.personsFunctions.list((isError, list) => {
        console.log(isError, list)
        if(isError) {
            return response.status(400).send("Error");
        } else {
            return response.status(200).send({"Persons List": list}); 
        }
    })
}