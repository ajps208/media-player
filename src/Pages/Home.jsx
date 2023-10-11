import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Row,Col } from 'react-bootstrap'
import Category from "../Components/Category"
import View from "../Components/View"

import Add from '../Components/Add'
function Home() {
  const [uploadVideoServerResponse,setUploadVideoServerResponse]=useState({})
  return (
    <>
    <div className="container mb-5 d-flex align-items-center justify-content-between mt-5">
      <div className="add">
        <Add setUploadVideoServerResponse={setUploadVideoServerResponse} />
      </div>
      <Link to={"/watch-history"} style={{textDecoration:"none",color:"white"}} className='fs-5'>Watch History</Link>
    </div>
    <Row className="container-fluid   w-100 ">
      <Col className='all-videos col-lg-8'>
        <h3>All Videos</h3>
        <div className='videos  w-100'>
        <View uploadVideoServerResponse={uploadVideoServerResponse}/>
        </div>

      </Col>
      <Col className='category col-lg '>
        <Category/>
      </Col>

    </Row>
    </>
  )
}

export default Home