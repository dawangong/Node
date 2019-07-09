const express = require('express');
const app = express();
const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const path = require('path');

app.set('views', path.join(__dirname, 'views'));  // 设置存放模板文件的目录
app.set('view engine', 'ejs');  // 设置模板引擎为 ejs

app.use('/', indexRouter);
app.use('/user', userRouter);

app.listen(3000, () => {
  console.log('我在监听3000端口~');
});
