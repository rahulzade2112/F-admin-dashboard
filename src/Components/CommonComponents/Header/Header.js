import React, { useContext, useEffect, useState } from "react";
import "../Header/header.css";
import bell from "../../../assets/images/new.svg";
import { isExpired, decodeToken } from "react-jwt";
import { searchContext } from "../../../Context/searchContext";

export default function Header() {
  const [imgpath, setImgPath] = useState();
  var [decodedData, setFullData] = useState();
  const { searchVariable, updateSearchVariable } = useContext(searchContext);
    const handleChange = (e) => {
      updateSearchVariable(e.target.value);
    };  

  // useEffect(()=>{
  //     console.log(searchVariable)
  //   })
  useEffect(() => {
    var token = localStorage.getItem("token");
    // console.log(decodeToken(token));
    setFullData(decodeToken(token));
    setImgPath("");
  }, []);

  
  return (
    <div>
      <header>
      <input
          type="text"
          className="header-input"
          placeholder="🔍 Search"
          onChange={handleChange}
        ></input>

        <div className="user-details">          

          <img className="notification" src={bell}></img>
          <p className="user-name">{decodedData?.userexist.FullName}</p>          <div className="dp">
            <img
              src={decodedData?.userexist.avatar}
              style={{
                marginTop: "-5px",
                height: "55px",
                width: "55px",
                borderRadius: "50%",
              }}
            ></img>
          </div>
        </div>
      </header>
    </div>
  );
}
