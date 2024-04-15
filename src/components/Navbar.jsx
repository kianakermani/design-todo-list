import { FaCheckCircle } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import "../App.css";

const Navbar = () => {
  return (
    <>
      <div className="bg-white mt-2 h-12 con flex">
        <div className="flex-1 w-64">
          <FaCheckCircle className="check  ml-6" />
          <p className="text ml-4">Reyham (Web Development)</p>
          <CiStar className="star ml-2" />
        </div>
        <div className="flex-shrink-0">hello</div>
      </div>
    </>
  );
};

export default Navbar;
