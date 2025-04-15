import { useEffect , useState} from "react";


const useRestaurantMenu=(id)=>{

    const [resInfo,setResInfo] = useState(null);

    useEffect(()=> {
      fetchData();
    }, []);


    const fetchData = async ()=>{
        const data = await fetch( `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.21670&lng=72.68330&restaurantId=${id}`);

        const json = await data.json();
        setResInfo(json.data);

    };

    return resInfo;
};

export default useRestaurantMenu;