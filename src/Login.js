import axios from 'axios';
import React, { useState } from 'react'

export default function Login() {
    
  let [data,setData] =  useState({email: "",password : ""})

  const onchangeHandler = (e)=> {

    setData({...data,[e.target.name] : e.target.value});

  }

  const mySubmit = (e)=> {

    e.preventDefault();

    axios.post("http://localhost:4000/accounts/authenticate",data)
    .then(y=> {
        console.log(y);

        localStorage.setItem("userInfo",JSON.stringify(y.data));
    })

  }

  return (
    <form onSubmit={mySubmit}>
    <div class="mb-3 mt-3">
      <label for="Email" class="form-label">Email:</label>
      <input type="email" class="form-control" id="title" placeholder="Enter Email" name="email" onChange={onchangeHandler}/>
    </div>

    <div class="mb-3 mt-3">
      <label for="password" class="form-label">Password:</label>
      <input type="password" class="form-control" id="Password" placeholder="Enter Password" name="password" onChange={onchangeHandler}/>
    </div>

   


  
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  )
}
