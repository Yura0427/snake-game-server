const Router = require('express');
const { Candidate } = require('../models');
const router = new Router()

router.post('/', async (req, res) => {
    const body = req.body
    const { name, points } = body
    const candidate = await Candidate.create({ name, points });
    res.status(200).json(candidate)
})
router.get('/', async (req, res) => {
    const candidate = await Candidate.findAll()
    res.status(200).json(candidate)
})
module.exports = router