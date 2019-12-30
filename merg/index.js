const {ApolloServer} = require('apollo-server');
const gql  = require('graphql-tag');
const mongoose = require('mongoose');

const {MONGODB} = require('./config.js')
const Post = require('./models/Post')

const typeDefs = gql`
type Post{
    id: ID!
    body: String!
    createdAt: String!
    username:String!
}
    type Query{
        getPosts: [Post]
    }
`

const resolvers = {
    Query: {
        async getPosts(){
            try{
                const posts = await Post.find();
                return posts
            } catch(err){
                throw new Error(err);
            }
        } 
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

const Conn = async () => {
    await mongoose.connect(MONGODB,{useNewUrlParser:true,useUnifiedTopology:true})
    console.log('MongoDb Connected')
    const res = await server.listen({port:5000})
    console.log(`
        server running at ${res.url}`)
}

// mongoose
//     .connect(MONGODB,{useNewUrlParser:true,useUnifiedTopology:true})
//     .then(()=>{
//         console.log('mongodb conencted')
//         return server.listen({port:5000})
//     })
//     .then(res=>{
//         console.log(`
//         server running at ${res.url}`)
//     })

Conn()