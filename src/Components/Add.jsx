import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { uploadVideo } from "../Services/allAPI";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setUploadVideoServerResponse}) {
  const[video,setVideo]=useState({
    id:"",caption:"",url:"",embedlink:""
  })
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(video);
  const handleUpload=async()=>{
    // get video details
    const{id,caption,url,embedlink}=video
    // if video is empty or not
    if(!id||!caption||!url||!embedlink){
      toast.warning("Please fill the form completely....")
    }else{
      // api call
      const response=await uploadVideo(video)
      if(response.status>=200 && response.status<300){
        setUploadVideoServerResponse(response.data)
        setVideo({id:"",caption:"",url:"",embedlink:""})
        toast.success(`${response.data.caption} video upload successfully`)
        handleClose()
      }else{
        toast.error("uploading error...Please wait sometime!!!")
      }
    }
  }
  const extractUrl=(e)=>{
    const{value}=e.target
    if(value){
    const embedData=`https://www.youtube.com/embed/${value.slice(-11)}`
    setVideo({...video,embedlink:embedData})}
    else{
      setVideo({...video,embedlink:""})
    }
   
  }
  
  return (
    <>
      <div className="d-flex align-items-center">
        <h5>Upload New Media</h5>
        <button onClick={handleShow} className="btn">
          <i className="fa-solid fa-circle-plus fs-5"></i>
        </button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details!!!</p>
          <Form className="border p-3 rounded border-secondary">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Video Id" onChange={(e)=>setVideo({...video,id:e.target.value})}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter Video Caption" onChange={(e)=>setVideo({...video,caption:e.target.value})} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter Video Image Url" onChange={(e)=>setVideo({...video,url:e.target.value})}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter Youtube Video Link" onChange={(e)=>extractUrl(e)}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleUpload} variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position="top-center" theme="colored" autoClose={2000} />
    </>
  );
}

export default Add;
