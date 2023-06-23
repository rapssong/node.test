const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// app.get('/user/:id', (req, res) => {
//     // const q = req.params
//     // console.log(q.id)
//     const q = req.query
//     console.log(q.q)
//     console.log(q.name)
//     console.log(q.age)
//     res.json({'유저아이디': q.name})
// })

app.get('/sound/:name', (req, res) => {
    const { name } = req.params
    console.log(name)
    
    if(name == "dog"){
        res.json({'sound' : '멍멍'})
    }else if(name == 'cat'){
        res.json({'sound': '야옹'})
    }else {
        res.json({'그소리' : '알수없음'})
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})