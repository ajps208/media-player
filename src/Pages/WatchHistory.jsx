import React from 'react'
import { Link } from 'react-router-dom'

function WatchHistory() {
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
         <tr>
            <td>1</td>
            <td>Kanban</td>
            <td><a href="">https://www.youtube.com/watch?v=kdvgTeVjpD4</a></td>
            <td>4/10/23</td>
         </tr>
        </tbody>
      </table>
      </>
  )
}

export default WatchHistory