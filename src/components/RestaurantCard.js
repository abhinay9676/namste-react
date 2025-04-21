import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";



const RestaurantCard=(props)=>{
    const { resData } = props;


    const {loggedInUser} = useContext(UserContext);

   


    
    const { name,cloudinaryImageId,costForTwo,cuisines,avgRating} = resData?.info;
    return(
        <div className="m-6 p-6 w-[250px] bg-gray-100 hover:bg-gray-200">
         <div className="res-logo">
           <img
             className="rounded-lg"
             alt="res-logo"
            src={CDN_URL+resData.info.cloudinaryImageId}
           />
           <div className="res-details">
           <h3 className="font-bold py-4 text-lg">{resData?.info?.name}</h3>
           <h4>{resData?.info?.cuisines.join(", ")}</h4>
           <h4>{resData?.info?.avgRating}</h4>
           <h5>{resData?.info?.costForTwo}</h5> 
           <h5>{loggedInUser}</h5>
           </div>
           
           
         </div>
        </div>
    )
}

// higher oredr component need to created;
// input -- RestaurantCard=== return RestaurantCard aggregatedDiscountInfoV3

export const withAggregatedDiscount = (RestaurantCard)=>{
  return(props)=>{
    const header = props?.resData?.info?.aggregatedDiscountInfoV3?.header;
    const subHeader = props?.resData?.info?.aggregatedDiscountInfoV3?.subHeader;


    return(
      <div>
         <h3 className="absolute bg-black text-white m-3">{header + subHeader}</h3>
      {/* <p>{subHeader}</p> */}
      <RestaurantCard {...props}/>
      
    </div>
    );
    
  };
};

export default RestaurantCard;