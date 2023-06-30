import React, { useEffect,useState } from "react";
import VCard from "./VCard";
import HCard from "./HCard";
import axios from "axios";
import { api } from "../GlobalApi";
import { useNavigate } from "react-router-dom";
import {IoChevronForward} from "react-icons/io5";
import { Link } from "react-router-dom";
function Categories({ category }) {
  const [data, setData] = useState([]);
  const navigation = useNavigate();
  const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${api}`;
  useEffect(() => {
    axios.get(apiUrl).then((res) => {
      setData(res.data.articles);
    });
  }, [apiUrl]);
  
        
  return (
   
    <main className="w-full flex flex-col justify-center ">
     <div className="flex items-center justify-center w-fit" onClick={() => navigation(`/${category}`)}>
     <h1 className="text-3xl w-fit font-bold text-blue-500 hover:underline underline-offset-4 font-[MaryToddW00-Regular] p-4 uppercase">{category}</h1><IoChevronForward className="text-4xl text-blue-500 ml-[-1.5rem] "/>
     </div>
      <div className="flex flex-col items-start w-[100%%]  p-4">
        {data && data.length > 2 && (
          <>
              <Link to={`/news/${encodeURIComponent(data[2].url)}`}  >
            <h1 className="text-4xl hover:underline font-[MaryToddW00-Light] font-bold mb-4" >
              {data[2].title}
            </h1>
            </Link>
            <img src={data[2].urlToImage} className="md:h-[32rem] md:w-[70%]" alt="" />
          </>
        )}
      </div>
      <div className="border border-[#0000002c] w-[90%] blur-5 ml-3 "></div>
      <div className="flex flex-col md:flex-row items-start gap-16 justify-center">
        <div className="flex flex-col items-center md:w-[50%] p-4 gap-4">
              {data.map((article, index) => (
                <VCard key={index} title={article.title} description={article.description} image={article.urlToImage} url={article.url} />
              ))}
        </div>
        <div className="flex flex-col gap-5 md:w-[40%] p-4">
          {data.map((article, index) => (
            <HCard key={index} title={article.title} description={article.description} url={article.url} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Categories;