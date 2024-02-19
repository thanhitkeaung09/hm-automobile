import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Alert, Link, Typography } from "@mui/material";
import { HiOutlineX } from "react-icons/hi";
import Img from "../../assets/img/logo.png";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FetchSignup } from "../../api/datas";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";

const Register = ({ handleShowRegister, handleConfirm }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleClose = () => {
    handleShowRegister();
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleTogglePasswordVisibilityConfirm = () => {
    setShowPasswordConfirm((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const response = await FetchSignup(formData);
    console.log(response);
    if (response.data.status === true) {
      toast.success("Confirmation code is successfully sent");
      navigate("/confirm");
      // setShowAlert(true);
      // handleConfirm();
      // setTimeout(() => {
      //   setShowAlert(false);
      // }, 1000);
    } else {
      toast.error("User is already exists");
      setLoading(false);
    }
  };

  // const handleConfirmation = () => {
  //   handleConfirm();
  // };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <form
          onSubmit={handleSubmit}
          className="bg-white px-8 py-3 border shadow-md rounded-lg w-96 relative"
        >
          {/* <div className="absolute top-3 right-3">
            <HiOutlineX
              className="cursor-pointer text-black z-20 "
              onClick={handleClose}
            />
          </div> */}
          <div className="flex items-center">
            <img src={Img} alt="" />
            <h1 className="text-gray-500">H E A V E N &nbsp;&nbsp; M A L L</h1>
          </div>
          <div className="mb-3">
            <h4 className="text-gray-500 mb-[1px]">SIGN UP</h4>
          </div>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              variant="outlined"
              required
            />
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
              label="Phone"
              type="number"
              name="phone"
              value={formData.phone}
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
            <TextField
              label="Confirm Password"
              type={showPasswordConfirm ? "text" : "password"}
              name="password_confirmation"
              value={formData.confirmPassword}
              onChange={handleChange}
              variant="outlined"
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleTogglePasswordVisibilityConfirm}>
                      {showPasswordConfirm ? <FaEyeSlash /> : <FaEye />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              // onClick={handleConfirmation}
              type="submit"
              // variant="contained"
              // color="primary"
              className="bg-primary-soft"
              sx={{
                backgroundColor: "#fecc39",
                "&:hover": { backgroundColor: "#333" },
                color: "white",
              }}
              disabled={loading}
            >
              {loading ? "Submitting" : "Register"}
            </Button>
            <Link
              sx={{ textAlign: "center" }}
              onClick={() => navigate("/login")}
            >
              <Typography sx={{ cursor: "pointer" }}>
                I already have an account
              </Typography>
            </Link>
          </Box>
        </form>
      </div>
    </>
  );
};

export default Register;
