import { RAZORPAY_KEY, RAZORPAY_SECRET } from '../config/config.js';
import Razorpay from 'razorpay'
import User from '../models/User.js'
import Order from '../models/Order.js';
import Product from '../models/Product.js'
import fs from 'fs'

import pdfnode from 'pdf-creator-node';
import path from 'path'
import { UniqueString } from 'unique-string-generator'



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
    let in_num = Date.now();
    let user_result = await User.find({_id : req.body.user_id});
    let pro_result = await Product.find({_id : req.body.product_id});
    req.body.invoice_num = in_num;
    let result = await Order.create(req.body);
    let dis = pro_result[0].price * pro_result[0].discount / 100;
    let f_amount = pro_result[0].price - dis + 150;
    const html = fs.readFileSync('template.html', 'utf8');
    
        const options = {
            format: 'A4',
            orientation: 'portrait',
            border: '10mm',
            header: {
                height: '15mm',
                contents: `<div class="invoice-box">
                <table cellpadding="0" cellspacing="0">
                    <tr class="top">
                        <td colspan="2">
                            <table>
                                <tr>
                                    <td class="title">
                                        <h3>KAIRA</h3>
                                    </td>
    
                                    <td>
                                        Invoice #: ${in_num}<br />
                                        Created: ${new Date()}<br />
                                        Due: ${new Date()}
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
    
                    <tr class="information">
                        <td colspan="2">
                            <table>
                                <tr>
                                    <td>
                                        303, Gold Start Building<br />
                                        M. G. Road<br />
                                        Indore, MP 452001
                                    </td>
    
                                    <td>
                                        ${user_result[0].name}<br />
                                        ${user_result[0].email}<br />
                                        ${req.body.address}
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
    
                    <tr class="heading">
                        <td>Payment Method</td>
    
                        <td>Online #</td>
                    </tr>
    
                    <tr class="details">
                        <td>Online</td>
    
                        <td>${req.body.amount}</td>
                    </tr>
    
                    <tr class="heading">
                        <td>Item</td>
    
                        <td>Price</td>
                    </tr>
    
                    <tr class="item">
                        <td>${pro_result[0].title}</td>
    
                        <td>&#8377; ${pro_result[0].price}</td>
                    </tr>
    
                    <tr class="item">
                        <td>Discount</td>
    
                        <td>- &#8377; ${dis}</td>
                    </tr>
    
                    <tr class="item last">
                        <td>Shipping</td>
    
                        <td>+  &#8377; 150</td>
                    </tr>
    
                    <tr class="total">
                        <td></td>
    
                        <td>Total: &#8377; ${f_amount}</td>
                    </tr>
                </table>
            </div>`
            }
        };
    
        const document = {
            html: html,
            path: path.resolve()+`/assets/invoices/${UniqueString()}.pdf`,
            type: '', // Can be 'buffer', 'stream', or empty for file
        };
    
        pdfnode.create(document, options)
            .then(result2 => {
                
                res.send({success:true, result});
            })
            .catch(error => {
                 res.send({success:false})
                
            });

}
let GetAllOrder = async(req, res)=>{
    let result = await Order.find();
    res.send(result);
}

export {Checkout, ConfirmOrder, GetAllOrder}