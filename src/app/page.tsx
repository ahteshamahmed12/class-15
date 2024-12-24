import React from 'react'
import Link from 'next/link'
async function page() {
  let url=await fetch ("https://jsonplaceholder.typicode.com/todos")
  let result=await url.json()
  console.log(result)
  return (
    <div>
      <div>
      {  
       result.map((book:any,)=>(
        <div className='text-2xl'>
          <Link href={`${book.id}`}>
          <h1 className='py-3 '>
          {book.title}
         <span className='pl-3'> ({book.id}) </span> 
        <br />
         
          </h1>
          </Link>
        </div>
      ))
    }
          </div> 
      
    </div>
  )
}

export default page