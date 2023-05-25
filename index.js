 const {ApolloServer,gql} = require('apollo-server');
 const mongoose  = require('mongoose');
 const resolvers = require('./gql/resolvers/productResolver');
 const typeDefs = require('./gql/typedefs/productTypeDefs');
 require('dotenv').config();


mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});

const dbConnection  = mongoose.connection;


const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers
});

dbConnection.on('error', (error) => console.error(` dbConnection error: ${error}`));
dbConnection.once('open', () => {
  console.info('Connected to DB');
  server.listen({port: 9000}).then(({url}) => console.log(`Server running at ${url}`));
});


