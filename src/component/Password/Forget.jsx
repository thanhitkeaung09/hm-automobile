import { Box, Button, TextField } from "@mui/material";
import React from "react";
import Img from "../../assets/img/logo.png";

const Forget = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className={`bg-white p-8 border shadow-md rounded-md w-96 relative  `}
      >
        <div className="flex items-center">
          <img src={Img} alt="" />
          <h1 className="text-gray-500">H E A V E N &nbsp;&nbsp; M A L L</h1>
        </div>
        <div className="mb-3">
          <h4 className="text-gray-500 mb-[1px]">SEND CODE</h4>
        </div>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            label="Email"
            type="email"
            name="email"
            // value={formData.email}
            // onChange={handleChange}
            variant="outlined"
            required
          />

          <Button
            type="submit"
            className="bg-primary-soft"
            sx={{
              backgroundColor: "#fecc39",
              "&:hover": { backgroundColor: "#333" },
              color: "white",
            }}
          >
            Send Code
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Forget;
