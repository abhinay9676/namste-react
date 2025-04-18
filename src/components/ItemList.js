import { CDN_URL } from "../utils/constants";
const ItemList=({items,dummy})=>{
    console.log(dummy);
   return(<div>
     
        {items.map((item) => (
            <div
            key={item.card.info.id} className="p-2 m-2 border-black border-b-2 text-left flex justify-between">
                
            <div className="w-9/12">
          <div className="py-2">
            <span>{item.card.info.name}</span>
            <span>-₹ {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultprice/100}</span>
            </div>

            <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 p-4">
            <img src={CDN_URL + item.card.info.imageId} className="w-full"/>
                 <div className="absoulte">
                    <button className="mx-10 rounded-lg bg-white shadow-lg text-xs">Add+</button>
                </div>
                
                </div>
    


            </div>))}
        
      
   </div>
   )
}

export default ItemList;