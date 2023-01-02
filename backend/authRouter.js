const Router = require('express')
const controller = require('./authController')
const { check } = require('express-validator')
const authMiddleware = require('./authMiddleware')
const roleMiddleware = require('./roleMiddleware')

const router = new Router()

router.post('/registration', [
    check('username', {en: 'Login cannot be empty', ru: 'Логин не может быть пустым'}).notEmpty(),
    check('password', {en: 'Passwords length must be greater than 4', ru: 'Длина пароля должен быть больше 4'}).isLength({min: 4})
], controller.registration)
router.post('/login', controller.login)
router.get('/users', roleMiddleware(["ADMIN"]), controller.getUsers)

module.exports = router;
