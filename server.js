/*
应用的启动模块
 */
const mongoose = require('mongoose')
const express = require('express')
const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
const cookieParser = require('cookie-parser')
app.use(cookieParser())
const indexRouter = require('./routers')
app.use('/', indexRouter)  //

const fs = require('fs')

mongoose.connect('mongodb://localhost/server_db2', {useNewUrlParser: true})
  .then(() => {
    console.log('连接数据库成功!!!')
    app.listen('5000', () => {
      console.log('服务器启动成功, 请访问: http://localhost:5000')
    })
  })
  .catch(error => {
    console.error('连接数据库失败', error)
  })

