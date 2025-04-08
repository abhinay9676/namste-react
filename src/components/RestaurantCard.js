import { CDN_URL } from "../utils/constants";



const RestaurantCard=(props)=>{
    const { resData } = props;

    const { name,cloudinaryImageId,costForTwo,cuisines,avgRating} = resData?.info;
    return(
        <div className="res-card">
         <div className="res-logo">
           <img
             className="res-logo"
             alt="res-logo"
            src={CDN_URL+resData.info.cloudinaryImageId}
           />
           <div className="res-details">
           <h3>{resData?.info?.name}</h3>
           <h4>{resData?.info?.cuisines.join(", ")}</h4>
           <h4>{resData?.info?.avgRating}</h4>
           <h5>{resData?.info?.costForTwo}</h5> 
           </div>
           
           
         </div>
        </div>
    )
}

export default RestaurantCard;