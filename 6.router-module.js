const express = require('express')

const router = express.Router()

router.get('/user/list', (req, res) => {
    res.send('users list')
})

router.post('/user/add', (req, res) => {
    res.send('users add')
})

module.exports = router