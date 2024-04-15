import React from "react";
import { Box, InputLabel, Select } from "@mui/material";

export default function Shipping(props) {
  const handleChange = (e) => {
    props.state.setProductData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          padding: "10px",
          border: "1px solid #efefef",
          backgroundColor: "white",
          borderRadius: "8px",
        }}
      >
        <h3 style={{ fontSize: "large", fontWeight: "bold" }}>Shipping</h3>
        <InputLabel>
          <span style={{ color: "red" }}>*</span>Width:
        </InputLabel>
        <input
          type="number"
          className="product-input"
          placeholder=" Width"
          // onChange={handleChange}
        ></input>

        <InputLabel>
          <span style={{ color: "red" }}>*</span>Height
        </InputLabel>
        <input
          type="Number"
          className="product-input"
          placeholder=" Height"
          // onChange={handleChange}
        ></input>

        <InputLabel>
          <span style={{ color: "red" }}>*</span>Weight
        </InputLabel>
        <input
          type="Number"
          className="product-input"
          placeholder=" Weight"
          // onChange={handleChange}
        ></input>

        <InputLabel>
          <span style={{ color: "red" }}>*</span>Shipping Fees
        </InputLabel>  
         <input
          type="Number"
          className="product-input"
          placeholder=" $"
          onChange={handleChange}
          name="Shipping"
        ></input>
      </Box>
    </div>
  );
}
