import RestaurantCard,{withAggregatedDiscount} from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";



const Body=()=>{
    

    const [restaurantList  ,setRestaurantList]=useState([]);
    const [filteredRestautrant, setFilteredRestaurant] = useState([]);
    const [searchText , setSearchText] = useState("");


   
   
    


    useEffect(()=>{
       fetchData();
    },[]);

    const fetchData=async()=> {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.21670&lng=72.68330&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    

    const json = await data.json();

    console.log(json);
    const cardData = json.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
     setRestaurantList(cardData);
     setFilteredRestaurant(cardData);
    };
     const RestaurantDiscount = withAggregatedDiscount(RestaurantCard);

    const onlineStatus = useOnlineStatus();

    if(onlineStatus == false)
  
      return(<h1>please check your internet</h1>)

    if(restaurantList.length == 0){
        return <Shimmer/>
    }
    
     

    console.log("first render");

    return(
        <div className="body">
            <div className="flex">
                <div className="search-text m-4 p-4">
                 <input type="text" className="border border-solid border-black" placeholder="search" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
                <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" type="submit" onClick={()=>{
                    const filteredRestautrant=restaurantList.filter(restaurants=> restaurants.info.name.toLowerCase().includes(searchText.toLowerCase()));
                   
                    console.log(searchText);
                    
                    setFilteredRestaurant(filteredRestautrant);
                    
    
                    console.log(filteredRestautrant);
                }

                }
                >search</button>
                </div>

                <div className="earch m-4 p-4 flex items-center">
                      <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={()=>{
                      const filteredList=restaurantList.filter(res=>res.info.avgRating > 4.6);
                      setRestaurantList(filteredList);
                    }}>Top rated restaurants</button>
                </div>

             
            </div>
            <div className="flex flex-wrap">
              {filteredRestautrant.length === 0 ? (
               <h1>No Search Found</h1>
              ) : (
             filteredRestautrant.map((restaurant) => (
              <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                                {restaurant.info.aggregatedDiscountInfoV3? (<RestaurantDiscount  resData={restaurant} /> ): (<RestaurantCard resData={restaurant} />)}
                  
             </Link>
       ))
    )}
</div>


        </div>
    )
    
}
export default Body;