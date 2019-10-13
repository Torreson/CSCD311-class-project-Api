const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const schema = mongoose.Schema;

const student = new schema({

    studentID:  {
        required: true,
        type: String,
        maxlength:8,
        minlength:8,
        unique:true
    },
  
    name: String,

    level: String,
    
    pin: {
        required: true,
        type: String,
        maxlength:5,
        minlength:5,
        unique:true
    },

    gender: String,
/* 
    hall_id: {
        type: schema.Types.ObjectId,
        ref: 'tblhalls'
    },*/

    programme:String, 
    

});


student.pre('save', function(next){

    bcrypt.hash(this.pin, 10, (err, hash) => {
        if(err)
        return err; 

    this.pin = hash;
    next();
    })

})


module.exports = mongoose.model('tblStudent', student);