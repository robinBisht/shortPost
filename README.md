# shortPost
This is a small MERN + GraphQL project which can be seen as a small Blog Post.One can create a user and posts like a basic simple Blog. This project is basically to learn graphql

## Prerequisites
```bash
npm install apollo-server graphql mongoose
```
## Additional Files
Add a config.js file with where one need to add MongoDB Atlas Key for using MongoDB cloud database and a SECRET_KEY for json web token.
```bash
module.exports = {
    MONGODB: 'mongodb+srv://robinBisht:18121989@cluster0-lyav5.mongodb.net/merng?retryWrites=true&w=majority',
    SECRET_KEY:'my name is robin'
};
```
