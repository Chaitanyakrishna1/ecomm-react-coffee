import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import App, { UserContext } from "../../App";
import { AppContext } from "../../context/appContext";
import { TbBrandProducthunt } from "react-icons/tb";
import { IoIosLogOut } from "react-icons/io";
import { FaJediOrder } from "react-icons/fa6";

export default function Navbar() {
  const { flag, setFlag, user, setUser } = useContext(UserContext);
  const { cartItems,orders } = useContext(AppContext);
  const PATH = process.env.REACT_APP_PATH;
  const values = Object.values(cartItems);
  const total = values.length;
  return (
    <div className="navbar">
      <div className="title">Irish Cafe</div>
      <div><h3>Hi {user.name}!</h3></div>
      <div className="links">
        <Link to={`${PATH}/`}><TbBrandProducthunt /> Products </Link>
        <Link to={`${PATH}/order`}> <FaJediOrder />Orders({orders.length}) </Link>
        <Link to={`${PATH}/cart`}><FaShoppingCart /> Cart({total}) </Link>
        <Link to={`${PATH}/`} onClick={() => setFlag((prev) => 0)}><IoIosLogOut />
          Logout
        </Link>
      </div>
    </div>
  );
}
