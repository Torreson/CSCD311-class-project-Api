const express = require ('express');
const student = require('../models/student');
const router = express.Router();



router.get('/login', (request, response) => {

    response.render('login');

})


router.post('/login', (request, response) => {

     const userLogin = {
         studentID: request.body.tfStudentID,
          pin: request.body.tfPin
        }
 
    student.findOne(userLogin, (err, data) => {

        if (err) return err;

        if(!student){
            return console.log('No user found')
        }

        console.log('\n' + userLogin)
        console.log(data +'\nLogin successful');

        response.redirect('/ugresidential/registerhall');
        
    })

})




    





module.exports = router;