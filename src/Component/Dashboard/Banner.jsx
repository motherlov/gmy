import React, { useEffect } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useState } from 'react';
import axios from 'axios';
export default function Banner() {

    const [bannerdata, setBannerdata] =useState([])
const fetchBanner =()=>{
    axios.get('https://corefitserver.onrender.com/getbanner').then((res)=>{
        console.log(res.data);
        setBannerdata(res.data.data);
    })
}
useEffect(()=>{
    fetchBanner();
},[])

  return (
    <div>
<OwlCarousel
            className="owl-carousel owl-theme carousel slide"
            margin={10}
            items={1}
            loop={true}
            autoplay={true}
            autoplayTimeout={4000}
            dots={false}
            data-bs-ride="carousel"
          >
            {bannerdata && bannerdata.map((banner, index) => (
              <div className="carousel-inner item" key={banner._id}>
                <div className="carousel-item active">
                  <img
                    style={{ height: "70vh", width: "100vw" }}
                    src={banner.image}
                    alt=""
                  />
                  <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div style={{ maxWidth: 900, marginBottom: "350px" }}>
                      <h1 className=" text-uppercase mb-md-3">
                        {banner.subtitle}
                      </h1>
                      {/* <span className="display-6 mb-md-4 ">
                        {banner.title}
                      </span> */}
                    </div>
                    <h1 className="m-0" style={{color:'white'}}>
                        {banner.title}
                      </h1>
                  </div>
                </div>
              </div>
            ))}
          </OwlCarousel>
 





  {/* Carousel End */}


    </div>
  )
}
