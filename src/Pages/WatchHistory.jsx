import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getHistory } from '../Services/allAPI'

function WatchHistory() {
  const [history,setHistory] =useState([])
  const getAllWatchHistory=async()=>{
    const {data}=await getHistory()
    setHistory(data)
  }
  useEffect(()=>{
    getAllWatchHistory()
  },[])
  return (
    <>
    <div className="container mt-5 mb-5 d-flex justify-content-between align-items-center">
      <h3>Watch History</h3>
      <Link to={'/home'} className=' d-flex align-items-center' style={{textDecoration:"none",fontSize:"20px",color:"white"}}>
        <i className='fa-solid fa-arrow-left-long  me-2'></i>Back To Home
      </Link>
      </div>
      <table className='table mt-5 mb-5 container'>
        <thead>
         <tr>
            <th>#</th>
            <th>Caption</th>
            <th>URL</th>
            <th>Time Stamp</th>
         </tr>
        </thead>
        <tbody>
        {history.length>0? 
        history.map((item,index)=>(<tr>
          <td>{index+1}</td>
          <td>{item?.caption}</td>
          <td><a target='_blank' href={item?.embedlink}>{item?.embedlink}</a></td>
          <td>{item?.timeStamp}</td>
       </tr>))
        :<p className='fw-bolder mt-3 text-danger'>Nothing to display!!!!</p>}
        </tbody>
      </table>
      </>
  )
}

export default WatchHistory