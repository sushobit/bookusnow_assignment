import { FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoReorderThree } from "react-icons/io5";
import "./index.css"; // Import the CSS file

function Navbar() {
  return (
    <div className="navbar">
      {/* Top */}
      <div className="navcontainer">
        <div className="brand">BookUsNow</div>
        <div className="navsubcont">
                    <button className="catetopcont">
                        <div className=" texticon">
                            <IoReorderThree />
                        </div>
                        <div className="categorytext">
                            Categories
                        </div>
                    </button>
                    <div className="searchcontainer">
                        <input
                            type="text"
                            placeholder="DJI phantom"
                            className="searchtext"
                        />
                        <div className="cursor-pointer">
                            <FaSearch />
                        </div>
                    </div>
                </div>
                <div className="heartcont">
                    <div className="cursor-pointer">
                        <FaHeart />
                    </div>
                    <div className="cursor-pointer">
                        Favourites
                    </div>
                    <button className="signinbutton">
                        Sign In
                    </button>
                </div>
            </div>

            {/* Bottom */}
            <div className="navbottomsection">
                <div className="navbotsub">
                    <IoLocationSharp />
                    <div>
                        Mumbai, India
                    </div>
                    <MdKeyboardArrowRight />
                </div>
                <div className="navoptions">
                    <p className="cursor-pointer">Live shows</p>
                    <p className="cursor-pointer">Streams</p>
                    <p className="cursor-pointer">Movies</p>
                    <p className="cursor-pointer">Plays</p>
                    <p className="cursor-pointer">Events</p>
                    <p className="cursor-pointer">Sports</p>
                    <p className="cursor-pointer">Activities</p>
                </div>
            </div>
        </div>
    );


}

export default Navbar;