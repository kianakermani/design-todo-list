import { FaCheckCircle } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { RiFilterLine } from "react-icons/ri";
import { GoPulse } from "react-icons/go";
import { IoIosMenu } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { HiOutlineArrowsUpDown } from "react-icons/hi2";
import { FaCaretDown } from "react-icons/fa";
import "../App.css";

const Navbar = () => {
  return (
    <>
      <div className="bg-white mt-2 h-12 con flex justify-content-between">
        <div className="flex-1 w-64">
          <FaCheckCircle className="check  ml-6 fsize" />
          <p className="text ml-4">Reyham (Web Development)</p>
          <CiStar className="star ml-2" />
        </div>
        <div className="mr-1 over ">
          <span className="font-bold ml-6 num1">1</span>
          <span className="font-semibold due">Overdue</span>
        </div>
        <div className="ll">
          <span className="line">/</span>
        </div>

        <div className="mr-1 pendings ">
          <span className="font-bold ml-6 number ">22</span>
          <span className="font-semibold pend">Pending</span>
        </div>

        <FaCaretDown className="mr-6 mt-4" />
        <HiOutlineArrowsUpDown className="filter mr-2 mt-1" />
        <IoIosMenu className="filter mr-2 mt-1" />
        <GoPulse className="filter mr-2 mt-1" />
        <RiFilterLine className="filter mr-2 mt-1" />
        <BsThreeDots className="filter mt-1 mr-1" />
        <CiCirclePlus className="plus mr-2 fsize" />
      </div>
    </>
  );
};

export default Navbar;
