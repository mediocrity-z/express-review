// 1.如果服务器端没有数据要返回到客户端的话，就直接用res.end()
// 2.如果服务器需要有数据返回到客户端的话，就需要用res.send()

const express = require('express')

const app = express()

app.get('/user/:id', (req, res) => {


    res.send({ name: '123', age: '456' })

    // 静态参数
    // const query = req.query
    // res.send(query)

    // 动态参数
    // const params = req.params
    // res.send(params)
})

app.post('/login', (req, res) => {
    res.send('请求成功')
})

app.listen(8000, () => {
    console.log('server is running');
})