var express = require("express")
var router = express.Router()

const User = require("../models/users") // Require le modèle users

const { checkBody } = require("../modules/checkBody") // Require un module (if needed)

router.post("/new", (req, res) => {
  const { firstname, lastname, email, password } = req.body // Désctructuration

  const newUser = new User({
      firstname,
      lastname,
      email,
      password,
      likes: [],
      applicationStatus: { // Respect du schéma
          validated: false,
          rejected: false,
          pending: true,
      },
  })

  newUser.save().then(() => res.json({ result: true }))
})

router.get("/all", (req, res) => {
  User.find().then((allUsers) => res.json({ result: true, allUsers }))
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

fetch("<http://localhost:3000/users/all>")
    .then((response) => response.json()) // Converts the response to JSON
    .then((users) => console.log("All users: ", users)

    fetch("<http://localhost:3000/users/new>", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
          firstname: "Joachim",
          lastname: "Jasmin",
          email: "joachim.jasmin@gmail.com",
          password: "AVeryStrongPassword!!!",
      }),
  })
      .then((response) => response.json())
      .then((data) => {
          if (data.result === true) {
              console.log("Youpi !")
          } else {
              console.log("Moins youpi...")
          }
      })

      fetch("<http://localhost:3000/users/update>", {
        method: "PUT",
        body: JSON.stringify({
            firstname: "Joachim Alexandre",
            email: "joachim.jasmin@gmail.com",
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.result === true) {
                console.log("User Updated: ", data.updatedUser)
            } else {
                console.log("Moins youpi...")
            }
        }))

        fetch("<http://localhost:3000/users/delete>", {
          method: "DELETE",
          body: JSON.stringify({
              email: "joachim.jasmin@gmail.com",
          }),
      })
          .then((response) => response.json())
          .then((data) => {
              if (data.result === true) {
                  console.log("User Deleted: ", data.deletedUser)
              } else {
                  console.log("Moins youpi...")
              }
          })

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
        }
    });
});
module.exports = router