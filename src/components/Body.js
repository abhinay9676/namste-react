import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";



const Body=()=>{

    const [restaurantList ,setRestaurantList]=useState(resList);


    // let restaurantList =[]


    return(
        <div className="body">
            <div className="filter">
             <button className="filter-btn"onClick={()=>{
                const filteredList=resList.filter(res=>res.info.avgRating > 4);
                setRestaurantList(filteredList);
             }}>Top rated restaurants</button>
            </div>
            <div className="res-container">


                
             { restaurantList.map((restaurant=>(<RestaurantCard key={restaurant.info.id} resData={restaurant}/>)))};
              
            </div>

        </div>
    )
}

export default Body;