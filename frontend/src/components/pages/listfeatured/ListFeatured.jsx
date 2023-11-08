import "./listFeatured.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useFetch from "../../hooks/useFetch";
import { useLocation, useNavigate } from "react-router-dom";
import GroupsIcon from '@mui/icons-material/Groups';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const ListFeatured = () => {

    const location = useLocation();
    const id = location.pathname.split("/")[2];
    
    const { data } = useFetch(`/halls/find/${id}`);

    return(
        <div>
            <div className="hallWrapper">
                <h1 className="hallTitle">{data.venueName}</h1>
                <div className="hallAddress">
                    <span><LocationOnIcon/> {data.address}</span>
                </div>
                <div className="hallImages">
                    <div className="hallImgWrapper">
                        <img src={data.imageUrl} alt="Venue" className="hallImg" />
                    </div>
                </div>
                <span className="fpName">{data.capacity} <GroupsIcon/></span>
                <div className="hallDetails">
                    <div className="hallDetailsPrice">
                    <h1>Description</h1>
                    <span>{data.description}</span>
                    <button>Book Now!</button>
                    </div>
                </div>
                </div>
        </div>
    )

};

export default ListFeatured;