import { RAZORPAY_KEY, RAZORPAY_SECRET } from '../config/config.js';
import Razorpay from 'razorpay'

let rzpy = new Razorpay({
    key_id : RAZORPAY_KEY,
    key_secret : RAZORPAY_SECRET
})
let Checkout = async(req, res)=>{
    // console.log(req.body);
    let {amount} = req.body;
    try{
        const order = await rzpy.orders.create({
            amount : amount*100,
            currency : 'INR'
        });
        res.send({success:true, orderId : order.id})
    }catch(err){
        
        res.send({success:false})
    }
}

let ConfirmOrder = async(req, res)=>{
    // console.log(req.body);
    
}

export {Checkout, ConfirmOrder}