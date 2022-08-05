
const express = require('express')
const { graphqlHTTP } = require("express-graphql");
const app = express()

const{
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} = require('graphql');
const { resolve } = require('path');

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'HelloWorld',
    fields: ()=>({
      message:{
        type:GraphQLString,
        resolve:()=>'Hello World',
      }
    })

  })

})



app.use('/graphql', graphqlHTTP({
  schema:schema,
  graphiql:true
}))
app.listen(8080,()=>console.log('Server Running'))