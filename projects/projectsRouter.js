const express = require('express')
const Projects = require('../data/helpers/projectModel')

const router = express.Router()

router.get("/", (req, res) => {
    Projects.get()
    .then(thenRes => {
        res.status(200).json(thenRes)
    })
    .catch(err => {
        res.status(500).json({ errorMessage: "Internal server error."})
    })
})

module.exports = router