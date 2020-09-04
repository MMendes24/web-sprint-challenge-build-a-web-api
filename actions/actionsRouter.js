const express = require('express')
const Actions = require('../data/helpers/actionModel')
const { orWhereNotExists } = require('../data/dbConfig')

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

router.get('/:id', actionIdValidation, (req, res) => {
        res.status(200).json(req.action)
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

router.put('/:id', actionIdValidation, (req, res) => {
    Actions.update(req.params.id, req.body)
    .then(thenRes => {
        res.status(200).json(thenRes)
    })
    .catch(err => {
        res.status(500).json({ errorMessage: "Action could not be edited."})
    })
})

router.delete('/:id', actionIdValidation, (req, res) => {
    Actions.remove(req.params.id)
    .then(thenRes => {
        res.status(200).send("Action successfully deleted.")
    })
    .catch(err => {
        res.status(500).json({ errorMessage: "Action could not be deleted."})
    })
})

function actionIdValidation(req, res, next) {
    Actions.get(req.params.id)
    .then(action => {
        if (action) {
            console.log("action:", action)
            req.action = action
            next()
        } else {
            res.status(404).json({ message: "Action ID does not exist." });
        }
    })
    .catch(err => {
        res.status(500).json(({ errorMessage: "Internal server error."}))
    })
}

module.exports = router