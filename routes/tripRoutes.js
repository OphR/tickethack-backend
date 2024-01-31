var express = require("express")
var router = express.Router()
const moment = require('moment');

const Trip = require("../models/trips") 

router.get('/trips/:departure/:arrival/:date',(req, res)=> {
    Trip.find({
        departure: {$regex: new RegExp(req.params.departure, "i")},
        arrival: {$regex: new RegExp(req.params.arrival, "i")},
        date: req.params.date.moment().startOf('day'),
    }).then(data => {
        if(!data === null) {
            res.json({allTrips: data})
        } else {
            res.json({message: 'No trip found.'})
        }
    });
});
/* //Quand bouton book =>
router.post('/cart/:arrival/:departure/:boolean...', (req, res) => {
    fetch(//truc d'avant)
    {
        departure,
        arrival,
        boolean,
        ...
    }
    cart.save()
    Trip.find({





    })
} */




)
module.exports = router