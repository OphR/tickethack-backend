var express = require("express")
var router = express.Router()

const User = require("../models/users") // Require le modèle users

const { checkBody } = require("../modules/checkBody") // Require un module (if needed)

/*GET route*/
router.get('/trips/:departure/:arrival/:date',(req, res)=> {
    Trip.find({
        departure: {$regex: new RegExp(req.params.departure, "i")},
        arrival: {$regex: new RegExp(req.params.arrival, "i")},
        date: req.params.date
    }).then(data => {
        if(!data === null) {
            res.json({allTrips: data})
        } else {
            res.json({message: 'No trip found.'})
//Essayer d'y intégrer l'image "NotFound".
        }
    });
});

router.post('', (req, res) => {
    Trip.find({





    })
}




)
module.exports = router