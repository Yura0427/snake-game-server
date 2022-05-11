const Router = require('express');
const router = new Router()
const candidateRouter = require('./candidateRouter');

router.use('/candidate', candidateRouter)

module.exports = router