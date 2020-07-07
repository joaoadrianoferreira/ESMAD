require('dotenv').config();

global.ApolloServer = require('apollo-server').ApolloServer;

// Some fake data
const books = [
  {
    title: "Harry Potter and the Sorcerer's stone",
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

// Some fake data
const persons = [
   {
     name: "Adriano",
     age: 33,
   },
   {
     name: 'Carlos',
     age: 23,
   },
 ];

// The GraphQL schema in string form
const typeDefs = `
  type Query { persons: [Person], books: [Book] }
  type Book { title: String, author: String }
  type Person { name: String, age: Int}
`;

// The resolvers
const resolvers = {
  Query: { books: () => books, persons: () => persons },
};

// Enable schema reporting in your Apollo Server constructor
const apollo = new ApolloServer({
  typeDefs,
  resolvers,
  engine: {    
    reportSchema: true
  }
});

apollo.listen(process.env.PORT || 3000, process.env.IP || "localhost", () => {
   console.log("Server listening at http://%s:%s", process.env.IP || "localhost", process.env.PORT || 3000)
})