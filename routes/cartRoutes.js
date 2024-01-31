var express = require("express")
var router = express.Router()


const Cart = require("../models/carts") 


router.post("/new/:arrival/:departure/:date", (req, res) => {
    fetch(`http://localhost:3000/get/${req.params.arrival}/${req.params.departure}/${date}`)
    if(!departure == null && !arrival == null && !date == null){
        const { departure, arrival } = req.body 

        const newCart = new Cart({
            departure,
            arrival,
        })
      
        newCart.save().then(() => res.json({ result: true }))
      } else {
        res.json({`Trip not found`})
      }}
      )
    
router.get("/trip/:arrival/:departure/:date", (req, res) => {
    Trip.findOne({arrival: req.params.arrival, departure: req.params.departure, date: req.params.date})
})
    


router.get("/all", (req, res) => {
  Cart.find().then((allCarts) => res.json({ result: true, allCarts }))
})

router.put("/update", (req, res) => {
  const { email, firstname } = req.body

  User.findOne({ email }).then((userFound) => {
      if (!userFound) {
          return res.json({ result: false, error: "User not found" })
      } else {
          User.updateOne({ email }, { firstname: firstname }).then((userUpdated) => {
              return res.json({ result: true, updatedUser })
          })
      }
  })
})

router.delete("/delete", (req, res) => {
  const { email } = req.body

  User.findOne({ email }).then((userFound) => {
      if (!userFound) {
          return res.json({ result: false, error: "User not found" })
      } else {
          User.deleteOne({ email }).then((userDeleted) => {
              return res.json({ result: true, deletedUser })
          })
      }
  })
})



let departure =  req.params.departure;
let arrival = req.params.arrival;

fetch("<http://localhost:3000/carts/>")
    .then((response) => response.json()) 
    .then((trips) => console.log("All trips: ", trips)
    fetch("<http://localhost:3000/carts/new>", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
         departure:  req.params.departure,
         arrival: req.params.arrival,
      }),
  })
      .then((response) => response.json())
      .then((data) => {
          if (data.result === true) {
              console.log("Your trip is in the cart !")
          } else {
              console.log("Your trip is not found.")
          }
      })




      fetch("<http://localhost:3000/carts/update>", {
        method: "PUT",
        body: JSON.stringify({
            departure:  req.params.departure,
            arrival: req.params.arrival,
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.result === true) {
                console.log("Cart Updated: ", data.updatedCart)
            } else {
                console.log("Cart not updated.")
            }
        }))

        fetch("<http://localhost:3000/carts/delete>", {
          method: "DELETE",
          body: JSON.stringify({
            departure:  req.params.departure,
          }),
      })
          .then((response) => response.json())
          .then((data) => {
              if (data.result === true) {
                  console.log("Cart Deleted: ", data.deletedCart)
              } else {
                  console.log("Pas de suppression.")
              }
          })


module.exports = router