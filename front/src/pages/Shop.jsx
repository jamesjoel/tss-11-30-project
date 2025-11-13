/*
5173/shop/bags
5173/shop/bags/sling-bags
*/

import React, {useState, useEffect} from 'react'
import { API_URL } from '../config/API';
import axios from 'axios'
import ProductBox from '../ui/ProductBox';
import { useParams } from 'react-router-dom';

const Shop = () => {
  let param = useParams()

  let [allPro, setAllPro] = useState([]);


  useEffect(()=>{
    GetProduct();
  },[param])

  
  let cate = param.cate;
  let subcate = param.subcate;



  let GetProduct = async()=>{

    
    if(cate){
      let newcate = cate.split("-").join(" ");
      if(subcate){ 
        let newsubcate = subcate.split("-").join(" ");
        let response = await axios.get(`${API_URL}/product/getallproductbycateandsubcate/${newcate}/${newsubcate}`);
        setAllPro(response.data.result)
      }else{// when subcate is undefined
        let response = await axios.get(`${API_URL}/product/getallproductbycateandsubcate/${newcate}`);
        setAllPro(response.data.result)
      }
    }
    else{
      // when user is :5173/shop ..... then what will we do

    }

  }

  
  return (
    <>
    <div className='container m-4'>
        <h4>Shop Bags by Its Category</h4>
    <div className="row">
  
         {
          allPro.map(item=><ProductBox item={item} key={item._id} />)
         }
        </div>
    </div>
    </>
  )
}

export default Shop