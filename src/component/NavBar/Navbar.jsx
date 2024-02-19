// Navbar.js
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import { Link, NavLink } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import Img from "../../assets/img/logo.png";
import AccountMenu from "./AccountMenu";
import { FiSearch } from "react-icons/fi";




const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div>
      <LanguageSwitcher />
      <AppBar position="static" sx={{ backgroundColor: "#333" }} className="">
        <Toolbar className="justify-between w-full md:w-[95%] lg:w-[85%] mx-auto">
          <Typography variant="h6" className="text-white">
            <img src={Img} alt="" />
          </Typography>
          <div className="hidden md:flex">
            <NavLink
              to="/"
              className="mx-4 text-primary-dark relative  transition-all duration-100 before:absolute before:-bottom-3 before:rounded before:contents-[''] before:w-0 before:h-[3px] before:bg-primary-soft hover:before:w-full before:transition-all before:duration-150  "
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className="mx-4 text-primary-dark relative  transition-all duration-100 before:absolute before:-bottom-3 before:rounded before:contents-[''] before:w-0 before:h-[3px] before:bg-primary-soft hover:before:w-full before:transition-all before:duration-150"
            >
              Products
            </NavLink>
            <NavLink
              to="/about"
              className="mx-4 text-primary-dark  transition-all duration-100 relative   before:absolute before:-bottom-3 before:rounded before:contents-[''] before:w-0 before:h-[3px] before:bg-primary-soft hover:before:w-full before:transition-all before:duration-150"
            >
              About
            </NavLink>
            {/* <NavLink
              to="/services"
              className="mx-4 text-primary-dark relative  transition-all duration-100 before:absolute before:-bottom-3 before:rounded before:contents-[''] before:w-0 before:h-[3px] before:bg-primary-soft hover:before:w-full before:transition-all before:duration-150"
            >
              Services
            </NavLink> */}
            <NavLink
              to="/contact"
              className="mx-4 text-primary-dark  relative  transition-all duration-100 before:absolute before:-bottom-3 before:rounded before:contents-[''] before:w-0 before:h-[3px] before:bg-primary-soft hover:before:w-full before:transition-all before:duration-150"
            >
              Contact Us
            </NavLink>
          </div>
            <div className="hidden md:block">
              <div className="border rounded-2xl overflow-hidden bg-white px-2 py-1 group" >
                <input type="text" className="px-3 text-gray-600 focus:outline-none" />
                <button>
                  <FiSearch className="text-gray-600 group-hover:text-primary-dark"/>
                </button>
              </div>
            </div>
          <div className="hidden md:block">
            <AccountMenu/>
          </div>
          <div className="md:hidden">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
        BackdropProps={{ style: { backgroundColor: "rgba(0, 0, 0, 0.5)" } }}
        PaperProps={{
          style: {
            background: "rgba(255, 255, 255, 0.7)",
            color: "rgb(255, 179, 0)",
            backdropFilter: "blur(10px)",
          },
        }}
      >
        <div className="p-4">
          <div className="mb-4">
            <NavLink
              to="/"
              className="block py-2 px-4 hover:bg-gray-800"
              onClick={toggleDrawer}
            >
              Home
            </NavLink>
          </div>
          <div className="mb-4">
            <NavLink
              to="/products"
              className="block py-2 px-4 hover:bg-gray-800"
              onClick={toggleDrawer}
            >
              Products
            </NavLink>
          </div>
          <div className="mb-4">
            <NavLink
              to="/about"
              className="block py-2 px-4 hover:bg-gray-800"
              onClick={toggleDrawer}
            >
              About Us
            </NavLink>
          </div>
       
          {/* <div className="mb-4">
            <NavLink
              to="/services"
              className="block py-2 px-4 hover:bg-gray-800"
              onClick={toggleDrawer}
            >
              Services
            </NavLink>
          </div> */}
          <div>
            <NavLink
              to="/contact"
              className="block py-2 px-4 hover:bg-gray-800"
              onClick={toggleDrawer}
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
