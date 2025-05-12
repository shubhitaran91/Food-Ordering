import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("Login");
  const onlineStatus =  useOnlineStatus();
  const{LoggedInUser}= useContext(UserContext)
  const cartItems = useSelector((store) => store.cart.items);
  

  return (
    <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-amber-200 lg:bg-green-200">
      <div className="">
        <img className="w-30 " src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex py-10 px-10">
          <li>Online Status:{onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery </Link>
          </li>
          <li className="px-4 font-bold">
           <Link to="/cart"> 🛒Cart({cartItems.length})</Link>
          </li>
          <button
            className="px-4"
            onClick={() => {
              setIsLoggedIn(isLoggedIn === "Login" ? "Logout" : "Login");
            }}
          >
            <p>{isLoggedIn}</p>
          </button>
          <li className="px-4 font-bold">
            <Link>{LoggedInUser}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
