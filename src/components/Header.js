import { LOGO_URL } from "../utils/constants";

const Header=()=>{
    return(
        <div className="header">
            <div className="logo">
            <img src={LOGO_URL} className="image-style"/>
            </div>
            <div className="nav-items">
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Cart</li>
              </ul>
            </div>
        </div>
    )
}

export default Header;


