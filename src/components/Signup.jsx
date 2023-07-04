import React from "react";
import mailbox from "../assets/images/mailbox.png";

const clearInput=()=>{
  document.querySelector("input").value="";
}

function Signup() {
  return (
    <div className="flex justify-center items-center w-full my-10 gap-4 p-4 ">
      <img src={mailbox} alt="mailbox.png" className=" h-20" />
      <div className=" flex flex-col justify-center items-start w-[60%] gap-4">
        <h2 className="md:text-3xl font-bold font-[MaryToddW00-Light]">Signup for newsletter Today</h2>
        <p className="font-[MaryToddW00-Light] text-lg md:text-2xl">Get the latest news, updates and offers straight to your inbox.</p>

        <div className="w-full flex justify-center items-center gap-4">
          <input
            className="w-[80%] h-10 md:h-14 font-[MaryToddW00-Light] text-xl bg-white border border-blue-600"
            type="text"  placeholder="Enter your email"/>
            <button className="w-[40%] md:w-[30%] p-2 md:p-0 h-10 md:h-14 bg-blue-600 rounded-lg text-white font-bold" onClick={clearInput} >Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
