import {
  FaKey,
  FaUnity,
  FaUser,
  FaAngleDown,
  FaAngleRight,
} from "react-icons/fa6";
import { BiData, BiSolidOffer } from "react-icons/bi";
import { MdOutlineLiveHelp } from "react-icons/md";
import user from "../assets/user.jpg";
import TokenOutlinedIcon from "@mui/icons-material/TokenOutlined";
import { RiWallet3Line } from "react-icons/ri";

// MdOutlineLiveHelp

const Sidebar = () => {
  return (
    <section className="h-full p-8 flex flex-col justufy-between">
      <div className="h-5/6">
        <div className="flex gap-2">
          <TokenOutlinedIcon
            style={{ color: "white", width: "40px", height: "40px" }}
          />
          <h1 className="text-white text-3xl pb-8">Dashboard</h1>
        </div>
        <ul className="text-lg flex flex-col gap-2">
          <div className="flex justify-between items-center hover:bg-lightblue rounded-md">
            <div className="flex justify-center items-center">
              <div className="border-2 border-gray-300 rounded-md flex justify-center items-center m-2 p-1">
                <FaKey color={"#fff"} />
              </div>
              <li>
                <a href="#">Dashboard</a>
              </li>
            </div>
            <FaAngleRight color="white" />
          </div>
          <div className="flex justify-between items-center hover:bg-lightblue rounded-md">
            <div className="flex">
              <div className="border-2 border-gray-300 rounded-md flex justify-center items-center m-2 p-1">
                <FaUnity color={"#fff"} />
              </div>
              <li>
                <a href="#">Product</a>
              </li>
            </div>
            <FaAngleRight color="white" />
          </div>
          <div className="flex justify-between items-center hover:bg-lightblue rounded-md">
            <div className="flex items-center">
              <div className="border-2 border-gray-300 rounded-md flex justify-center items-center m-2 p-1">
                <FaUser color={"#fff"} />
              </div>
              <li>
                <a href="#">Customers</a>
              </li>
            </div>
            <FaAngleRight color="white" />
          </div>
          <div className="flex justify-between items-center hover:bg-lightblue rounded-md">
            <div className="flex">
              <div className="relative flex pr-2">
                <div>
                  <RiWallet3Line
                    color={"#fff"}
                    style={{ width: " 35px", height: "35px" }}
                  />
                </div>
                <BiData
                  color="white"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    backgroundColor: "#05004e",
                  }}
                />
              </div>
              <li>
                <a href="#">Income</a>
              </li>
            </div>
            <FaAngleRight color="white" />
          </div>
          <div className="flex justify-between items-center hover:bg-lightblue rounded-md">
            <div className="flex">
              <div className="border-2 border-gray-300 rounded-md flex justify-center items-center m-2 p-1">
                <BiSolidOffer color={"#fff"} />
              </div>
              <li>
                <a href="#">Promote</a>
              </li>
            </div>
            <FaAngleRight color="white" />
          </div>
          <div className="flex justify-between items-center hover:bg-lightblue rounded-md">
            <div className="flex">
              <div className="border-2 border-gray-300 rounded-md flex justify-center items-center m-2 p-1">
                <MdOutlineLiveHelp color={"#fff"} />
              </div>
              <li>
                <a href="#">Help</a>
              </li>
            </div>
            <FaAngleRight color="white" />
          </div>
        </ul>
      </div>

      <div className="h-1/6 flex flex-col justify-end">
        <div className="flex justify-between items-center">
          <div className="flex justify-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center object-cover">
              <img src={user} alt="user" className="w-10 h-10 rounded-full " />
            </div>
            <div className="flex flex-col">
              <h4 className="text-lg text-white leading-none">Evana</h4>
              <p className="text-sm text-gray-400">Project Manager</p>
            </div>
          </div>
          <div>
            <FaAngleDown color="white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
