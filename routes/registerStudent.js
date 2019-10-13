const express = require('express');
const router = express.Router();
const student = require('../models/student');



router.post('/register', (request, response) => {

    const studentModel = new student({
        studentID: request.body.tfStudentID,
        name: request.body.tfStudentName,
        level: request.body.tfLevel,
        pin: request.body.tfStudentPin,
        gender: request.body.cmbGender,
        hall: request.body.hall,
        programme: request.body.tfProgramme,
        
        })

 studentModel.save((err, data) => {
     if (err)
     return console.log(`Check out this bug: ${err}`);
     console.log(data);
     
     response.redirect('/ugresidential/register');
 });
 

})


router.get('/register', (request, response) => {

    response.render('register');

})





module.exports = router;
