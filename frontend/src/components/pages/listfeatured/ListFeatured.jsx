import "./listFeatured.css";
import useFetch from "../../hooks/useFetch";
import { useLocation} from "react-router-dom";
import GroupsIcon from '@mui/icons-material/Groups';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from "react-router-dom";


const ListFeatured = () => {

    const navigate = useNavigate(); 
    const path = '/CheckoutPage'; 
   
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
                    <button onClick={() =>  navigate(path)}>Book Now!</button>
                    </div>
                </div>
                </div>
        </div>
    )

};

export default ListFeatured;