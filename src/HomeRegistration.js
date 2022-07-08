import React, { useState } from 'react'

export default function HomeRegistration() {

   const [data,setData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
   
  })

  const changeTitleHandelr= (e)=> {

    setData({...data,title : e.target.value})
  }

  const mySubimit = (e) => {

    e.preventDefault();

    console.log(data);

  }


  return (
    <div>
        <form onSubmit={mySubimit}>



  <div class="mb-3 mt-3">
    <label for="title" class="form-label">Title:</label>
    <input type="text" class="form-control" id="title" placeholder="Enter Title" name="title" onChange={changeTitleHandelr}/>
  </div>

  <div class="mb-3 mt-3">
    <label for="firstName" class="form-label">FirstName:</label>
    <input type="text" class="form-control" id="firstName" placeholder="Enter FirstName" name="firstName"/>
  </div>

  <div class="mb-3 mt-3">
    <label for="lastName" class="form-label">LastName:</label>
    <input type="text" class="form-control" id="lastName" placeholder="Enter LastName" name="lastName"/>
  </div>

  <div class="mb-3 mt-3">
    <label for="email" class="form-label">Email:</label>
    <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"/>
  </div>

  <div class="mb-3 mt-3">
    <label for="password" class="form-label">Password:</label>
    <input type="password" class="form-control" id="password" placeholder="Enter password" name="password"/>
  </div>

  <div class="mb-3 mt-3">
    <label for="confirmPassword" class="form-label">confirmPassword:</label>
    <input type="password" class="form-control" id="confirmPassword" placeholder="Enter confirmPassword" name="confirmPassword"/>
  </div>



 
  <button type="submit" class="btn btn-primary">Submit</button>
</form>



    </div>
  )
}
