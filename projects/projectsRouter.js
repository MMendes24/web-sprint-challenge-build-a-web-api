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

router.get('/:id', (req, res) => {
    Projects.get(req.params.id)
    .then(thenRes => {
        res.status(200).json(thenRes)
    })
    .catch(err => {
        res.status(500).json({ errorMessage: "Internal server error."})
    })
})

router.get('/:id/actions', (req, res) => {
    Projects.get(req.params.id)
    .then(thenRes => {
        res.status(200).json(thenRes.actions)
    })
    .catch(err => {
        res.status(500).json({ errorMessage: "Internal server error."})
    })
})

router.post('/', (req, res) => {
    Projects.insert(req.body)
    .then(thenRes => {
        res.status(201).json(thenRes)
    })
    .catch(err => {
        res.status(500).json({ errorMessage: "Action could not be created."})
    })
})

router.put('/:id', (req, res) => {
    Projects.update(req.params.id, req.body)
    .then(thenRes => {
        res.status(200).json(thenRes)
    })
    .catch(err => {
        res.status(500).json({ errorMessage: "Action could not be edited."})
    })
})

router.delete('/:id', (req, res) => {
    Projects.remove(req.params.id)
    .then(thenRes => {
        res.status(200).send("Action successfully deleted.")
    })
    .catch(err => {
        res.status(500).json({ errorMessage: "Action could not be deleted."})
    })
})


module.exports = router