const express = require('express')
const Actions = require('../data/helpers/actionModel')

const router = express.Router()

router.get('/', (req, res) => {
    Actions.get()
    .then(thenRes => {
        res.status(200).json(thenRes)
    })
    .catch(err => {
        res.status(500).json({ errorMessage: "Internal server error."})
    })
})

router.get('/:id', (req, res) => {
    Actions.get(req.params.id)
    .then(thenRes => {
        res.status(200).json(thenRes)
    })
    .catch(err => {
        res.status(500).json({ errorMessage: "Internal server error."})
    })
})

router.post('/', (req, res) => {
    Actions.insert(req.body)
    .then(thenRes => {
        res.status(201).json(thenRes)
    })
    .catch(err => {
        res.status(500).json({ errorMessage: "Action could not be created."})
    })
})
module.exports = router