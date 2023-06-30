import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { api } from "../GlobalApi";
import { HiMagnifyingGlass, HiXMark } from 'react-icons/hi2';

function Search() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const inputRef = useRef(null);

  const inputClear = () => {
    inputRef.current.value = "";
  };

  useEffect(() => {
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${api}`)
      .then((res) => {
        setData(res.data.articles);
        setLoading(false);
      });
  }, []);

  const search = (e) => {
    if (e.key === "Enter") {
      setLoading(true);
      axios
        .get(`https://newsapi.org/v2/top-headlines?q=${e.target.value}&apiKey=${api}`)
        .then((res) => {
          setData(res.data.articles);
          setLoading(false);
        });
    }
  };

  return (
    <div className="flex flex-col ml-4 md:ml-[4rem]">
      <div className="flex w-full pl-10 items-center my-8">
        <input
          type="text"
          placeholder="Search"
          className="font-[MaryToddW00-Light] w-[80%] border border-[#000000a2] text-2xl h-14 rounded-md"
          ref={inputRef}
          onKeyPress={search}
        />
        <HiXMark
          onClick={inputClear}
          className="text-3xl cursor-pointer text-[#00000085]  ml-[-3rem]"
        />
        <HiMagnifyingGlass
          onClick={() => search({ key: "Enter", target: { value: inputRef.current.value } })}
          className="text-3xl text-[#00000085] ml-[-4rem] cursor-pointer"
        />
      </div>
      <h1 className="md:text-5xl text-3xl text-blue-500 font-bold font-[MaryToddW00-Light] my-5">Latest News</h1>
      <div className="border border-[#0000002c] w-[60%] blur-5 mb-5 "></div>
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        data.map((article, index) => (
          <div className="flex flex-col md:w-[80%] mb-10 shadow-md p-3 shadow-[#6b798a85]" key={index}>
            <h1 className="text-2xl underline underline-offset-4 text-blue-500 font-bold font-[MaryToddW00-Light]">news</h1>
            <div className="flex w-full">
              <div className="flex flex-col w-[60%]">
                <h2 className="font-bold font-[MaryToddW00-Light] text-2xl">{article.title}</h2>
                <p className="font-[Tiempos] text-lg">{article.description}</p>
              </div>
              <img className="w-[40%] h-[12rem]" src={article.urlToImage} alt="" />
            </div>
          </div>
        ))
      )}
      <div className="border border-[#0000002c] w-[90%] blur-5 ml-3 "></div>
    </div>
  );
}

export default Search;