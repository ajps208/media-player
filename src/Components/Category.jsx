import React,{useEffect, useState} from 'react'
import { Button, Modal, Form } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory, deleteCategory, getAllCategory } from '../Services/allAPI';


function Category() {
  const[Allcategory,setAllCategory]=useState([])
  const[categoryName,setCategoryName]=useState("")
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAddCategory=async()=>{
    if(categoryName){
      const body={
        categoryName
      }
      // make api call
      const response=await addCategory(body)
      if(response.status>=200&&response.status<300){
        handleClose()
        setCategoryName("")
        handleGetCategory()
      }else{
        toast.error("uploading error!!!!")
      }

    }else{
      toast.warning("Please provide category name!!!!")
    }

  }
  const handleGetCategory=async()=>{
    // api call
    const {data}=await getAllCategory()
    setAllCategory(data)
  }
  const handleDeleteCategory=async(id)=>{
    await deleteCategory(id)
    handleGetCategory()
  }
  console.log(Allcategory);
  useEffect(()=>{
    handleGetCategory()
  },[])
  return (
    <>
    <div className="d-grid">
      <button className="btn btn-info " onClick={handleShow}>Add New Category</button>
    </div>
    {Allcategory?Allcategory?.map(item=>(
      <div className='border mt-3 mb-3 p-3 '>
        <div className='rounded d-flex justify-content-between align-items-center'>
          <h6>{item?.categoryName}</h6>
          <button className="btn" onClick={()=>handleDeleteCategory(item?.id)}><i className="fa-solid fa-trash text-danger"></i></button>
        </div>
      </div>
    )):<p className='fw-bolder mt-3 fs-5 text-danger'>Nothing to Display</p>}
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details!!!</p>
          <Form className="border p-3 rounded border-secondary">
           <Form.Label>Enter Category Name</Form.Label>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter Category Name" onChange={(e)=>setCategoryName(e.target.value)} />
            </Form.Group>
           
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddCategory}>Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position="top-center" theme="colored" autoClose={2000} />

    </>
  )
}

export default Category