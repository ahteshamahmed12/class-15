import React from 'react'

async function page(props:any) {
    let url=await fetch (`https://jsonplaceholder.typicode.com/todos/${props.params.books}`)
    let responce=await url.json()
    console.log(responce)
  return (
   <div>
    <h1 className='text-2xl' >
        {responce.title} <span className='pl-3'>  ({responce.id})</span>
    </h1>
   </div>
  )
}

export default page