const express = require('express')

const app = express()


// 配置解析表单数据的中间件
app.use(express.urlencoded({ extended: false }))

// 需要在路由使用前定义cors
const cors = require('cors')
app.use(cors())

const apiRouter = require('./9.apiRouter')

app.use('/api', apiRouter)

app.listen(8000, () => {
    console.log('server is running');
})