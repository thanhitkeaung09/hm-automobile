import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { HiOutlineX } from "react-icons/hi";
import Img from "../../assets/img/logo.png";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FetchLogin } from "../../api/datas";

import sha256 from "crypto-js/sha256";
import hmacSHA512 from "crypto-js/hmac-sha512";
import Base64 from "crypto-js/enc-base64";
import { private_key } from "../../api/key";
import { useNavigate } from "react-router-dom";

const Logout = ({ handleShowLogout }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(true);

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleClose = () => {
    handleShowLogout();
    console.log("this is login");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const message, nonce, path, privateKey; // ...

    const response = await FetchLogin(formData);
    console.log(response);
    if (response) {
      const hashDigest = sha256(response);
      const hmacDigest = Base64.stringify(
        hmacSHA512("path" + hashDigest, private_key)
      );
      localStorage.setItem("Encrypted Key", hmacDigest);
      handleShowLogout();
      // Testing for authentication might be change
      navigate("/products");
    }
    // handleShowRegister();

    // Add your form submission logic here
    console.log("Form submitted with data:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-white p-8 border shadow-sm rounded-sm w-96 relative ${
        showLoginForm ? "block" : "hidden"
      }`}
    >
      <div className="absolute top-3 right-3">
        <HiOutlineX
          className="cursor-pointer text-black z-20 "
          onClick={handleClose}
        />
      </div>
      <div className="flex items-center">
        <img src={Img} alt="" />
        <h1 className="text-gray-500">H E A V E N &nbsp;&nbsp; M A L L</h1>
      </div>
      <div className="mb-3">
        <h4 className="text-gray-500 mb-[1px]">
          Are You Sure want to Logout ?
        </h4>
      </div>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Button
          onClick={handleClose}
          className="border"
          sx={{ border: "1px solid black" }}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          className="bg-primary-soft"
          sx={{
            backgroundColor: "#fecc39",
            "&:hover": { backgroundColor: "#333" },
            color: "white",
          }}
        >
          Logout
        </Button>
      </Box>
    </form>
  );
};

export default Logout;
