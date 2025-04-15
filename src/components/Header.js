import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header=()=>{
  const [btn , setBtn] = useState("login");

  const onlineStatus = useOnlineStatus();

  



  
    return(
        <div className="header">
            <div className="logo">
            <img src={LOGO_URL} className="image-style"/>
            </div>
            <div className="nav-items">
              <ul>
                <li>
                  OnlineStatus: {onlineStatus ? "✅" : "🔴"}
                </li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/grocery">Grocery</Link></li>
                <li><button className="btn-login" onClick={()=>{btn == "login" ? setBtn("logout") : setBtn("login")}}>{btn}</button></li>
              </ul>
            
            </div>
        </div>
    )
}

export default Header;


