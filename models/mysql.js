const mysql = requir('mysql');
const connetion = mysql.createConnnetion({
    host: '',
    user: '',
    password: '',
    database: ''
});

connection.connet((err) => {
  if(err) {
      console.log('连接数据库出错'+ err)
  }
  console.log('数据库连接成功')
});

