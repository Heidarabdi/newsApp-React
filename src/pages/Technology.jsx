import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { api } from '../GlobalApi'
import Card from '../components/Card'
import Categories from '../components/Categories'
import Signup from '../components/Signup'
import { Link } from 'react-router-dom'


function Technology() {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  
  useEffect(() => {
    axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${api}`
    ).then((res) => {
      setData(res.data.articles)
    }).catch((err) => {
      setError(err.message)
    })
  }, [])
   
  // select a random article from the data array
 

  const randomImgs = data
  .filter((article) => article.urlToImage !== null)
  .sort(() => Math.random() - 0.5)
  .slice(0, 1);





  return (
    <main className="w-full grid grid-cols-1 md:grid-col-1">
      <div className="flex flex-col md:flex-row  items-start w-[100%]">
      <div className='md:w-[70%] p-6 '>
        <h1 className="text-3xl font-bold text-blue-500 font-[MaryToddW00-light] pb-3">Top Technology News</h1>
        {randomImgs.map((img, index) => (
          <Card key={index} title={img.title} description={img.description} image={img.urlToImage} url={img.url} />        ))
        }                 
      </div>
      <div className="flex flex-col h-full w-[50%] p-6 ">
        <h1 className="text-2xl font-semibold font-[MaryToddW00-Light] text-red-600 w-fit">News Titles</h1>
        <ul className="list-disc">
          {data.slice(0,5).map((title, index) => (
            <li key={index} className="w-full mb-4 text-blue-900">
              {/* just want the tittle */}
              <Link to={`/news/${encodeURIComponent(title.url)}`}  >
              <h2 className="font-[Georgia] font-medium text-xl">{title.title}</h2>
              </Link>
              <div className="border border-b-2 mt-2 border-[#7791ca93]"></div>
            </li>
          ))}
        </ul>
      </div >
        </div>
        <div className="border border-b-2 md:w-[95%] mt-2 md:ml-8  border-[#5a5e665d]"></div>   
        <Signup />
        <div className="border border-b-2 md:w-[95%] mt-2 md:ml-8  border-[#5a5e665d]"></div>   

      <div className='w-full'>
        <Categories category={"Technology"} />
      </div>
     
    </main>

  )
}

export default Technology