const {ApolloServer} = require('apollo-server');
const gql  = require('graphql-tag');
const mongoose = require('mongoose');

const {MONGODB} = require('./config.js')
const resolvers = require('./graphql/resolvers')
const typeDefs = require('./graphql/typeDefs')

const PORT = process.env.port || 5000

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({req}) => ({req})
})

const Conn = async () => {
    await mongoose.connect(MONGODB,{useNewUrlParser:true,useUnifiedTopology:true})
    console.log('MongoDb Connected')
    const res = await server.listen({port:PORT})
    console.log(`
        server running at ${res.url}`)
}

try{
    Conn()
} catch(err)
{
    console.log(err)
}