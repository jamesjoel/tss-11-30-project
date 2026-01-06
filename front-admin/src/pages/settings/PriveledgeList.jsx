import React from 'react'

const PriveledgeList = () => {
  return (
    <div className="container">
        <div className="row">
            <h5>Type of Preveledge List for Admins</h5>
         <table className='table my-3 table-light table-bordered table-hover table-striped'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name/Type</th>
                    <th>Policy</th>
                </tr>
                
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td><h5>Type A</h5></td>
                    <td>
                        <p className='d-flex justify-content-between'>
                            <b style={{width : "80px"}}>Product</b>  <span>Add <i class="fa fa-check text-success" aria-hidden="true"></i></span><span>Read <i class="fa fa-check text-success" aria-hidden="true"></i></span>  <span>Update <i class="fa fa-check text-success" aria-hidden="true"></i></span> <span>Delete <i class="fa fa-check text-success" aria-hidden="true"></i></span>
                        </p>
                        <p className='d-flex justify-content-between'>
                            <b style={{width : "80px"}}>Category</b>  <span>Add <i class="fa fa-check text-success" aria-hidden="true"></i></span><span>Read <i class="fa fa-check text-success" aria-hidden="true"></i></span>  <span>Update <i class="fa fa-check text-success" aria-hidden="true"></i></span> <span>Delete <i class="fa fa-check text-success" aria-hidden="true"></i></span>
                        </p>
                        <p className='d-flex justify-content-between'>
                            <b style={{width : "80px"}}>SubCategory</b>  <span>Add <i class="fa fa-check text-success" aria-hidden="true"></i></span><span>Read <i class="fa fa-check text-success" aria-hidden="true"></i></span>  <span>Update <i class="fa fa-check text-success" aria-hidden="true"></i></span> <span>Delete <i class="fa fa-check text-success" aria-hidden="true"></i></span>
                        </p>
                        <p className='d-flex justify-content-between'>
                            <b style={{width : "80px"}}>Admin</b>  <span>Add <i class="fa fa-check text-success" aria-hidden="true"></i></span><span>Read <i class="fa fa-check text-success" aria-hidden="true"></i></span>  <span>Update <i class="fa fa-check text-success" aria-hidden="true"></i></span> <span>Delete <i class="fa fa-check text-success" aria-hidden="true"></i></span>
                        </p>
                        
                        
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td><h5>Type B</h5></td>
                    <td>
                        <p className='d-flex justify-content-between'>
                            <b style={{width : "80px"}}>Product</b>  <span>Add <i class="fa fa-check text-success" aria-hidden="true"></i></span><span>Read <i class="fa fa-check text-success" aria-hidden="true"></i></span>  <span>Update <i class="fa fa-check text-success" aria-hidden="true"></i></span> <span>Delete <i class="fa fa-check text-success" aria-hidden="true"></i></span>
                        </p>
                        <p className='d-flex justify-content-between'>
                            <b style={{width : "80px"}}>Category</b>  <span>Add <i class="fa fa-check text-success" aria-hidden="true"></i></span><span>Read <i class="fa fa-check text-success" aria-hidden="true"></i></span>  <span>Update <i class="fa fa-check text-success" aria-hidden="true"></i></span> <span>Delete <i class="fa fa-check text-success" aria-hidden="true"></i></span>
                        </p>
                        <p className='d-flex justify-content-between'>
                            <b style={{width : "80px"}}>SubCategory</b>  <span>Add <i class="fa fa-check text-success" aria-hidden="true"></i></span><span>Read <i class="fa fa-check text-success" aria-hidden="true"></i></span>  <span>Update <i class="fa fa-check text-success" aria-hidden="true"></i></span> <span>Delete <i class="fa fa-check text-success" aria-hidden="true"></i></span>
                        </p>
                        <p className='d-flex justify-content-between'>
                            <b style={{width : "80px"}}>Admin</b>  <span>Add <i class="fa fa-times text-danger" aria-hidden="true"></i></span><span>Read <i class="fa fa-times text-danger" aria-hidden="true"></i></span>  <span>Update <i class="fa fa-times text-danger" aria-hidden="true"></i></span> <span>Delete <i class="fa fa-times text-danger" aria-hidden="true"></i></span>
                        </p>
                        
                        
                    </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td><h5>Type C</h5></td>
                    <td>
                        <p className='d-flex justify-content-between'>
                            <b style={{width : "80px"}}>Product</b>  <span>Add <i class="fa fa-check text-success" aria-hidden="true"></i></span><span>Read <i class="fa fa-check text-success" aria-hidden="true"></i></span>  <span>Update <i class="fa fa-times text-danger" aria-hidden="true"></i></span> <span>Delete <i class="fa fa-times text-danger" aria-hidden="true"></i></span>
                        </p>
                        <p className='d-flex justify-content-between'>
                            <b style={{width : "80px"}}>Category</b>  <span>Add <i class="fa fa-check text-success" aria-hidden="true"></i></span><span>Read <i class="fa fa-check text-success" aria-hidden="true"></i></span>  <span>Update <i class="fa fa-times text-danger" aria-hidden="true"></i></span> <span>Delete <i class="fa fa-times text-danger" aria-hidden="true"></i></span>
                        </p>
                        <p className='d-flex justify-content-between'>
                            <b style={{width : "80px"}}>SubCategory</b>  <span>Add <i class="fa fa-check text-success" aria-hidden="true"></i></span><span>Read <i class="fa fa-check text-success" aria-hidden="true"></i></span>  <span>Update <i class="fa fa-times text-danger" aria-hidden="true"></i></span> <span>Delete <i class="fa fa-times text-danger" aria-hidden="true"></i></span>
                        </p>
                        <p className='d-flex justify-content-between'>
                            <b style={{width : "80px"}}>Admin</b>  <span>Add <i class="fa fa-times text-danger" aria-hidden="true"></i></span><span>Read <i class="fa fa-times text-danger" aria-hidden="true"></i></span>  <span>Update <i class="fa fa-times text-danger" aria-hidden="true"></i></span> <span>Delete <i class="fa fa-times text-danger" aria-hidden="true"></i></span>
                        </p>
                        
                        
                    </td>
                </tr>
                <tr>
                    <td>4</td>
                    <td><h5>Type D</h5></td>
                    <td>
                        <p className='d-flex justify-content-between'>
                            <b style={{width : "80px"}}>Product</b>  <span>Add <i class="fa fa-times text-danger" aria-hidden="true"></i></span><span>Read <i class="fa fa-check text-success" aria-hidden="true"></i></span>  <span>Update <i class="fa fa-times text-danger" aria-hidden="true"></i></span> <span>Delete <i class="fa fa-times text-danger" aria-hidden="true"></i></span>
                        </p>
                        <p className='d-flex justify-content-between'>
                            <b style={{width : "80px"}}>Category</b>  <span>Add <i class="fa fa-times text-danger" aria-hidden="true"></i></span><span>Read <i class="fa fa-check text-success" aria-hidden="true"></i></span>  <span>Update <i class="fa fa-times text-danger" aria-hidden="true"></i></span> <span>Delete <i class="fa fa-times text-danger" aria-hidden="true"></i></span>
                        </p>
                        <p className='d-flex justify-content-between'>
                            <b style={{width : "80px"}}>SubCategory</b>  <span>Add <i class="fa fa-times text-danger" aria-hidden="true"></i></span><span>Read <i class="fa fa-check text-success" aria-hidden="true"></i></span>  <span>Update <i class="fa fa-times text-danger" aria-hidden="true"></i></span> <span>Delete <i class="fa fa-times text-danger" aria-hidden="true"></i></span>
                        </p>
                        <p className='d-flex justify-content-between'>
                            <b style={{width : "80px"}}>Admin</b>  <span>Add <i class="fa fa-times text-danger" aria-hidden="true"></i></span><span>Read <i class="fa fa-times text-danger" aria-hidden="true"></i></span>  <span>Update <i class="fa fa-times text-danger" aria-hidden="true"></i></span> <span>Delete <i class="fa fa-times text-danger" aria-hidden="true"></i></span>
                        </p>
                        
                        
                    </td>
                </tr>
            </tbody>
         </table>
        </div>
    </div>
  )
}

export default PriveledgeList