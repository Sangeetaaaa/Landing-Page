const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();





router.get('/', (req, res) => {
    res.render('home');
})

router.get('/contactus', (req, res) => {
    res.render('contact');
})

router.get('/about', (req, res) => {
    res.render('about');
})


router.get('/activities', (req, res) => {
    res.render('activities');
})




module.exports = router;