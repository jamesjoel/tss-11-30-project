import mongoose from '../db/conn.js';

let OrderSchema = mongoose.Schema({
    razorpay_order_id : String,
    razorpay_payment_id : String,
    razorpay_signature : String,
    user_id : { type : mongoose.Schema.Types.ObjectId, ref : "user"},
    product_id : { type : mongoose.Schema.Types.ObjectId, ref : "product"},
    date : { type : Date, default : new Date()},
    amount : Number,
    address : String,
    invoice_num : String
})

let Order = mongoose.model("order", OrderSchema)

export default Order;