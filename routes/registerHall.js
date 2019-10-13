const express = require('express');
const router = express.Router();

const hall = require('../models/hall');




router.get('/registerhall', (request, response) => {

    response.render('hall');

})

router.post('/registerhall', (request, response) => {


    hallModel = new hall({
        hallName: request.body.cmbHalls,
        roomNumber: request.body.cmbRooms,
        regDate: request.body.regDate,
        studentID:request.params._id
    });

    console.log(hallModel);

    hallModel.save(function(err){
        if(!err){
            hall.find({}).populate('studentID').exec(function(err, data){
                if(err) return err;
                console.log(data);

                //response.redirect('/ugresidential/report');

            })
        }
    })   


})

        
module.exports = router;