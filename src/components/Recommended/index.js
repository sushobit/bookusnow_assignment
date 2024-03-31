import { FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import { FaLocationDot } from "react-icons/fa6";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './index.css'; 

import { FreeMode } from 'swiper/modules';


function Recommendation(){

    const [recommendedEvents, setRecommendedEvents] = useState(null);
    const [loading, setLoading] = useState(true);

    const API = "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco";

    async function fetchData(){
        setLoading(true);
        const response = await fetch(API);
        const output = await response.json();
        setRecommendedEvents(output);
        setLoading(false);
    }
    useEffect(()=>{
        fetchData();
    }, [])

    const [ setSwiperRef] = useState(null);

    return(
        <div className="recommended-main-container">
            {/* Top */}
            <div className="recommended-top-container">
                <div className="recommended-show">
                    Recommended shows
                    <FaArrowRightLong />
                </div>
                <div className="see-all">
                    See all
                </div>
            </div>
            {/* Bottom Swiper */}
            <div>
                <Swiper
                    onSwiper={setSwiperRef}
                    slidesPerView={4}
                    centeredSlides={true}
                    spaceBetween={30}
                    freeMode={true}
                    modules={[FreeMode]}
                    className="mySwiper"
                >
                    {
                        loading === true ? (<Loader/>) : 
                        (
                            recommendedEvents.events.map((event, index)=>{
                                let urlSplit = event.imgUrl.split('/');
                                let id = urlSplit[5];
                                return (
                                    <div>
                                        <SwiperSlide className="relative">
                                            <img src={`https://drive.google.com/thumbnail?id=${id}&sz=w1000`} alt="img" className="recommended-image"/>
                                            <div className="bottom-text-inside-images">
                                                <div className="text-container-image">
                                                    <p className=" text-head-image">Make Agree</p>
                                                    <p className="text-date">March 23, 2024</p>
                                                </div>
                                                <div className="text-image-second-line-container">
                                                    <div className="text-image-second-line-sub">
                                                        <div>
                                                            <FaLocationDot />
                                                        </div>
                                                        <p className="text-date">West Douglas</p>
                                                    </div>
                                                    <div className="text-date">
                                                        Snowy, 26°C | 42Km
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </div>
                                );
                            })
                        )
                    }
                </Swiper>
            </div>
        </div>
    );


}

export default Recommendation;