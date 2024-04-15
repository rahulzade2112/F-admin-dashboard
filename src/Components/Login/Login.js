import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import loginImg from "../../assets/images/keyIllustration.svg";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import "./login.css";
import axios from "axios";
import { isExpired, decodeToken } from "react-jwt";

export default function Login(props) {
  const [loginData, setLoginData] = useState({});
   // Handle changes in input fields
  const handleChange = (e) => {
    setLoginData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const navigate = useNavigate();
  const login = async () => {
    var response = await axios.post("http://localhost:8080/login", loginData);
    var decodedData=decodeToken(response.data);
    console.log(decodedData);
    localStorage.setItem("token",response.data) ; 
    console.log(props.state)
    
    props.state(response.data)
      navigate("/");   
  };
  return (
    <div>
      <div className="login-container">
        <div className="input-container">
          <TextField
            required
            id="outlined-required"
            label="Username"
            size="small"
            sx={{ width: "242px" }}
            onChange={handleChange}
            name="username"
          />
          <br></br>
          <br></br>
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            size="small"
            autoComplete="current-password"
            sx={{ width: "242px" }}
            onChange={handleChange}
            name="password"
          />
          <br></br>
          <p>Forgot password</p>

          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Remember me"
          />

          <br></br>
          <Button variant="contained" sx={{ width: "242px" }} onClick={login}>
            Log in
          </Button>
        </div>
        <div className="image-container">
          <img src={loginImg} alt="description of image"></img>
        </div>                                                                                
      </div>
    </div>
  );
}
