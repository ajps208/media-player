import React,{useState} from 'react'
import { Card, Modal } from 'react-bootstrap'
import { deleteVideo } from '../Services/allAPI';

function Videocard({displayData,setDeleteVideoStaus}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const removeVideo=async (id)=>{
   const response=await deleteVideo(id)
   setDeleteVideoStaus(true)

  }
  return (
    <>
      {displayData&&<Card  className='mb-3'>
      <Card.Img onClick={handleShow} style={{height:"180px"}} className='w-100' variant="top" src={displayData?.url} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center'>
          <h6>{displayData?.caption}</h6> 
         <button onClick={()=>removeVideo(displayData?.id)} className='btn'> <i className="fa-solid fa-trash text-danger"></i></button>
          </Card.Title>
       
      </Card.Body>
    </Card>}
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width={'100%'}height={"315px"} src={`${displayData.embedlink}?autoplay=1`} title={displayData?.caption} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Videocard