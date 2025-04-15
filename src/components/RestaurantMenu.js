
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_IMG_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu = () => {
  

  const { id }=useParams();
  

  const resInfo = useRestaurantMenu(id);

  if(resInfo==null){
    return <Shimmer/>
  }


  const name  = resInfo?.cards?.[2]?.card?.card?.info?.name;
 const costForTwoMessage = resInfo?.cards?.[2]?.card?.card?.info?.costForTwoMessage;
// const  itemCards  = resInfo?.cards?.[4]?.groupCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card;
const itemCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards;

console.log(itemCards);
 



 



  return (
    <div className="rest">
      <div className="res-name">
        <h2>{name}</h2>
        <h3>{costForTwoMessage}</h3>
      </div>
      <div className="menu">
        <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            <h3>{item?.card?.info?.name}</h3>
            <p>₹ {item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}</p>
            {item?.card?.info?.description && <p>{item?.card?.info?.description}</p>}
            <img
                className="res-img"
                alt="res-logo"
                src={MENU_IMG_URL+item?.card?.info?.imageId
                }
            />
          </li>
        ))}
        </ul>
      </div>
      
    </div>
  )
};

export default RestaurantMenu;


