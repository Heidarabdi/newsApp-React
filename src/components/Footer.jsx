import React from 'react'
import {navBar} from './Navbar'
import { Link, useNavigate } from 'react-router-dom'
import whatsapp from '../assets/images/whatsapp_96px.png'
import instagram from '../assets/images/instagram_96px.png'
import facebook from '../assets/images/facebook_96px.png'
import twitter from '../assets/images/twitter_squared_96px.png'
import telegram from '../assets/images/telegram_app_96px.png'
import youtube from '../assets/images/youtube_96px.png'
function Footer() {
  const navigation = useNavigate();
  //all images so i can map through them in img tag
  const images = [whatsapp, instagram, facebook, twitter, telegram, youtube]



  return (
    <footer className='relative bg-[#0E1E32] w-full h-[16rem] grid grid-cols-3 items-center text-center text-white'>
         <h1 onClick={()=>{navigation('/')}} className=' font-[MaryToddW00-Regular] text-2xl  md:text-4xl cursor-pointer'>NEWSLETTER</h1>
        <div className={`font-[MaryToddW00-Regular] text-2xl space-x-4 flex flex-col md:flex-row items-center justify-center mt-2 `}>
          {navBar.map((item, index) => (
            <Link className={`hover:underline-offset-4 `} to={item.to} key={index}>{item.name}</Link>
          ))}
        </div>
        <div className='flex flex-col items-center justify-center mb-10 md:ml-0 w-full  md:w-fit '>
          <h1 className='font-[MaryToddW00-Regular] text-xl  md:text-4xl md:ml-0 w-full'>Follow us</h1>
          <div className='grid grid-cols-2 md:flex md:ml-24 w-full'>
            {images.map((image, index) => (
              <img src={image} alt='social media' key={index} className='w-8 h-8 cursor-pointer' /> 
            ))}
            </div>
        </div>
        <div className='absolute bottom-0  w-full flex flex-col justify-center items-center'>
          <div className='border border-[#545461] w-[90%] blur-5	'></div>
        <p className='font-[Georgia]  md:text-sm text-[#b4b2b2]'>© 2021 Newsletter</p>
        </div>
    </footer>
  )
}

export default Footer