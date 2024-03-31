// Upcoming.js

import { FaArrowRightLong } from "react-icons/fa6";
import Loader from "../Loader/Loader";
import { useState } from "react";
import Card from "../Card";
import InfiniteScroll from "react-infinite-scroll-component";
import "./index.css"; // Import the CSS file for styles

function Upcoming(){
    const [upcomingEvents, setUpcomingEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pageNum, setPageNum] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const API = `https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=${pageNum}&type=upcoming`;

    async function fetchNewData(){
        if (pageNum <= 4) {
            setPageNum(pageNum + 1);
        } else {
            setHasMore(false);
        }

        try {
            setLoading(true);
            const response = await fetch(API);
            const output = await response.json();
            setUpcomingEvents(upcomingEvents.concat(output.events));
        } catch (error) {
            console.error('Error fetching upcoming events:', error);
        } finally {
            setLoading(false);
        }
    }

    return(
        <div className="upcoming-main-container">
            {/* Top */}
            <div className="upcoming-top-container">
                <div className="upcoming-event">
                    Upcoming events
                    <FaArrowRightLong />
                </div>
                <div className="see-all">
                    See all
                </div>
            </div>

            {/* Bottom */}
            <div className="upcoming-bottom-container">
                {
                    loading === true ? (
                        <div className="loader-contain">
                            <Loader/>
                        </div>
                    ) : 
                    (
                        upcomingEvents.map((event) => {
                            return (
                                <Card event={event}/>
                            )
                        })
                    )
                }
                {
                    pageNum <= 5 ? (
                        <InfiniteScroll
                            dataLength={upcomingEvents.length}
                            next={fetchNewData}
                            hasMore={hasMore}
                        >
                        </InfiniteScroll>
                    ) : (
                        <div>Thank You</div>
                    )
                }
            </div>
        </div>
    );


}

export default Upcoming;