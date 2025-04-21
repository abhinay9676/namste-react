import { useState ,useContext} from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header=()=>{
  const [btn , setBtn] = useState("login");

  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);


  const cartItems = useSelector((store)=> store.cart.items);

  



  
    return(
        <div className="flex justify-between bg-pink-100 shadow-lg">
            <div className="logo">
            <img className="w-24"src={LOGO_URL} />
            </div>
            <div className="flex items-center">
              <ul className="flex p-4 m-4">
                <li className="px-4">
                  OnlineStatus: {onlineStatus ? "✅" : "🔴"}
                </li>
                <li className="px-4"><Link to="/">Home</Link></li>
                <li className="px-4"><Link to="/about">About</Link></li>
                <li className="px-4"><Link to="/contact">Contact</Link></li>
                <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                <li className="px-4"><Link to="/cart">Cart-({cartItems.length}</Link>)</li>
                <li className="px-4"><button className="btn-login" onClick={()=>{btn == "login" ? setBtn("logout") : setBtn("login")}}>{btn}</button></li>
                <li className="px-4 font-bold">{loggedInUser}</li>
              </ul>
            
            </div>
        </div>
    )
}

export default Header;


