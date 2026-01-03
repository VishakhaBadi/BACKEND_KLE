require('dotenv').config();
let app=require('./app')
const port=process.env.PORT
let statusrouter=require('./src/routes/status.routes')
let factrouter=require('./src/routes/fact.routes')
app.use('/',statusrouter)
app.use('/api',factrouter)
app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})