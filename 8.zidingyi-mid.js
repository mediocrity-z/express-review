const express = require('express')

const app = express()

const qs = require('node:querystring')

app.use((req, res, next) => {
    let str = ''

    // data事件返回客户端传入的参数
    req.on('data', chunk => {
        str += chunk
    })

    req.on('end', () => {
        console.log(str);

        const body = qs.parse(str)

        req.body = body
    })


    next()
})

app.post('/user', (req, res) => {
    res.send(req.body)
})

app.listen(8000, () => {
    console.log('server is running');
})