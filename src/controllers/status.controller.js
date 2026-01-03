let response=require('../service/status.service')
let serverstatus=(req,res)=>{
    res.json(response());
}
module.exports=serverstatus;