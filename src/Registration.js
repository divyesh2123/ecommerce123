import React, { useState } from 'react'

export default function Registration() {

    let [data,setData] = useState({
        title: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        acceptTerms: true
      });



        const onchangeHandler = (e)=> {

          
            setData({...data, [e.target.name] : e.target.value});

            console.log(data);
        }

        const mySubmit = (e)=> {

            e.preventDefault();

            console.log(data);

            fetch("http://localhost:4000/accounts/register",{
                method : "POST",
                body : JSON.stringify(data),
                headers : {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }).then(y=> {
                y.text()
            }).then(
                y=> {
                    console.log(y);
                }
            )



        }



      

  return (
    <form onSubmit={mySubmit}>
    <div class="mb-3 mt-3">
      <label for="title" class="form-label">Title:</label>
      <input type="text" class="form-control" id="title" placeholder="Enter Title" name="title" onChange={onchangeHandler}/>
    </div>

    <div class="mb-3 mt-3">
      <label for="firstName" class="form-label">firstName:</label>
      <input type="text" class="form-control" id="firstName" placeholder="Enter firstName" name="firstName" onChange={onchangeHandler}/>
    </div>

    <div class="mb-3 mt-3">
      <label for="lastName" class="form-label">lastName:</label>
      <input type="text" class="form-control" id="lastName" placeholder="Enter lastName" name="lastName" onChange={onchangeHandler}/>
    </div>


    <div class="mb-3 mt-3">
      <label for="password" class="form-label">password:</label>
      <input type="text" class="form-control" id="password" placeholder="Enter password" name="password" onChange={onchangeHandler}/>
    </div>

    <div class="mb-3 mt-3">
      <label for="confirmPassword" class="form-label">confirmPassword:</label>
      <input type="text" class="form-control" id="confirmPassword" placeholder="Enter confirmPassword" name="confirmPassword" onChange={onchangeHandler}/>
    </div>

    <div class="mb-3 mt-3">
      <label for="email" class="form-label">Email:</label>
      <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" onChange={onchangeHandler}/>
    </div>

    <div class="form-check">
  <input class="form-check-input" type="checkbox" id="acceptTerms" name="acceptTerms" value="true" checked/>
  <label class="form-check-label">Terms and Con</label>
</div>
    
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  )
}
