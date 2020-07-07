exports.list = (callback) => {
    global.personsModel.find(function (err, persons) {
        if (err) { return callback(true, err) } 
        else { 
            return callback(false, persons);
        }
    })
}