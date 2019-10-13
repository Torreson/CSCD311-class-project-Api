const mongoose = require('mongoose');

const schema = mongoose.Schema;

const hall = new schema({
    hallID: String,
    hallName: String,
    roomNumber: String,
    roomStatus: String,
    regDate: {
        type: Date,
        default: Date.now()
    }

})

module.exports = mongoose.model('tblHall', hall);



