
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_IMG_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";


const RestaurantMenu = () => {
const [showIndex,setShowIndex] = useState(null);

const dummy = "Dummy Data";
  

  const { id }=useParams();
  

  const resInfo = useRestaurantMenu(id);

  if(resInfo==null){
    return <Shimmer/>
  }


  const name  = resInfo?.cards?.[2]?.card?.card?.info?.name;
 const costForTwoMessage = resInfo?.cards?.[2]?.card?.card?.info?.costForTwoMessage;
// const  itemCards  = resInfo?.cards?.[4]?.groupCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card;
const itemCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards;



const categories = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
  (c) =>
    c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
);

// console.log(categories);
 



 



  return (
    <div className="text-center">
     
        <h2 className="font-bold my-10 text-2xl">{name}</h2>
        <h3 className="font-bold text-xl mx-5">{costForTwoMessage}</h3>
        {/* categories accordions */}
        {categories.map((category,index)=>(
          <RestaurantCategory key={category?.card?.card.title} 
          data={category?.card?.card}
          showItem={index == showIndex ? true : false}
          setShowIndex={()=>setShowIndex(index)}
          dummy={dummy}
          />
        ))}
      </div>
      
      
      
  
  )
};



export default RestaurantMenu;


