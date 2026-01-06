import React from 'react'


const OrderTable = ({allOrder, type, changeStatus}) => { // props.x, props.y
    // let {x, y} = props;
  return (
    <>
    
    {
        allOrder.length > 0
        ?
        <div className="table-responsive mt-4">
                <table className="table mb-0 text-nowrap varient-table align-middle fs-3">
                    <thead>
                        <tr>
                            <th scope="col" className="px-0 text-muted">Product</th>
                            <th scope="col" className="px-0 text-muted">User</th>
                            <th scope="col" className="px-0 text-muted">Amount</th>
                            <th scope="col" className="px-0 text-muted">Shipping</th>
                            <th scope="col" className="px-0 text-muted">Order Date</th>
                            <th scope="col" className="px-0 text-muted">Status</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allOrder.map((item, index)=><tr key={item._id}>
                                <td className="px-0">
                                    <div className="d-flex align-items-center">
                                        <div className="ms-3">
                                            <h6 className="mb-0 fw-bolder">{ item.product_id ? item.product_id.title : ''}</h6>
                                            <span className="text-muted">{item.product_id ? item.product_id.price : ''}</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-0">
                                    <div className="d-flex align-items-center">
                                        <div className="ms-3">
                                            <h6 className="mb-0 fw-bolder">{ item.user_id ? item.user_id.name : ''}</h6>
                                            <span className="text-muted">{item.user_id ? item.user_id.contact : ''}</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-0">
                                    <div className="d-flex align-items-center">
                                        <div className="ms-3">
                                            <h6 className="mb-0 fw-bolder">{ item.amount}</h6>
                                     
                                        </div>
                                    </div>
                                </td>
                                <td className="px-0">
                                    <div className="d-flex align-items-center">
                                        <div className="ms-3">
                                            <h6 className="mb-0 fw-bolder">-{ item.shipping}</h6>
                                     
                                        </div>
                                    </div>
                                </td>
                                <td className="px-0">
                                    <div className="d-flex align-items-center">
                                        <div className="ms-3">
                                            <h6 className="mb-0 fw-bolder">{ new Date(item.date).toDateString() }</h6>
                                     
                                        </div>
                                    </div>
                                </td>
                                <td className="px-0">
                                    <div className="d-flex align-items-center">
                                        <div className="ms-3">
                                            <h6 className="mb-0 fw-bolder">
                                                {
                                                    type=="Placed"
                                                    ?
                                                    <>
                                                    <button onClick={()=>changeStatus(item, item.status)} className='btn btn-sm btn-info m-1'>Shipped</button>
                                                    <button onClick={()=>changeStatus(item, 4)} className='btn btn-sm btn-danger m-1'>Canceled</button>
                                                    </>
                                                    :
                                                    type=="Shipped"
                                                    ?
                                                    <>
                                                    <button onClick={()=>changeStatus(item, item.status)} className='btn btn-sm btn-info m-1'>Received</button>
                                                    <button onClick={()=>changeStatus(item, 4)} className='btn btn-sm btn-danger m-1'>Canceled</button>
                                                    </>
                                                    :
                                                    type=="All"
                                                    ?
                                                    <p>{item.status==1 ? 'Placed' : item.status==2 ? 'Shipped' : item.status==3 ? 'Received' : 'Canceled'}</p>
                                                    :
                                                    type
                                                }
                                            </h6>
                                     
                                        </div>
                                    </div>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
    </div>
    :
    <div className='alert alert-danger'>No Date Found</div>
    }
    </>
  )
}

export default OrderTable

/*

onMouseOver={hello}


onMouseOver={()=>hello(5)}



    let hello = (a)=>{
        
        
        }

*/