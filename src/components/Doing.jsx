import "./Doing.css";
import { CiCirclePlus } from "react-icons/ci";
import { FaCaretDown } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";
const Doing = () => {
  return (
    <div>
      <div className="c p-3 flex">
        <div className="vlj"></div>
        <p className="txtj ml-3.5">Doing</p>
        <FaCaretDown className="ml-8 mt-2 dwnj" />
        <CiCirclePlus className="pls" />
        <CiCircleCheck className="chk" />
        <p className="tsk">No Tasks</p>
      </div>
    </div>
  );
};

export default Doing;
