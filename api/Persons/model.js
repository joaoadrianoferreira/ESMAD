var Schema = global.mongoose.Schema;

var Person = new Schema({
  name: String,
  age: Number,
  gender: String,
  father: {
      name: String,
      country: String
  },
  mother: {
      name: String,
      country: String
  },
  address: {
      street: String, 
      number: String,
      city: String,
      zipCode: String,
      country: String 
  }
});

module.exports = global.database_connection.model("Person", Person, "Person");