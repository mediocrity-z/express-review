const express = require('express')

const app = express()

// express提供托管静态资源
app.use('/files', express.static('./assets'))
// 访问的时候直接访问，不用加assets目录，如果要使用目录可以在app.use第一个参数声明

app.listen(8000, () => {
    console.log('server is running');
})