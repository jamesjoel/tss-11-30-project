import React, {useState} from 'react'
import './Style.css'
import {useSelector, useDispatch} from 'react-redux'
import {removeOne, removeItemServer} from '../redux/CartSlice'
import { useNavigate } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const MyCart = () => {
    let total = 0;
    let shipping=0;
    let navigate = useNavigate();
    let disp = useDispatch();
    let cartPro = useSelector(state=>state.CartSlice);


    let remove = (pro)=>{
        if(localStorage.getItem("user_access")){
          disp(removeItemServer(pro));
        }else{

          disp(removeOne(pro));
        }
    }
    const [show, setShow] = useState(false);
    
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

    let goToLogin = ()=>{
    /*
      window.location.href === "http://localhost:5173/detail/name/id"
      window.location.pathname === "/detail/name/id"
    */
    
    localStorage.setItem("checkloggedin", window.location.pathname)
    navigate("/login")
  }

  let checkUserLoggedIn = ()=>{
    if(localStorage.getItem("user_access")){
      navigate(`/user/buynow/${name}/${id}`)
    }else{
      handleShow();
    }
  }
  return (
    <>
        <div className="container my-4">
            <div className='row'>
                <div className='col-md-12'>
                    <h3>Items in Your Cart</h3>
                    <div className='table-responsive'>
                      <table className='table'>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Discount</th>
                                <th>Total</th>
                                <th>Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartPro.map(item=>{
                                    let x = item.price - (item.price*item.discount/100);
                                    total += x;
                                    shipping += item.shipping;
                                    return(
                                        <tr key={item._id}>
                                <th>
                                    <img src={`${import.meta.env.VITE_API_PATH}/product_images/${item.image}`} style={{height : "100px", width : "100px"}} />
                                </th>
                                <th>{item.title}</th>
                                <th>&#8377; {item.price}</th>
                                <th>&#8377; {item.price*item.discount/100} ({item.discount}%)</th>
                                <th>&#8377; {item.price - (item.price*item.discount/100)}</th>
                                <th>
                                    <button onClick={()=>remove(item)} className='btn'>
                                        <i class="fa fa-times text-danger" aria-hidden="true"></i>
                                    </button>
                                </th>
                            </tr>
                                    )
                                })
                            }
                            
                            
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 offset-md-8 mt-5 cart-bottom-box">
                    <div className="alert bg-olive-light">
                       <h3 className='text-light'>Cart Total</h3>
                       <div style={{display : 'flex', justifyContent : "space-between"}}>
                            <p>Sub-Total</p>
                            <p>&#8377; {total}                                
                            </p>
                       </div>
                       <div style={{display : 'flex', justifyContent : "space-between"}}>
                            <p>Shipping</p>
                            <p>&#8377; {shipping}</p>
                       </div>
                       <div className='sperator'></div>
                       <div style={{display : 'flex', justifyContent : "space-between", marginTop : "10px"}}>
                            <p>Total</p>
                            <p>&#8377; {total+shipping}</p>
                       </div>

                       <button onClick={checkUserLoggedIn} className='btn btn-primary'>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>You are not logged in, .....</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={goToLogin}>
            Go To Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default MyCart