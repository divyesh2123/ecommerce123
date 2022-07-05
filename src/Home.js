import React, { useEffect, useState } from 'react'

export default function Home() {
   
    //array destructuing
    //state
  let [name,setName] = useState(
    {firstName: 'divyesh', lastName : 'patel'}
    );

 let [data, setData] = useState([]);

  const changeName = ()=> {

    setName({firstName:"test", lastName : "Test1"})

  }

  
  //document.ready-> 
  useEffect(()=> {

    fetch("https://fakestoreapi.com/products")
        .then(y=> y.json())
        .then(y=> {
            setData(y)
        })
    
  },[])

 
  return (
    <div>{name.firstName}
        {name.lastName}

        <button onClick={changeName} >ChangeName</button>

        {
            data.map((value,index,array)=> {


                return (<div>{value.title} {value.price}</div>)

            })

        }
       
    </div>
  )
}



