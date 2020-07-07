require('dotenv').config();

global.express = require('express');
global.mongoose = require('mongoose');
global.app = express();

global.mongoose.connect('mongodb+srv://user:UD7PydkN3HvQ4Q87@cluster0-nqv05.mongodb.net/GraphQL_Boilerplate?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true});
global.database_connection = mongoose.connection;
global.database_connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
require('./imports');

global.app.use("/persons/", require("./api/Persons/routes.js")); 

const server = app.listen(process.env.PORT || 3000, process.env.IP || "localhost", () => {
   console.log("Server listening at http://%s:%s", server.address().address, server.address().port)
})
