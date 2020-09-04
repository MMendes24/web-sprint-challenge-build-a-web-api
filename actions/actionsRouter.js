const express = require('express')
const Actions = require('../data/helpers/actionModel')
const Projects = require('../data/helpers/projectModel')

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

router.put('/:id', (req, res) => {
    Actions.update(req.params.id, req.body)
    .then(thenRes => {
        res.status(200).json(thenRes)
    })
    .catch(err => {
        res.status(500).json({ errorMessage: "Action could not be edited."})
    })
})

router.delete('/:id', (req, res) => {
    Actions.remove(req.params.id)
    .then(thenRes => {
        res.status(200).send("Action successfully deleted.")
    })
    .catch(err => {
        res.status(500).json({ errorMessage: "Action could not be deleted."})
    })
})

module.exports = router