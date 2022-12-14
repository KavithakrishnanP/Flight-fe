import React from 'react'
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import "./navbar.css"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const quantity = useSelector(state=>state.cart.quantity)
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/login");
		localStorage.removeItem("persist:root");
	    window.location.reload();
      
	};
  return (
    <div className="Container">
      <div className="Wrapper">
         <div className="Left">
         <div className="Language"></div>
        
        </div>
        <div className="Center">
        <div className="Logo">FLIGHT BOOKING APP</div>
        </div>
        <div className="Right">
        
       

        <div className="MenuItem">  <Link to="/register">REGISTER</Link></div>
        <Link className="MenuItem" onClick={handleLogout}>  SIGN OUT</Link>
        <div className="MenuItem">
          <Link to="/cart">
            
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar