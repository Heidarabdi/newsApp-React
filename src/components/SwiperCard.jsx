import { React, useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";
import { url, extractYearFromDate } from "../GlobalApi";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Link } from "react-router-dom";

function SwiperCard() {
  const [topHeadline, setTopHeadline] = useState([]);
  const openUrl = (url) => {
    //open to anew tab
    window.open(url, "_blank");
  };

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        // console.log(res.data);
        setTopHeadline(res.data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="relative ">
            {topHeadline.length > 0 && (
    <Swiper
      spaceBetween={0}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}     
      modules={[Autoplay, EffectFade]}
        effect={"fade"}>
        
        {topHeadline.map((article, index) => (
          <SwiperSlide key={index}>
         <Card
              key={index}
              title={article.title}
              image={article.urlToImage}
              writer={article.author}
              url={article.url}
              date={extractYearFromDate(article.publishedAt)}
            />
          </SwiperSlide>
        ))}
    </Swiper>
        )}

    </div>
    

  );

}





export default SwiperCard;
