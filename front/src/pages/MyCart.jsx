import React from 'react'
import './Style.css'
const MyCart = () => {
  return (
        <div className="container my-4">
            <div className='row'>
                <div className='col-md-12'>
                    <h3>Items in Your Cart</h3>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>
                                    <img src='/public/images/bag1.jpg' style={{height : "100px", width : "100px"}} />
                                </th>
                                <th>Bag</th>
                                <th>&#8377; 3500.00</th>
                                <th>2</th>
                                <th>&#8377; 7000.00</th>
                                <th>
                                    <button className='btn'>
                                        <i class="fa fa-times text-danger" aria-hidden="true"></i>
                                    </button>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <img src='/public/images/bag1.jpg' style={{height : "100px", width : "100px"}} />
                                </th>
                                <th>Bag</th>
                                <th>&#8377; 3500.00</th>
                                <th>2</th>
                                <th>&#8377; 7000.00</th>
                                <th>
                                    <button className='btn'>
                                        <i class="fa fa-times text-danger" aria-hidden="true"></i>
                                    </button>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <img src='/public/images/bag1.jpg' style={{height : "100px", width : "100px"}} />
                                </th>
                                <th>Bag</th>
                                <th>&#8377; 3500.00</th>
                                <th>2</th>
                                <th>&#8377; 7000.00</th>
                                <th>
                                    <button className='btn'>
                                        <i class="fa fa-times text-danger" aria-hidden="true"></i>
                                    </button>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 offset-md-8 mt-5 cart-bottom-box">
                    <div className="alert bg-olive-light">
                       <h3 className='text-light'>Cart Total</h3>
                       <div style={{display : 'flex', justifyContent : "space-between"}}>
                            <p>Sub-Total</p>
                            <p>&#8377; 7000.00                                
                            </p>
                       </div>
                       <div style={{display : 'flex', justifyContent : "space-between"}}>
                            <p>Shipping</p>
                            <p>Vijay Nagar, Indore</p>
                       </div>
                       <div className='sperator'></div>
                       <div style={{display : 'flex', justifyContent : "space-between", marginTop : "10px"}}>
                            <p>Total</p>
                            <p>&#8377; 7000.00</p>
                       </div>

                       <button className='btn btn-primary'>Checkout</button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default MyCart