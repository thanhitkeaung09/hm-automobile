import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { HiOutlineX } from "react-icons/hi";
import Img from "../../assets/img/logo.png";

const Card = ({ handleClose }) => {
  const handleCloseQueryForm = () => {
    handleClose();
  };
  return (
    <>
      <div className="flex flex-col">
        <form
          // onSubmit={handleSubmit}
          className="bg-white py-3 px-10 border shadow-sm rounded-sm w-[500px] relative"
        >
          <div className="absolute top-3 right-3">
            <HiOutlineX
              className="cursor-pointer text-black z-20 "
              onClick={handleCloseQueryForm}
            />
          </div>
          <div className="flex items-center">
            <img src={Img} alt="" />
            <h1 className="text-gray-500">H E A V E N &nbsp;&nbsp; M A L L</h1>
          </div>
          {/* <div className="mb-1">
            <h4 className="text-gray-500 mb-[1px]">Request Details</h4>
          </div> */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">AutoMobile</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="AutoMobile"
                // onChange={handleChange}
              >
                <MenuItem value={10}>Toyota Camry</MenuItem>
                <MenuItem value={20}>Ford Mustang</MenuItem>
                <MenuItem value={30}>Honda CR-V</MenuItem>
              </Select>
            </FormControl>

            <TextField
              label="Name"
              name="name"
              // value={formData.name}
              // onChange={handleChange}
              variant="outlined"
              required
            />
            <TextField
              label="Email"
              type="email"
              name="email"
              // value={formData.email}
              // onChange={handleChange}
              variant="outlined"
              required
            />
            <TextField
              label="Phone"
              type="number"
              name="phone"
              // value={formData.phone}
              // onChange={handleChange}
              variant="outlined"
              required
            />
            <TextField
              id="outlined-multiline-static"
              label="Address"
              name="address"
              multiline
              rows={2}
            />
            <TextField
              label="Question"
              // type={showPasswordConfirm ? "text" : "password"}
              name="question"
              // value={formData.confirmPassword}
              // onChange={handleChange}
              variant="outlined"
              multiline
              rows={2}
              required
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
              // disabled={loading}
            >
              Send
              {/* {loading ? "Submitting" : "Register"} */}
            </Button>
          </Box>
        </form>
      </div>
    </>
  );
};

export default Card;
