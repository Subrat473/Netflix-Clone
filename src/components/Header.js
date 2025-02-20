import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
    return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black">
        <img className="m-44"
        src="https://imgs.search.brave.com/_REI2JbScLpbkHnSs5kg0zMqEmjQmb8wYUySDzaUz3o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9OZXRmbGl4/L05ldGZsaXgtTG9n/by53aW5lLnN2Zw" 
        
        alt="logo" />
   
    </div>
  );
};
export default Header;