const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()
const mysql = require("mysql")

const db = mysql.createPool({
    host: "remotemysql.com",
    user: "tnbhW9HjMG",
    password: "x51akxUvlv",
    database: "tnbhW9HjMG",
    port: "3306"
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get("/api/get", (req, res) => {
    const sqlGet = "SELECT * FROM Registers"
    db.query(sqlGet, (err, result) => {
        res.send(result)
        console.log(result)
    })
})

app.post("/api/insert", (req, res) => {
    const concept = req.body.concept
    const amount = req.body.amount
    const date = req.body.date
    const type = req.body.type

    const sqlInsert = "INSERT INTO Registers (concept, amount, date, type) VALUES (?,?,?,?)"
    db.query(sqlInsert, [concept, amount, date, type], (err, result) => {
        console.log(result)
    })
})

app.delete("/api/delete/:id", (req,res) => {
    const id = req.params.id
    const sqlDelete = "DELETE FROM Registers WHERE (id) = ?"
    db.query(sqlDelete, id, (err, result) => {
       if (err) console.log(err)
    })
})

app.listen(3001, () => {
    console.log("Running on port 3001")
})