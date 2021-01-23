const { request } = require('express');
const { Pirate } = require('../models/belt.model.js');

module.exports.getAllPirates = (req, res) => {
    Pirate.find({})
        .then(pirates => res.json(pirates))
        .catch(err => res.json(err))
}

module.exports.getOnePirate = (req, res) => {
    Pirate.findOne({_id:req.params.id})
        .then(pirate => res.json(pirate))
        .catch(err => res.json(err))
}

module.exports.createPirate = (req,res) => {
    const { name, position, imageUrl, catchphrase, chests, pegLeg, eyePatch, hookHand } = req.body;
    Pirate.create({ name, position, imageUrl, catchphrase, chests, pegLeg, eyePatch, hookHand })
        .then(pirate => res.json(pirate))
        .catch(err => res.status(400).json(err))
}

module.exports.updateOnePirate = (req, res) => {
    Pirate.findOneAndUpdate({_id: req.params.id}, req.body, { new: true, runValidators: true })
        .then(updatedPirate => res.json(updatedPirate))
        .catch(err => res.status(400).json(err))
}

module.exports.deletePirate = (req,res) => {
    Pirate.deleteOne({ _id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
}