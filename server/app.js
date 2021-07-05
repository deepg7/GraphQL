const express = require('express')
const app = express()

const mongoose = require('mongoose')

const {graphqlHTTP}=require('express-graphql')

const schema = require('./schema/schema')

mongoose.connect('mongodb://127.0.0.1/Learning_GQL',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true,
})//.then(console.log('connected'))

app.use('/graphql',graphqlHTTP({
schema,
graphiql:true
}))

app.listen(4000,()=>{
    console.log('Running on port 4000')
})