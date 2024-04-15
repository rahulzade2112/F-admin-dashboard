import React from "react";
import "../Sidenav/sidenav.css";
import { Link,Navigate, useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

export default function Sidenav() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="sidenav-container">
        <ul>
          <Link to="/"><li>Dashboard</li></Link>

          <Link to="/account"><li>Account</li></Link>

          <Link to="/products"><li>Products List</li></Link>

          <Link to="/add"><li>Add Products</li></Link>

          <button
           onClick={()=>{localStorage.removeItem("token"); 
          navigate("/")}}>Sign out</button>
        </ul>
      </div>
    </div>
  )
}
