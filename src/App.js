
import './App.css'

import { Home } from './Home'
import { useState } from 'react'
import { Login } from './Redux/Slice'
import { useDispatch } from 'react-redux'

const  App=()=> {
  const dispatch=useDispatch()
  const [name,setName]=useState("")
  const [lastName,setlastName]=useState("")
  const [pass,setPass]=useState("")
  const [email,setEmail]=useState("")
  
  const submit=(e)=>{
    e.preventDefault()
 
    dispatch(Login({
     name:name,
     pass:pass,
     email:email,
     lastName:lastName,
     loggedIn:true
  }))
  console.log(name,pass,lastName,email)
}
  
  
  
    return (
      <>  <Home/>
      <form onSubmit={(e)=>submit(e)} >
        <h3 className='text-center'>Sign Up</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          value={name} 
          onChange={(e)=>setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" 
          value={lastName}
          onChange={(e)=>setlastName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={pass}
            onChange={(e)=>setPass(e.target.value)}
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" >
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      
      </form>
      </>
    )
  }
  export default App
