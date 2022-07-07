import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default function Accounts() {

  const [data,setData] =  useState([])

  useEffect(()=> {

    let myData = JSON.parse(localStorage.getItem("userInfo"));

    console.log(myData);

    axios.get("http://localhost:4000/accounts",{
        headers : {

            "Authorization": "Bearer " + myData.jwtToken
        }

    }).then(y=> {

    console.log(y);

    setData(y.data);

    },[])


  })


  return (
    <div>
        {
            data.map((value,index,array)=> {

                return(<div>{value.email}  {value.firstName} </div>)
            })


        }


    </div>
  )
}
