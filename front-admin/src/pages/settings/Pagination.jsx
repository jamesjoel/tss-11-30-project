import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {API_URL} from '../../config/API'
import {NavLink, useParams} from 'react-router-dom'

const Pagination = () => {
    let param = useParams();

    let num = param.num ? param.num : 1;

    let [allCity, setAllCity] = useState([]);
    let [pageNum, setPageNum] = useState(1);
    let [recPerPage, setRecPerPage] = useState(100);
    
    let [pages, setPages] = useState(0)
    let [totalPages, setTotalPages] = useState([])


    useEffect(()=>{
        if(param.num && param.total){
            axios
        .get(`${API_URL}/pagination/${param.num}/${recPerPage}`)
        .then(response=>{
            setAllCity(response.data);
        })
        }else{
            axios
        .get(`${API_URL}/pagination/${pageNum}/${recPerPage}`)
        .then(response=>{
            setAllCity(response.data);
        })
        }
    },[param])

    useEffect(()=>{
        axios
        .get(`${API_URL}/pagination/total`)
        .then(response=>{
            // setTotalRec(response.data.total);
            let totalRec = response.data.total;
            let pages = Math.ceil(totalRec/recPerPage); // 13
            setPages(pages);
            let arr = Array.from({length : pages});
            setTotalPages(arr);
        })
    },[])


  return (
    <div>
        <ul className='pagination '>
            <li className='page-item'>
                <NavLink className={'page-link ' + (num==1 ? 'disabled' : '')} to={`/setting/pagination/${num-1}/${recPerPage}`}>Prev</NavLink>
            </li>
            {
                totalPages.map((_, index)=>{
                    return(
                        <li className={'page-item '+ (num == index+1 ? 'active' : '')}>
                            <NavLink to={`/setting/pagination/${index+1}/${recPerPage}`} className='page-link bg-dark text-light'>{index+1}</NavLink>
                        </li>
                    )
                })
            }
            <li className='page-item'>
                <NavLink className={'page-link ' + (num==pages ? 'disabled' : '')} to={`/setting/pagination/${ parseInt(num)+1}/${recPerPage}`}>Next</NavLink>
            </li>
           
        </ul>
        <br />
        <table className="table table-dark">
            <thead>
                <tr>
                    <th>S.No.</th>
                    <th>State</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                {
                    allCity.map((item, index)=>{
                        return(
                            <tr key={index}>
                                <td>{param.num ? ((num - 1)*recPerPage + index + 1) : index+1}</td>
                                <td>{item.state}</td>
                                <td>{item.name}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Pagination

/*
let arr = Array.from({length : 5})


useEffect(()=>{
                            --- every time run
})

useEffect(()=>{
                            --- one time run
},[])


useEffect(()=>{
                            --- when change on state "a" then rum
},[a])

*/