const express = require('express')

const apiRouter = express.Router()

apiRouter.get('/user', (req, res) => {
    res.send('users')
})

// get接口
apiRouter.get('/get', (req, res) => {
    const query = req.query


    res.send({
        status: 0,
        msg: 'succeed',
        data: query
    })
})

// post接口
apiRouter.post('/post', (req, res) => {
    const body = req.body

    res.send({
        status: 0,
        msg: 'succeed',
        data: body
    })
})

module.exports = apiRouter