import * as React from "react";
import { FaRegUser } from "react-icons/fa";
import { RiLoginBoxLine } from "react-icons/ri";

import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "../../component/NavBar/Logout";
import Register from "../NavBar/Register";
import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import Login from "../NavBar/Login";
import Confirmation from "./Confirmation";
import { Padding } from "@mui/icons-material";
import { useEffect } from "react";
import Profile from "../../component/NavBar/Profile";
import { useNavigate } from "react-router-dom";
export default function AccountMenu() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [registerShow, setRegisterShow] = useState(false);
  const [openbackdrop, setOpen] = useState(false);
  const [openloginbackdrop, setOpenLogin] = useState(false);
  const [openlogoutbackdrop, setOpenLogout] = useState(false);
  const [openProfilebackdrop, setOpenProfile] = useState(false);
  const [openConfirmationBackdrop, setOpenConfirmationBackdrop] =
    useState(false);
  const [alertHideShow, setAlertHideShow] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("Encrypted Key");
    if (token) {
      setShow(true);
      console.log("token is added");
    }
  }, [show]);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //close register box
  const handleShowRegister = () => {
    handleCloseBackdrop();
    console.log("this is register");
  };
  //close login box
  const handleShowLogin = () => {
    handleCloseLoginBackdrop();
    console.log("this is login box closing");
  };

  //logout

  const handleShowLogout = () => {
    handleCloseLogoutBackdrop();
    console.log("this is login box closing");
  };

  //profile
  const handleShowProfile = () => {
    handleCloseProfile();
  };

  const handleCloseProfile = () => {
    setOpenProfile(false);
  };

  const handleCloseLogoutBackdrop = () => {
    setOpenLogout(false);
  };

  // Sign up
  const handleCloseBackdrop = () => {
    setOpen(false);
  };
  const handleOpenBackdrop = () => {
    // alert("hello backdrop");
    // setOpen(true);
    navigate("/register");
  };

  // login
  const handleCloseLoginBackdrop = () => {
    setOpenLogin(false);
  };
  const handleOpenLoginBackdrop = () => {
    navigate("/login");
    // setOpenLogin(true);
  };

  //logout
  const handleOpenLogoutBackdrop = () => {
    setOpenLogout(true);
  };

  //profile
  const handleOpenProfileBackdrop = () => {
    setOpenProfile(true);
  };

  // confirmation

  const handleConfirmation = () => {
    setOpenConfirmationBackdrop(true);
  };

  const handleConfrim = () => {
    handleCloseBackdrop();
    handleConfirmation();
    setAlertHideShow(false);
  };

  const handleCloseConfirmation = () => {
    setOpenConfirmationBackdrop(false);
  };
  return (
    <>
      <React.Fragment>
        <Box
          sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
        >
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar sx={{ width: 32, height: 32 }}>
                <FaRegUser />
              </Avatar>
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              padding: "20px",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          className="p-3"
        >
          <div className="">
            <p className="text-xl font-bold mb-2">Your Account</p>
            <p className="mb-4">Access Account and manage orders.</p>
          </div>
          {/* <MenuItem onClick={handleClose}>
            <Avatar /> Profile
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Avatar /> My account
          </MenuItem> */}

          {/* <Divider /> */}
          <div className="">
            {show ? (
              <div className="flex items-center justify-center">
                <MenuItem
                  onClick={handleOpenProfileBackdrop}
                  sx={{
                    padding: "10px",
                    border: "1px solid black",
                    borderRadius: "5px",
                    marginRight: "10px",
                  }}
                >
                  <PersonAdd className="me-2" />
                  Profile
                </MenuItem>
                <MenuItem
                  onClick={handleOpenLogoutBackdrop}
                  sx={{
                    padding: "10px",
                    border: "1px solid black",
                    borderRadius: "5px",
                  }}
                >
                  <RiLoginBoxLine className="me-2" />
                  Logout
                </MenuItem>
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <MenuItem
                  onClick={handleOpenBackdrop}
                  sx={{
                    padding: "10px",
                    border: "1px solid black",
                    borderRadius: "5px",
                    marginRight: "10px",
                  }}
                >
                  <PersonAdd className="me-2" />
                  Register
                </MenuItem>
                <MenuItem
                  onClick={handleOpenLoginBackdrop}
                  sx={{
                    padding: "10px",
                    border: "1px solid black",
                    borderRadius: "5px",
                  }}
                >
                  <RiLoginBoxLine className="me-2" />
                  Login
                </MenuItem>
              </div>
            )}
          </div>
        </Menu>
      </React.Fragment>
      {/* for sing up */}
      <div>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={openbackdrop}
        >
          <Register
            handleShowRegister={handleShowRegister}
            handleConfirm={handleConfrim}
          />
        </Backdrop>
      </div>

      {/* for verification account */}

      <div>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={openConfirmationBackdrop}
        >
          {/* <Register handleShowRegister={handleShowRegister} /> */}
          <Confirmation
            alertHideShow={alertHideShow}
            handleCloseConfirmation={handleCloseConfirmation}
          />
        </Backdrop>
      </div>
      {/* for login  */}
      <div>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={openloginbackdrop}
        >
          <Login handleShowLogin={handleShowLogin} />
        </Backdrop>
      </div>
      {/* for logout */}
      <div>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={openlogoutbackdrop}
        >
          {/* <h1>This is Logout</h1> */}
          <Logout handleShowLogout={handleShowLogout} />
          {/* <Login handleShowLogin={handleShowLogin} /> */}
        </Backdrop>
      </div>

      {/* for profile */}
      <div>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={openProfilebackdrop}
        >
          {/* <h1>This is Logout</h1> */}
          <Profile handleShowProfile={handleShowProfile} />
          {/* <Login handleShowLogin={handleShowLogin} /> */}
        </Backdrop>
      </div>
    </>
  );
}
