
import { FaLocationDot } from "react-icons/fa6";
import './index.css'; 

function Card(props){
    let event = props.event;
    let urlSplit = event.imgUrl.split('/');
    let id = urlSplit[5];

    return (
        <div className="card-container-main">
            
            <div>
                <img className="card-image"src={`https://drive.google.com/thumbnail?id=${id}&sz=w1000`} />
            </div>

           
            <div className="card-text-main-container">
                <div className="card-head">
                    After note nearly
                </div>
                <div className="card-bottm">
                    <div className="card-location">
                        <div>
                            <FaLocationDot />
                        </div>
                        <p>West Douglas</p>
                    </div>
                    <div>
                        Snowy, 26°C | 42Km
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Card;