const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({ extended: true }))

var newItem = []

app.use(express.static("public"))

app.get("/", (req, res) => {

    const today = new Date()

    const options = {
        "weekday": "long",
        "day": "numeric",
        "month": "long"
    }

    const day = today.toLocaleDateString("en-US",options)

    res.render("list", { KindOfDay: day, newListItem : newItem })
})

app.post("/", (req,res) => {
    newItem.push(req.body.task)
    res.redirect("/")
})

app.listen(3000)

