let response= require('../service/fact.service')
let =fetchfact=(req,res)=>{
  res.json(response());
}
module.exports=fetchfact;