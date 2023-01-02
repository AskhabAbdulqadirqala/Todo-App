const Router = require('express')
const controller = require('./dataController')

const router = new Router()

router.patch('/update', controller.update)

module.exports = router;
