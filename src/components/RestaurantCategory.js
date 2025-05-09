import { useState } from "react";
import ItemList from "./ItemList";


const RestaurantCategory = ({data,showItem,setShowIndex,dummy})=>{

    // const [showItem , setShowItem] = useState(false);
    const handleClick=()=>{
        setShowIndex();
    }
   
    return <div>
        
     <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4">
     <div className="flex justify-between cursor-pointer"  onClick={handleClick}>
     <span>{data.title}({data.itemCards.length})</span>
     <span>⬇️</span>
     </div>
        
       { showItem &&<ItemList items={data.itemCards} dummy={dummy}/>}
     </div>

     
    </div>
}


export default RestaurantCategory;