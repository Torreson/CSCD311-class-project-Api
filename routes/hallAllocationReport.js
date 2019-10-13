const express = require('express');
const router = express.Router();

const hall = require('../models/hall');

router.get('/report', (request, response) => {
    
    hall.find().toArray((err, items) => {
        console.log(items)
  
})

})




module.exports = router;