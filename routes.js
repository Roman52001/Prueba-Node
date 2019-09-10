const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.ejs');
});

router.get('/suma', (req, res) =>{
 res.render('suma');
});

router.get('/resta', (req, res) =>{
    res.render('resta');
   });

router.get('/multiplicacion', (req, res) =>{
    res.render('multiplicacion');
   });
   
router.get('/division', (req, res) =>{
    res.render('division');
   });
     
router.get('/nombres', (req, res) =>{
    res.render('nombres');
   });
     
   


module.exports = router;