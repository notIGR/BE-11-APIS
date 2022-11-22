const express = require('express')
const router = express.Router()

router.use(logger)
router.get('/', (req, res) => {
    res.send('User List')
})

router.get('/new', (req, res) => {
    res.render('users/new')
})

router.post('/', (req, res) => {
    const isValid = true
    if (isValid) {
        user.push({ firstName: req.body.firstName })
        res.redirect(`/users/${users.length - 1}`)
    } else {
        console.log("Error")
        res.render('users/new', { firstName: req.body.firstName })
    }
    console.log(req.body.firstName)
    res.send("HI")
})

router
    .route('/:id')
    .get((req, res) => {
        console.log(req.user)
        res.send(`GET user with ID ${req.params.id}`)
    })
    .put((req, res) => {
        res.send(`UPDATE user with ID ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`DELETE user with ID ${req.params.id}`)
    })

const users = [{ name: "Isaac" }, { name: "Israel" }, { name: "Celestine" }]

router.param('id', (req, res, next, id) => {
    req.user = users[id]
    next()
})

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

module.exports = router