import React, { useEffect, useState } from 'react'
import './CategoryDropDown2.css'
import axios from 'axios'
import { API_URL } from '../config/API'
import { NavLink } from 'react-router-dom'

const CategoryDropDown2 = () => {

    let [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get(`${API_URL}/category/getallcategorywithsubcate`)
            .then(response => {
                setData(response.data);
            })
    }, [])


    let SEOFrndlyURL = (str)=>{ // School Bags   ----- 
        let arr = str.split(" ");
        let newstr = arr.join("-");
        return newstr;
        
    }

    

    return (
        <div className="dropdown">
            <button className="nav-link dropdown-toggle" type="button" id="dropdownMenuButton"
                data-bs-toggle="dropdown" aria-expanded="false">
                SHOP
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {
                    data.map(item => {
                        return (
                            <li>
                                <NavLink className="dropdown-item" to={`/shop/${SEOFrndlyURL(item.category.title)}`}>
                                    {item.category.title} {item.subcate.length > 0 ? <span>&raquo;</span> : ''} 
                                </NavLink>
                                {
                                    item.subcate.length > 0
                                    ?
                                    <ul className="dropdown-menu dropdown-submenu">
                                    {
                                        item.subcate.map(item2=>{
                                            return(
                                                <li>
                                                    <NavLink className="dropdown-item" to={`/shop/${SEOFrndlyURL(item.category.title)}/${SEOFrndlyURL(item2.title)}`}>{item2.title}</NavLink>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                                :
                                ''
                                }
                            </li>
                        )
                    })
                }

            </ul>
        </div>
    )
}

export default CategoryDropDown2

/*

JSX  


*/