import React from 'react'
import { Link } from 'react-router-dom'
function VCard(props) {
  return (
    <main className='flex flex-col  w-full h-full'>
        <img className='w-full h-[25rem] ' src={props.image} alt={props.tittle} />
        <div className='flex flex-col w-full p-3 text-black'>
          <Link to={`/news/${encodeURIComponent(props.url)}`}  >
            <h1 className='font-[MaryToddW00-Regular] font-medium text-2xl'>{props.title}</h1>
          </Link>
        </div>
        <div className='border border-[#0000002c] w-full blur-5	'></div>
    </main>
  )
}

export default VCard