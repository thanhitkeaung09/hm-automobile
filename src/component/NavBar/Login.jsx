import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link, Typography } from "@mui/material";
import { HiOutlineX } from "react-icons/hi";
import Img from "../../assets/img/logo.png";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FetchCodeResend, FetchLogin } from "../../api/datas";

import sha256 from "crypto-js/sha256";
import hmacSHA512 from "crypto-js/hmac-sha512";
import Base64 from "crypto-js/enc-base64";
import { private_key } from "../../api/key";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = ({ handleShowLogin }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [displaycodeForm, setDisplayCodeForm] = useState(false);

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleClose = () => {
    handleShowLogin();
  };

  const handleForgetPassword = () => {
    navigate("/forget");
    // setDisplayCodeForm(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const message, nonce, path, privateKey; // ...

    const response = await FetchLogin(formData);
    console.log(response);
    if (response.status === 200) {
      const hashDigest = sha256(response);
      const hmacDigest = Base64.stringify(
        hmacSHA512("path" + hashDigest, private_key)
      );
      localStorage.setItem("Encrypted Key", hmacDigest);
      toast.success("Login Successfully");
      navigate("/");

      // handleShowLogin();
      // window.location.reload();
      // Testing for authentication might be change
      // navigate("/products");
    } else {
      toast.error("Email or Password is incorrect");
    }
  };

  const handleSubmitCodeSend = async () => {
    // alert(formData.email);
    const response = await FetchCodeResend(formData.email);
    console.log(response);
  };

  return (
    <>
      {displaycodeForm ? (
        // Code Send Form
        <form
          onSubmit={handleSubmitCodeSend}
          className={`bg-white p-8 border shadow-sm rounded-sm w-96 relative  ${
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
            <h4 className="text-gray-500 mb-[1px]">SEND CODE</h4>
          </div>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
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
      ) : (
        // Login Form
        <div className="flex justify-center items-center h-screen">
          <form
            onSubmit={handleSubmit}
            className={`bg-white p-8 border shadow-sm rounded-sm w-96 relative ${
              showLoginForm ? "block" : "hidden"
            }`}
          >
            <div className="flex items-center">
              <img src={Img} alt="" />
              <h1 className="text-gray-500">
                H E A V E N &nbsp;&nbsp; M A L L
              </h1>
            </div>
            <div className="mb-3">
              <h4 className="text-gray-500 mb-[1px]">LOGIN</h4>
            </div>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <TextField
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
                required
              />

              <TextField
                label="Password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                variant="outlined"
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleTogglePasswordVisibility}>
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <div className="flex justify-between">
                <Link
                  href="#"
                  onClick={() => navigate("/register")}
                  sx={{ textAlign: "end" }}
                >
                  Don't have an account?
                </Link>

                <Link
                  href="#"
                  onClick={() => handleForgetPassword()}
                  sx={{ textAlign: "end" }}
                >
                  Forget Password
                </Link>
              </div>

              <Button
                type="submit"
                className="bg-primary-soft"
                sx={{
                  backgroundColor: "#fecc39",
                  "&:hover": { backgroundColor: "#333" },
                  color: "white",
                }}
              >
                Login
              </Button>
            </Box>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
