const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/ResidenceApp';

mongoose.connect(url, { useUnifiedTopology: true },  { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false })
.then(
    console.log('Mongodb Connection Successful! \n'))
.catch((err) => {
    return err;
    })
