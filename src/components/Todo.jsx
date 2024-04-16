import "./Todo.css";
import { FaCaretDown } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { LuMessageSquare } from "react-icons/lu";
import { IoIosMenu } from "react-icons/io";

const Todo = () => {
  return (
    <>
      <div className="container">
        <ul className="list-group list-group-flush ">
          <li className="list-group-item bg-transparent element1">
            <div className="vl"></div>
            <p className="txt ml-3.5">ToDo</p>
            <FaCaretDown className="ml-8 mt-2 dwn" />
            <p className="txt ml-4 mt-0.5">8</p>
          </li>
          <li className="list-group-item bg-transparent flex lists">
            <input type="checkbox" className="checkbox-round" />
            <p className="items ml-3 mt-1">لیست محصولات</p>
            <CgProfile className="profile" />
          </li>
          <li className="list-group-item bg-transparent flex lists">
            <input type="checkbox" className="checkbox-round " />
            <p className="items ml-3 mt-1">لاگین پنل مهرگاز</p>
            <LuMessageSquare className="message" />
            <span className="msgn">1</span>
            <CgProfile className="profile" />
          </li>
          <li className="list-group-item bg-transparent flex redline">
            <div className="vl2"></div>
            <input type="checkbox" className="checkbox-round" />
            <p className="items ml-3 mt-1">پنل مشتریان</p>
            <IoIosMenu className="mnu" />
            <span className="mnun">0/1</span>
            <CgProfile className="profile" />
          </li>
          <li className="list-group-item bg-transparent flex lists">
            <input type="checkbox" className="checkbox-round" />
            <p className="items ml-3 mt-1">سفارش مشابه</p>
            <CgProfile className="profile" />
          </li>
          <li className="list-group-item bg-transparent flex lists">
            <input type="checkbox" className="checkbox-round" />
            <p className="items ml-3 mt-1">صفحه ی کنسلی ها</p>
            <CgProfile className="profile" />
          </li>
          <li className="list-group-item bg-transparent flex lists">
            <input type="checkbox" className="checkbox-round" />
            <p className="items ml-3 mt-1">
              طراحی صفحه ی ورود پنل برای کاربران
            </p>
            <CgProfile className="profile" />
          </li>
          <li className="list-group-item bg-transparent flex lists">
            <div className="vl2"></div>
            <input type="checkbox" className="checkbox-round" />
            <p className="items ml-3 mt-1">dfd</p>
            <IoIosMenu className="mnu" />
            <span className="mnun">1/2</span>
            <CgProfile className="profile" />
          </li>
          <li className="list-group-item bg-transparent flex lists">
            <input type="checkbox" className="checkbox-round" />
            <p className="items ml-3 mt-1">لاگین حقوقی</p>
            <CgProfile className="profile" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Todo;
