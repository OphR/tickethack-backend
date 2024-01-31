var express = require("express")
var router = express.Router()

const Booking = require("../models/bookings")

router.post("/new", (req, res) => {

  const { departure, arrival, date, price } = req.body 

  const newBooking = new Booking({
        departure: String,
        arrival: String,
        date: Date,
        price: Number,
    })
      

  newBooking.save().then(() => res.json({ result: true }))
})

router.get("/all", (req, res) => {
    Booking.find().then((allBooking) => res.json({ result: true, allBooking }))
})

router.put("/update", (req, res) => {
  const { departure, arrival } = req.body

  Booking.findOne({ departure }).then((bookingFound) => {
      if (!bookingFound) {
          return res.json({ result: false, error: "Booking not found" })
      } else {
          Booking.updateOne({ departure }, { departure: departure }).then((bookingUpdated) => {
              return res.json({ result: true, updatedBooking })
          })
      }
  })
})

router.delete("/delete", (req, res) => {
  const { departure } = req.body

  Booking.findOne({ departure }).then((bookingFound) => {
      if (!bookingFound) {
          return res.json({ result: false, error: "Booking not found" })
      } else {
          Booking.deleteOne({ departure }).then((bookingDeleted) => {
              return res.json({ result: true, deletedBooking })
          })
      }
  })
})

fetch("<http://localhost:3000/bookings/all>")
    .then((response) => response.json()) // Converts the response to JSON
    .then((bookings) => console.log("All bookings: ", departure)

    fetch("<http://localhost:3000/bookings/new>", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
          departure: "Marseille",
          arrival: "Bruxelles",
          date: `{2024-01-31T07:26:17.287+00:00}`,
          price: 85,
      }),
  })
      .then((response) => response.json())
      .then((data) => {
          if (data.result === true) {
              console.log("Booking find !")
          } else {
              console.log("Booking not find !")
          }
      })

      fetch("<http://localhost:3000/bookings/update>", {
        method: "PUT",
        body: JSON.stringify({
            departure: "Marseille",
            arrival: "Bruxelles",
            date: `{2024-01-31T07:26:17.287+00:00}`,
            price: 85,
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.result === true) {
                console.log("Booking Updated: ", data.updatedBooking)
            } else {
                console.log("Booking not put !")
            }
        }))

        fetch("<http://localhost:3000/bookings/delete>", {
          method: "DELETE",
          body: JSON.stringify({
            departure: "Marseille",
          }),
      })
          .then((response) => response.json())
          .then((data) => {
              if (data.result === true) {
                  console.log("Booking Deleted: ", data.deletedBooking)
              } else {
                  console.log("Booking not deleted.")
              }
          })


module.exports = router