import React from 'react';
import { Link } from 'react-router-dom';


function Card(props) {
  return (
    <div className='relative w-[100%]'>
      <img src={props.image } alt={props.title} className='w-full h-[19rem] md:h-[25rem] ' />
      <div className='absolute inset-0'></div>
      <div className='absolute bottom-0 left-0 p-4 text-white backdrop-brightness-12 bg-black/10' >
      <Link to={`/news/${encodeURIComponent(props.url)}`}  >
        <h2 className='text-xl font-bold font-[Georgia] mb-2'>{props.title}</h2>
        </Link>
        {/*add two col write and date*/}
        <div className='flex items-center gap-14 '>
        <p className='text-sm font-[Helvetica]'>{props.writer}</p>
        <p className='text-sm font-[Helvetica]'>{props.date}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;