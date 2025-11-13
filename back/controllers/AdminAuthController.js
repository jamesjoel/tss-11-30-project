import Admin from '../models/Admin.js';
import sha1 from 'sha1';
import jwt from 'jsonwebtoken'
import { ENC_KEY } from '../config/config.js';

let AdminAuth = async(req, res)=>{
    // console.log(req.body); return;
    let {username, password} = req.body;
    let result = await Admin.find({username : username});
    // console.log(result);return;
    if(result.length == 1)
    {
        
        if(result[0].password == sha1(password)){
            let obj = { _id : result[0]._id, name : result[0].name };
            let token = jwt.sign(obj, ENC_KEY);
            res.send({success:true, token, name : result[0].name});
        }else{

            res.send({success:false, errType : 2});
        }
    }
    else{
        res.send({success:false, errType : 1});
    }
}

export {AdminAuth}