import React from 'react'

import { useSelector } from 'react-redux'
import { selectUser } from './Redux/Slice'

export const Home = () => {
    const user=useSelector(selectUser)
  return (
    <div style={{width:"40%",height:"30vh",border:"2px solid skyblue",margin:'auto'}}>
    <button className='btn btn-primary' style={{marginLeft:"50%"}}>{user.name}</button><br/><br/>
    <button className="btn btn-danger" style={{marginLeft:"50%"}}>{user.lastName}</button><br/><br/>
    <button className='btn btn-info'style={{marginLeft:"50%"}}>{user.email}</button><br/><br/>
    <button className='btn btn-warning'style={{marginLeft:"50%"}}>{user.pass}</button><br/><br/>
   
      
    </div>
  )
}
