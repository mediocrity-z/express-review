const express = require('express')

const app = express()

// 导入并注册路由模块

const router = require('./6.router-module')

app.use(router)

app.listen(8000, () => {
    console.log('server is running');
})