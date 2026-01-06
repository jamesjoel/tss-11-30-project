import React, { useEffect, useState, useRef } from 'react'
import axios, { all } from 'axios';
import './ViewAllProduct.css'
import ProductBox from '../ui/ProductBox';
import { useSearchParams } from 'react-router-dom'

import RangeSlider from 'react-range-slider-input';
import "react-range-slider-input/dist/style.css";


const ViewAllProduct = () => {
   
    let [minPrice, setMinPrice] = useState(100)
    let [maxPrice, setMaxPrice] = useState(10000)

    let [searchParams, setSearchParams] = useSearchParams();

    let [cateData, setCateData] = useState([]);
    let [allPro, setAllPro] = useState([]);

    let [clearFilterArr, setClearFilterArr] = useState([]);

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])


     useEffect(()=>{
    axios
    .get(`${import.meta.env.VITE_API_URL}/category/getallcategorywithsubcate`)
    .then(response=>{
        setCateData(response.data)
    })
  },[])


  

  useEffect(()=>{
   GetAllProduct(); 
  },[])

  let GetAllProduct = async()=>{
   let response = await axios.get(`${import.meta.env.VITE_API_URL}/product`)
   setAllPro(response.data.result);
    
  }

  let GetAllProductByFilter = async(obj, isSubCate=false)=>{
    const allParamsObject = Object.fromEntries(searchParams.entries())
    if(isSubCate==true){
        delete allParamsObject.subcategory;
    }
    
    const finalSearchObj = {...allParamsObject, ...obj}
    
    const queryString = new URLSearchParams(finalSearchObj).toString();
    // console.log(queryString)
    let response = await axios.get(`${import.meta.env.VITE_API_URL}/search?${queryString}`);
    setAllPro(response.data.result)
}






  let searchByColor = (color)=>{
    // console.log(color)
    const allParamsObject = Object.fromEntries(searchParams.entries())
    setSearchParams({...allParamsObject, color : color});
    GetAllProductByFilter({color : color})
    clearFilterHandler({color : color});
}
let searchBySize = (size)=>{
    // console.log(color)
    const allParamsObject = Object.fromEntries(searchParams.entries())
    setSearchParams({...allParamsObject, size : size});
    GetAllProductByFilter({size : size})
     clearFilterHandler({size : size});
}

let searchByDiscount = (dis)=>{
    const allParamsObject = Object.fromEntries(searchParams.entries())
    setSearchParams({...allParamsObject, discount : dis});
    GetAllProductByFilter({discount : dis})
    clearFilterHandler({discount : dis})

}
let handlePrice = async(e)=>{
    
    setMinPrice(e[0])
    setMaxPrice(e[1])
    // let obj = { min : e[0], max : e[1] };
    //const allParamsObject = Object.fromEntries(searchParams.entries())
    //setSearchParams({...allParamsObject, ...obj});
    //GetAllProductByFilter(obj)
    
}

let searchByPrice = ()=>{
    let obj = { min : minPrice, max : maxPrice };
    const allParamsObject = Object.fromEntries(searchParams.entries())
    setSearchParams({...allParamsObject, ...obj});
    GetAllProductByFilter(obj)
}

let searchByCategory = (cate)=>{

    const allParamsObject = Object.fromEntries(searchParams.entries())
    
    if(allParamsObject.subcategory){
        delete allParamsObject.subcategory;
        setSearchParams({...allParamsObject, category : cate});
        GetAllProductByFilter({category : cate}, true)
        
    }else{
        
        setSearchParams({...allParamsObject, category : cate});
        GetAllProductByFilter({category : cate})
    }  

    
}

let searchBySubCategory = (cate, subcate)=>{
    const allParamsObject = Object.fromEntries(searchParams.entries())
    setSearchParams({...allParamsObject, category : cate, subcategory : subcate});
    GetAllProductByFilter({category : cate, subcategory : subcate})
}


let clearFilterHandler = (obj)=>{
    const allParamsObject = Object.fromEntries(searchParams.entries())
    let clearFilterObj = {...obj, ...allParamsObject};
    // {size : large, color : red, dis : 10}
    // [{size:lagre}, {color:red}, {dis:10}]
    let arr = [];
    for(let [k, v] of Object.entries(clearFilterObj)){
        if(k=="discount"){
            arr.push({ [k] : v+"% discount more"});
        }else{
            arr.push({[k] : v});

        }
    }
    // console.log(arr);
    setClearFilterArr(arr);
}

let removeClearFilter = (value)=>{
    console.log(value)
}


  return (
    <div className="container-fluid my-5">
        <div className="row">
            <div className="col-md-3">
                <div className="alert alert-secondary">
                    <h4>Filter</h4>
                    <hr />
                    Categries
                    <div class="d-flex">
    
                        <nav class="sidebar">
                            <ul class="nav flex-column">
                                {
                                    cateData.map(item=><li class="nav-item dropdown">
                                    <button class="nav-link dropdown-toggle" onClick={()=>searchByCategory(item.category.title)}>{item.category ? item.category.title : ''}</button>
                                    <ul class="dropdown-menu">
                                        {
                                            item.subcate.map(item2=><li>
                                            <button class="dropdown-item" onClick={()=>searchBySubCategory(item.category.title, item2.title)}>{item2.title}</button>
                                        </li>)
                                        }
                                        
                                        
                                    </ul>
                                </li>)
                                }
                            </ul>
                        </nav>
                    </div>
                    <hr />
                    <p>Price</p>
                    <div className="row">
                        <div className='d-flex justify-content-between'>
                        <p>&#8377;{minPrice}</p>
                        <p>&#8377;{maxPrice}</p>

                        </div>
                        <RangeSlider min={100} step={100} max={10000} onInput={(e)=>handlePrice(e)} onThumbDragEnd={searchByPrice} />
                        
                    </div>
                    <hr />
                    <p>Color</p>
                    <div style={{display : "flex", flexWrap: "wrap"}} className='color-box'>
                        <div onClick={()=>searchByColor('red')} className='red'></div>
                        <div onClick={()=>searchByColor('green')} className='green'></div>
                        <div onClick={()=>searchByColor('blue')} className='blue'></div>
                        <div onClick={()=>searchByColor('yellow')} className='yellow'></div>
                        <div onClick={()=>searchByColor('pink')} className='pink'></div>
                        <div onClick={()=>searchByColor('black')} className='black'></div>
                        <div onClick={()=>searchByColor('white')} className='white'></div>
                        
                    </div>
                    <hr />
                    <p>Size</p>
                    <div>
                        <button onClick={()=>searchBySize('small')} className='px-3 border border-dark m-1'>Small</button>
                        <button onClick={()=>searchBySize('medium')} className='px-3 border border-dark m-1'>Medium</button>
                        <button onClick={()=>searchBySize('large')} className='px-3 border border-dark m-1'>Large</button>
                    </div>
                    <hr />
                    <p>Discount</p>
                    <select onChange={(e)=>searchByDiscount(e.target.value)} className='form-control'>
                        <option>Discount</option>
                        <option value={10}>10% and More</option>
                        <option value={25}>25% and More</option>
                        <option value={40}>40% and More</option>
                        <option value={50}>50% and More</option>
                        <option value={70}>70% and More</option>
                        
                    </select>
                </div>
            </div>
            <div className="col-md-9">
                <p>All Product</p>
                <div>
                    {
                       clearFilterArr.map((item)=><span className='clear-filter'>{ item[Object.keys(item)] } 
                        &nbsp;<i className='fa fa-close'></i>
                    </span>)
                    }                
                    
                
                </div>
                <div className="row">
                    {
                         allPro.map(item=><ProductBox item={item}  key={item._id} />)
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewAllProduct
