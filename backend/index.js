const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use('*', cors());
const TypeDefs = require('./schema')
const Resolvers = require('./resolvers')
const dotenv = require('dotenv');
dotenv.config();
const { ApolloServer } = require('apollo-server-express')


const mongodb_atlas_url = process.env.MONGODB_URL;
mongoose.connect(mongodb_atlas_url,{useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
  console.log("Connected to Database");
}).catch(err => {
  console.log("Could not connect to the Database");
  process.exit();
})

const server = new ApolloServer({
  typeDefs: TypeDefs.typeDefs,
  resolvers: Resolvers.resolvers
})

server.applyMiddleware({app})

app.listen({ port: process .env.PORT }, () =>
  console.log(`listening at: http://localhost:${process.env.PORT}${server.graphqlPath}`));
