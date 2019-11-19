const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 6969;

mongoose.connect('mongodb://test:test123@ds053978.mlab.com:53978/graphql-app')
mongoose.connection.once('open',()=>{
    console.log('Connected to the database.');
});

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql : true
}));


app.listen(PORT,()=>{
    console.log(`Listening on PORT ${PORT}`);
})