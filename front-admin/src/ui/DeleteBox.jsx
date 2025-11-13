import React from 'react'
import Modal from 'react-bootstrap/Modal';

const DeleteBox = ({ lable, name, confDel, isClose, showDelBox }) => {
  return (
    <Modal show={showDelBox} onHide={isClose}>
        <Modal.Header closeButton >
          <Modal.Title>Delete {lable} !</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure want to delete this <b>{name}</b></Modal.Body>
        <Modal.Footer>
          <button onClick={confDel} className='btn btn-danger'>Confirm Delete</button>          
          <button onClick={isClose} className='btn btn-info'>Close</button>          
        </Modal.Footer>
      </Modal>
  )
}

export default DeleteBox