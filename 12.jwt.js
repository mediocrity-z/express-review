const express = require('express')

const app = express()

const cors = require('cors')
app.use(cors())

const bp = require('body-parser')
app.use(bp.urlencoded({ extended: false }))

const jwt = require('jsonwebtoken')

const { expressjwt } = require('express-jwt')

const secretKey = '666 ^_^'

app.use(expressjwt({ secret: secretKey, algorithms: ['HS256'] }).unless({ path: [/^\/api\//] }))

app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        return res.send({
            status: 401,
            message: '无效token'
        })
    }

    res.send({
        status: 500,
        message: '未知错误'
    })

})

app.post('/api/login', (req, res) => {
    const userInfo = req.body

    const tokenStr = jwt.sign({ username: userInfo.username }, secretKey, { expiresIn: '5s' })

    if (userInfo.username != 'admin' || userInfo.password != '123456') {
        res.send({
            status: 400,
            message: '登陆失败'
        })
    }
    else {
        res.send({
            status: 200,
            message: '登陆成功',
            token: tokenStr
        })
    }
})


app.get('/admin/get', (req, res) => {
    console.log(req.auth);
    res.send({
        status: 200,
        message: '获取信息成功',
        data: req.auth
    })
})

app.listen(8000, () => {
    console.log('server is running');
})