import { React, useEffect, useState } from "react";
import Card from "./Card";
import SwiperCard from "./SwiperCard";
import { url,openUrl } from "../GlobalApi";
import axios from "axios";
import { Link } from "react-router-dom";
function Hero() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <main className="w-full flex justify-start items-start md:flex-row flex-col">
      <div className="w-full md:w-[50%] p-4 md:p-6 ">
        <h1 className="text-4xl font-bold font-[MaryToddW00-Light] w-fit mb-4">Top Headlines</h1>
        <SwiperCard />

      </div>
      <div className="flex flex-col p-8  w-fit h-full ">
        <h1 className="text-2xl font-semibold font-[MaryToddW00-Light] text-red-600 w-fit mb-4">News Titles</h1>
        <ul className="list-disc">
          {data.slice(0,5).map((data, index) => (
            <li key={index} className="w-full mb-4 text-blue-900">
              {/* just want the tittle */}
              <Link to={`/news/${encodeURIComponent(data.url)}`}  >
              <h2 className="font-[Georgia] font-medium text-xl">{data.title}</h2>
              </Link>
              <div className="border border-b-2 mt-2 border-red-600"></div>

            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Hero;
