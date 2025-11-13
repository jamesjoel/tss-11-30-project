import React, {useEffect} from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import {NavLink, useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'
import { API_URL, API_PATH } from '../config/API'
import { useState } from 'react'
const Detail = () => {

  let param = useParams();
  let navigate = useNavigate();

  let [pro, setPro] = useState({});

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  let id = param.id;
  let name = param.title;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  useEffect(()=>{
    axios
    .get(`${API_URL}/product/${id}`)
    .then(response=>{
      // console.log(response.data)
      setPro(response.data.result);
    })
  },[])

  let checkUserLoggedIn = ()=>{
    if(localStorage.getItem("user_access")){
      navigate(`/user/buynow/${name}/${id}`)
    }else{
      handleShow();
    }
  }

  let goToLogin = ()=>{
    /*
      window.location.href === "http://localhost:5173/detail/name/id"
      window.location.pathname === "/detail/name/id"
    */
    
    localStorage.setItem("checkloggedin", window.location.pathname)
    navigate("/login")
  }

  return (
    <>
    <div className="container my-5">
      <div className="row">
        <div className="col-md-5">
          <img src={`${API_PATH}/product_images/${pro.image}`} className='img-thumbnail' />
          <br />
          <button onClick={checkUserLoggedIn} className='btn m-3 btn-lg btn-success'>Buy Now</button>
          <NavLink to='' className='btn m-3 btn-lg btn-primary'>Add To Cart</NavLink>
        </div>
        <div className="col-md-7">
          <p>
            <small>Home > { pro.cate_id ? pro.cate_id.title : '' } > {pro.sub_cate_id ? pro.sub_cate_id.title : ''}</small>
          </p>
          <h5>{pro.title}</h5>
          <h4>&#8377; { pro.price - (pro.price*pro.discount/100) }.00</h4>
          <small><del>&#8377; {pro.price}.00</del> <span className='badge bg-info'>{pro.discount}% off</span></small>
          <p>Color : {pro.color}</p>
          <p>Size : {pro.size}</p>
          <p>{pro.detail}</p>
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

export default Detail