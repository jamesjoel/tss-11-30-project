import React, { useEffect, useRef, useState } from 'react'
import './NewHeader.css'
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux'

const NewHeader = () => {
    let togglerBtn = useRef();
    let [cateData, setCateData] = useState([]);
  let cartPro = useSelector(state=>state.CartSlice);
  let userLoggedIn = useSelector(state=>state.AuthSlice);
    let [cateArr, setCateArr] = useState([]);
    useEffect(()=>{
        axios
        .get(`${import.meta.env.VITE_API_URL}/category/getallcategorywithsubcate`)
        .then(response=>{
            setCateArr(response.data);
        })
    },[])
    let [ul_show, setUl_show] = useState('none')

    

    let showCate = ()=>{
        setUl_show(curr => curr == "block" ? "none" : "block")
        let hide_ele=document.getElementsByClassName("nav-mobile-ul-subcate");
        for(let i=0; i< hide_ele.length; i++){
            hide_ele[i].style.display = "none"
        }
    }

    let showSubCate = (index)=>{
        let hide_ele=document.getElementsByClassName("nav-mobile-ul-subcate");
        for(let i=0; i< hide_ele.length; i++){
            hide_ele[i].style.display = "none"
        }
        let ele = document.getElementById('subcate_'+index);
        ele.style.display = ele.style.display=="block" ? 'none' : 'block';
    }

    let togglerBtnClose = ()=>{
        togglerBtn.current.click();
    }

    let SEOFrndlyURL = (str)=>{ // School Bags   ----- 
        let arr = str.split(" ");
        let newstr = arr.join("-");
        return newstr;
        
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
            <div className="container">


                <button ref={togglerBtn}  className="navbar-toggler" aria-expanded="false" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <a className="navbar-brand fw-bold" href="#">KAIRA</a>
                {
                    userLoggedIn
                    ?
                    <NavLink className="navbar-brand you-button" to="/user/myaccount">You</NavLink>
                    :
                    <NavLink className="navbar-brand you-button" to="/login">Login</NavLink>

                }
                




                <div className="collapse navbar-collapse" id="mainNavbar">


                    <ul className="navbar-nav mx-auto gap-lg-4">

                        <li className="nav-item">
                            <NavLink onClick={togglerBtnClose} className="nav-link active" to="/">Home</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink onClick={togglerBtnClose} className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink onClick={togglerBtnClose} className="nav-link" to="/contact">Contact</NavLink>
                        </li>


                        <li className="nav-item dropdown nav-desktop">
                            <a className="nav-link" href="#" data-bs-toggle="dropdown">
                                Categories
                                <i class="fa fa-sort-desc down-arrow" aria-hidden="true"></i>
                            </a>

                            <ul className="dropdown-menu">

                                {
                                    cateArr.map((item1, index1)=>{
                                        return(
                                            <li>
                                    <button className="dropdown-item submenu-toggle" type="button">
                                        {item1.category.title}
                                    </button>
                                    <ul className="dropdown-menu dropdown-submenu">
                                        {
                                            item1.subcate.map((item2, index2)=>{
                                                return(
                                                    <li><NavLink className="dropdown-item" to={`/shop/${SEOFrndlyURL(item1.category.title)}/${SEOFrndlyURL(item2.title)}`}>{item2.title}</NavLink></li>
                                                )
                                            })
                                        }
                                    </ul>
                                </li>
                                        )
                                    })
                                }

                            </ul>
                        </li>

                        <li className='nav-mobile nav-item'>
                            <button onClick={showCate} className='nav-link' href=''>Categories
                                <i className='fa fa-sort-desc down-arrow'></i>
                            </button>
                            <ul className='nav-mobile-ul' style={{ display: ul_show }}>
                                <li className='nav-mobile-item'>
                                    {
                                        cateArr.map((item1, index) => {
                                            return (
                                                <>
                                                    <button onClick={()=>showSubCate(index)} className='nav-mobile-link'>{item1.category.title}
                                                        <i class="fa fa-sort-desc down-arrow" aria-hidden="true"></i>
                                                    </button>
                                                    <ul id={`subcate_${index}`} className='nav-mobile-ul-subcate'>

                                                        {
                                                            item1.subcate.map((item2, index2)=>{
                                                                return(
                                                                    <li className='nav-mobile-item-inner'>
                                                                        <NavLink onClick={togglerBtnClose} to={`/shop/${SEOFrndlyURL(item1.category.title)}/${SEOFrndlyURL(item2.title)}`} className='nav-mobile-link'>{item2.title}</NavLink>
                                                                    </li>
                                                                )
                                                            })
                                                        }
                                                        
                                                    </ul>
                                                </>
                                            )
                                        })
                                    }




                                </li>
                            </ul>
                        </li>

                    </ul>


                    <ul className="navbar-nav">
                        {
                            userLoggedIn
                            ?
                            <li className="nav-item dropdown">
                            <a className="nav-link" href="#" data-bs-toggle="dropdown">
                                {localStorage.getItem("user_name")}
                                <i class="fa fa-sort-desc down-arrow" aria-hidden="true"></i>

                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><NavLink onClick={togglerBtnClose} className="dropdown-item" to="/user/myaccount">My Account</NavLink></li>
                                <li><NavLink onClick={togglerBtnClose} className="dropdown-item" to="/user/my-order">My Orderes</NavLink></li>
                                <li><NavLink onClick={togglerBtnClose} className="dropdown-item" to="/user/logout">Logout</NavLink></li>
                                
                            </ul>
                        </li>
                        :
                        <>
                        <li className='nav-item'>
                            <NavLink onClick={togglerBtnClose} to="/login" className="nav-link">Login</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink onClick={togglerBtnClose} to="/signup" className="nav-link">Signup</NavLink>
                        </li>
                        </>
                        }
                        <li className='nav-item'>
                            <NavLink onClick={togglerBtnClose} to="/mycart" className='nav-link'><i className='fa fa-shopping-cart'></i> ({cartPro.length})</NavLink>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>

    )
}

export default NewHeader