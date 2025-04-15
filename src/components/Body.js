import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";



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
    

    if(restaurantList.length == 0){
        return <Shimmer/>
    }
    
     

    console.log("first render");

    return(
        <div className="body">
            <div className="filter">
                <div className="search-text">
                 <input type="text" placeholder="search" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
                <button className="btn" type="submit" onClick={()=>{
                    const filteredRestautrant=restaurantList.filter(restaurants=> restaurants.info.name.toLowerCase().includes(searchText.toLowerCase()));
                   
                    console.log(searchText);
                    
                    setFilteredRestaurant(filteredRestautrant);
                    
    
                    console.log(filteredRestautrant);
                }

                }
                >search</button>
                </div>

             <button className="filter-btn"onClick={()=>{
                const filteredList=restaurantList.filter(res=>res.info.avgRating > 4.6);
                setRestaurantList(filteredList);
             }}>Top rated restaurants</button>
            </div>
            <div className="res-container">
              {filteredRestautrant.length === 0 ? (
               <h1>No Search Found</h1>
              ) : (
             filteredRestautrant.map((restaurant) => (
              <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                  <RestaurantCard resData={restaurant} />
             </Link>
       ))
    )}
</div>


        </div>
    )
    
}
export default Body;