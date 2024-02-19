import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { HiOutlineX } from "react-icons/hi";
import Img from "../../assets/img/logo.png";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FetchLogin, FetchVerify } from "../../api/datas";
import { Alert } from "@mui/material";
import toast from "react-hot-toast";
import { HmacSHA512, SHA256 } from "crypto-js";
import Base64 from "crypto-js/enc-base64";
import { private_key } from "../../api/key";
import { useNavigate } from "react-router-dom";

const Confirmation = ({ handleCloseConfirmation, alertHideShow }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    code: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showAlert, setShowAlert] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log(alertHideShow);
    console.log(showAlert);
    const hideAlert = () => {
      if (alertHideShow === false) {
        console.log("hello min ga lar");
        setTimeout(() => {
          setShowAlert(true);
          console.log(showAlert);
          console.log("min alkflkasflksdjflsdj");
        }, 500);

        setTimeout(() => {
          setShowAlert(false);
          console.log(showAlert);
          console.log("min alkflkasflksdjflsdj");
        }, 5000);
      }
    };
    hideAlert();
  }, [alertHideShow]);

  // useEffect(() => {
  //   console.log("aljfklsdjflksflksdjfklsdjf;");
  // }, []);

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleClose = () => {
    handleCloseConfirmation();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await FetchVerify(formData);
    console.log(response);
    if (response.status) {
      const hashDigest = SHA256(response.data.token);
      const hmacDigest = Base64.stringify(
        HmacSHA512("path" + hashDigest, private_key)
      );
      localStorage.setItem("Encrypted Key", hmacDigest);
      toast.success("Registration is successful.");
      navigate("/");
      // handleCloseConfirmation();
      // window.location.reload();
    }
    // handleShowRegister();

    // Add your form submission logic here
    // console.log("Form submitted with data:", formData);
  };
  console.log(showAlert);
  // if (showAlert === false) {
  //   setShow(true);
  // }
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 border shadow-md rounded-md w-96 relative"
        >
          <div className="flex items-center">
            <img src={Img} alt="" />
            <h1 className="text-gray-500">H E A V E N &nbsp;&nbsp; M A L L</h1>
          </div>
          <div className="mb-3">
            <h4 className="text-gray-500 mb-[1px]">VERIFY YOU ACCOUNT</h4>
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
              label="Code"
              type="text"
              name="code"
              value={formData.password}
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
              Verify Account
            </Button>
          </Box>
        </form>
      </div>
    </>
  );
};

export default Confirmation;
