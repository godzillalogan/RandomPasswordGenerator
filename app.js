//透過 require 載入 express 和樣板引擎 express-handlebars
const express = require('express')
const exphbs = require('express-handlebars')
const generatePassword = require('./generate_password')
const app = express()
const port = 3000

app.engine('handlebars',exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// setting body-parser,app.use() - 這個方法，規定了不管從哪個路由發送進來的請求，都要先經過 app.use
//這行程式碼擺放的順序需要在所有路由設定之前。
app.use(express.urlencoded({ extended: true }))

app.get('/',(req, res) => {
    res.render('index')
})

app.post('/',(req, res) => {
    const password = generatePassword(req.body)
    res.render('index',{password:password})
})




app.listen(port, ()=>{
    console.log(`Express app listening on port ${port}.`)
})