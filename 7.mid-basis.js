const express = require('express')

const app = express()

// 全局中间件，express的是线性模型，中间件的调用按照线性关系执行
// 中间件的作用：中间件共享一个req和res，可以给上游的中间件给req或res添加属性和方法给下游的中间件使用
const mw = function (req, res, next) {
    console.log('中间件函数');
    req.name = '123'
    req.age = '456'
    next()
}

// 局部生效的中间件
const wm = function (req, res, next) {
    console.log('局部生效');
    next()
}

app.get('/user', wm, function (req, res) {
    res.send('用户')
})

app.use(mw, (req, res, next) => {
    console.log(req.name, req.age);
})

app.get('/', (req, res) => {
    console.log('调用路由');
    res.send('123')
})

app.listen(8000, () => {
    console.log('server is running');
})