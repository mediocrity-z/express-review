var http = require('http')

const app = http.createServer()

app.on('request', function (req, res) {
    const str = `请求的url方法是${req.method}`

    // 解决中文乱码
    res.setHeader('Content-type', 'text/html;charset=utf-8')

    res.end(str)
})

app.listen(8000, function () {
    console.log('server is running');
})