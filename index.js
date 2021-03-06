const express = require('express');
const mongoose = require('mongoose')
const app = express();
require('dotenv').config();
const lecturesRoute = require ('./routes/lectures');

const PORT = process.env.PORT || 3000

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//routes
app.use('/api/lectures', lecturesRoute);

//connect to Mongodb atlas
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }).then(() => {
    console.log('Connected to MongoDB atlas')
}).catch(error => {
    console.log("Something wrong happened", error)
})

app.listen(PORT, () => {
    console.log('Server started at PORT', PORT);
})