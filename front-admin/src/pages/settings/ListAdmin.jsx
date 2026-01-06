import React, { useEffect, useState } from 'react'
import {API_URL} from '../../config/API'
import axios from 'axios'

const ListAdmin = () => {

    let [allAdmin, setAllAdmin] = useState([]);

    useEffect(()=>{
        axios
        .get(`${API_URL}/adminauth/list`, {headers : {Authorization : localStorage.getItem("admin_access")}})
        .then(response=>{
            setAllAdmin(response.data);
        })
    },[])

  return (
    <div className="container">
        <div className="row">
            <h5>List All Registered Admins</h5>
         <table className='table my-3 table-light table-bordered table-hover table-striped'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Type</th>
                </tr>
            </thead>
            <tbody>
                {
                    allAdmin.map((item, index)=><tr key={item._id}>
                        <td>{index+1}</td>
                        <td>{item.name}</td>
                        <td>{item.username}</td>
                        <td>{item.type}</td>
                    </tr>)
                }
            </tbody>

        </table>
        </div>
    </div>
  )
}

export default ListAdmin