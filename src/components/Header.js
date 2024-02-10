import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-50 font-[500]">
      <div className="logo-container">
        <Link to="/"><img className="w-28 mt-2 mx-6" src={LOGO_URL}></img></Link>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about" >About</Link></li>
          <li className="px-4"><Link to="/contact">Contact</Link></li>
          <li className="px-4"><Link to="/grocery">Grocery</Link></li>
          <li className="px-4"><Link to="/cart">Cart 🛒-({cartItems.length})</Link></li>
          <button 
            className="login px-4"
            onClick={ () => {
              btnName==="Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >{btnName}</button>
          {/* <li className="px-4 font-bold">{loggedInUser}</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
