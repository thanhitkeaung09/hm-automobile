import { HiOutlineX } from "react-icons/hi";
import Img from "../../assets/img/logo.png";
import BookingImage from "../../assets/img/car-booking.jpg";

const Card = ({ handleBookingClose }) => {
  const handleCloseBookingForm = () => {
    handleBookingClose();
  };
  return (
    <>
      <div className="flex flex-col">
        <form
          // onSubmit={handleSubmit}
          className="bg-white  border shadow-sm rounded-sm  w-[1000px] relative"
        >
          <div className="absolute top-3 right-3">
            <HiOutlineX
              className="cursor-pointer text-black z-20 "
              onClick={handleCloseBookingForm}
            />
          </div>
          <div className="flex items-center"></div>
          {/* <div className="mb-1">
            <h4 className="text-gray-500 mb-[1px]">Request Details</h4>
          </div> */}
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-6">
              <div className="">
                <img className="" src={BookingImage} alt="" />
              </div>
            </div>
            <div className="col-span-6"></div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Card;
