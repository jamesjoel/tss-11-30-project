import React, {useState, useEffect, useRef} from 'react'
import axios from 'axios';
import { API_URL, API_PATH } from '../../config/API';
import { NavLink } from 'react-router-dom'
import './UserNav.css'

const UserNav = () => {

  let image = useRef();

   let [user, setUser] = useState({});

  useEffect(()=>{
    axios
    .get(`${API_URL}/user/profile`, 
      { 
        headers : 
          { 
            Authorization : localStorage.getItem("user_access") 
          }
      })
    .then(response=>{
        // console.log(response.data);
        setUser(response.data);
    })
  },[])


  let upload = async()=>{
    // console.log(image.current.files[0])
    let file = image.current.files[0]
    let form = new FormData();
    form.append("photo", file);
    let response = await axios.put(`${API_URL}/user/uploadimage`, form,  { headers : {Authorization : localStorage.getItem("user_access")}})
    // console.log(response.data)
    setUser({...user, image : response.data.image});

  }

  return (
    <div className="col-md-3">
          <div className='alert alert-secondary d-flex justify-content-around'>
              <input ref={image} onChange={upload} id='fileupload' type='file' style={{display : "none"}} />
            <div className='profilepic'>
              
              <img src={ `${API_PATH}/user_images/` + (user.image ? user.image : user.gender=="male" ? "avatar_male.png" : "avatar_female.jpg") } className='img-thumbnail rounded-pill profilepic__image' style={{height : "70px", width : "70px"}} />
              <div class="profilepic__content">
                  <label htmlFor='fileupload'>
                    <span class="profilepic__icon"><i class="fa fa-camera"></i></span>
                  <span class="profilepic__text">Edit Profile</span>
                  </label>
              </div>
            </div>
            <div>
              <small>Hello</small>
            <h5 className='m-0'>{localStorage.getItem("user_name")}</h5>
            </div>
          </div>
          <div className='alert alert-secondary'>
            <ul className='nav flex-column'>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/user/my-order'><i class="fa fa-briefcase" aria-hidden="true"></i> My Orders &nbsp;&nbsp;&nbsp;&nbsp; <i class="fa fa-angle-right" aria-hidden="true"></i></NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/user/myaccount'><i class="fa fa-user" aria-hidden="true"></i> My Account &nbsp;&nbsp;&nbsp;&nbsp; <i class="fa fa-angle-right" aria-hidden="true"></i></NavLink>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href=''><i class="fa fa-address-book" aria-hidden="true"></i> Manage Address &nbsp;&nbsp;&nbsp;&nbsp; <i class="fa fa-angle-right" aria-hidden="true"></i></a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href=''><i class="fa fa-heart" aria-hidden="true"></i> Wishlist &nbsp;&nbsp;&nbsp;&nbsp; <i class="fa fa-angle-right" aria-hidden="true"></i></a>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/user/logout'><i class="fa fa-power-off" aria-hidden="true"></i> Logout</NavLink>
              </li>
            </ul>
          </div>
        </div>
  )
}

export default UserNav