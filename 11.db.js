const mysql = require('mysql')

const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin123',
    database: 'my_db_01'
})


// 测试是否正常
// db.query('SELECT 1', (err, res) => {
//     console.log(res);
// })

// db.query('select * from users', (err, res) => {
//     console.log(res);
// })

// const user = { username: 'ww', password: '4428974' }

// const sqlstr = 'insert into users (username,password) values (?,?)'

// db.query(sqlstr, [user.username, user.password], (err, res) => {
//     if (res.affectedRows == 1) console.log('插入成功');
// })

// 也可以
// const user= { username: 'ww', password: '4428974' }
// const sqlstr = 'insert into users set ?'
// db.query(sqlstr,user,(err,res)=>{
//     if(res.affectedRows==1)console.log('插入成功');
// })

// 改也和插入的方式一样
// const user = { username: 'isok', password: '374784' }

// const sqlstr = 'update users set ? where id=3'

// db.query(sqlstr, user, (err, res) => {
//     if (res.affectedRows === 1) console.log('更新成功');
// })


// 删除数据
// const sqlstr = 'delete from users where id=?'

// db.query(sqlstr, 2, (err, res) => {
//     if (res.affectedRows == 1) console.log('删除成功');
// })


// 标记删除，不是从数据库真正删除
const sqlstr = 'update users set status=? where id=?'

db.query(sqlstr, [1, 3], (err, res) => {
    if (res.affectedRows === 1) console.log('标记删除成功');
})


