import React,{useEffect, useState} from 'react'
import { Row,Col} from 'react-bootstrap'
import Videocard from './Videocard'
import { getAllVideos } from '../Services/allAPI'

function View(uploadVideoServerResponse) {
  const[allVideos,setAllVideos]=useState([])
  const[deleteVideoStaus,setDeleteVideoStaus]=useState(false)
  const getAllUploadVideos=async()=>{
    const{data}=await getAllVideos()
    setAllVideos(data)

  }
  useEffect(()=>{
    getAllUploadVideos()
  },[uploadVideoServerResponse,deleteVideoStaus])
  console.log(allVideos);
  return (
   <Row>
   {   allVideos.length>0?
   allVideos.map(video=>(
        <Col sm={12} md={6} lg={4} xl={3}>
          <Videocard displayData={video} setDeleteVideoStaus={setDeleteVideoStaus}/>
        </Col>)):<p className='fw-bolder mt-3 fs-5 text-danger'>Nothing to Display</p>}
        
        
     
   </Row>
  )
}

export default View