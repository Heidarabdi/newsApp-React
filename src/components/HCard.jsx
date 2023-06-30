import React from "react";
import { Link } from "react-router-dom";

function HCard(props) {

  return (
    <main className="flex  w-full h-fit flex-col space-y-8">
      <div className="flex flex-col w-full  text-black h-full">
        <Link to={`/news/${encodeURIComponent(props.url)}`}  >
        <h1 className=" font-serif text-xl font-bold mb-2">{props.title}</h1>
        </Link>
        <p className="text-[#020808] font-serif text-xl ">{props.description}</p>
      </div>
      <div className='border border-[#0000002c] w-full blur-5'></div>

    </main>
  );
}

export default HCard;
