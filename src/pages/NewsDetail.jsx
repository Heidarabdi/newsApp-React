import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../GlobalApi';

function NewsDetail() {
  const { url } = useParams();
  useEffect(() => {
    //open to anew tab for the url that passed in and prevent loop
    if (url !== undefined) {
      window.open(url, "_blank");
    }
   

    //settime out to go back previous page
    setTimeout(() => {
        window.history.back();
    }, 1000);

    }, []);



  return (
    <div>
        <h1>News Detail</h1>
        <h1>{url}</h1>
    </div>
    );

}
export default NewsDetail;