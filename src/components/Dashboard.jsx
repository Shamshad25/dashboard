import { BiData, BiSearchAlt2 } from "react-icons/bi";
import {
  BsCurrencyDollar,
  BsArrowDownLeft,
  BsArrowUpShort,
  BsFileText,
  BsArrowDownShort,
} from "react-icons/bs";
import { FaAngleDown, FaBagShopping } from "react-icons/fa6";
import { RiWallet3Line } from "react-icons/ri";
import Barchart from "./Barchart";
import Donut from "./Donut";

const Dashboard = () => {
  return (
    <section className="h-full p-2 bg-gray-100">
      <div className="flex justify-between">
        <h1 className="font-bold">
          Hello Shahrukh
          <span role="img" aria-label="sheep">
            👋,
          </span>
        </h1>
        <div className=" bg-white flex items-center p-1 rounded-md">
          <BiSearchAlt2
            color="rgb(107 114 128)"
            style={{
              width: "20px",
              height: "20px",
              top: 8,
            }}
          />
          <input type="search" placeholder="search" />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 my-4">
        <div className="bg-white drop-shadow-md flex justify-center items-center gap-3 py-3 rounded-md">
          <div className="relative bg-green-200 w-20 h-20 rounded-full flex justify-center items-center">
            <div className="absolute top-3 right-2">
              <span>
                <BsArrowDownLeft
                  color="rgb(22 163 74)"
                  style={{
                    width: "16px",
                    height: "16px",
                    margin: "5px",
                    position: "absolute",
                    top: 0,
                    right: 0,
                    backgroundColor: "rgb(187 247 208)",
                  }}
                />
              </span>
            </div>
            <div className="w-12 h-12 border-4 border-green-600 rounded-full flex justify-center items-center">
              <BsCurrencyDollar
                color="rgb(22 163 74)"
                style={{ width: "30px", height: "30px", margin: "5px" }}
              />
            </div>
          </div>
          <div className="w-1/2">
            <p className="text-gray-400 text-md">Earning</p>
            <h1 className="text-2xl font-bold">$198k</h1>
            <p className="flex text-sm">
              <span className="text-green-600 flex items-center">
                <BsArrowUpShort
                  style={{
                    width: "20px",
                    height: "20px",
                  }}
                />
                37.8%&nbsp;
              </span>
              this month
            </p>
          </div>
        </div>

        <div className="bg-white drop-shadow-md flex justify-center items-center gap-3 py-3 rounded-md">
          <div className="relative bg-purple-200 w-20 h-20 rounded-full flex justify-center items-center">
            <BsFileText
              color="rgb(147 51 234 )"
              style={{ width: "40px", height: "40px", margin: "5px" }}
            />
          </div>
          <div className="w-1/2">
            <p className="text-gray-400 text-md">Orders</p>
            <h1 className="text-2xl font-bold">$2.4k</h1>
            <p className="flex text-sm">
              <span className="text-red-600 flex items-center">
                <BsArrowDownShort
                  style={{
                    width: "20px",
                    height: "20px",
                  }}
                />
                37.8%&nbsp;
              </span>
              this month
            </p>
          </div>
        </div>

        <div className="bg-white drop-shadow-md flex justify-center items-center gap-3 py-3 rounded-md">
          <div className="relative bg-blue-200 w-20 h-20 rounded-full flex justify-center items-center">
            <div>
              <RiWallet3Line
                color="rgb(37 99 235)"
                style={{ width: " 40px", height: "40px" }}
              />
            </div>
            <BiData
              color="rgb(37 99 235)"
              style={{
                width: "20px",
                height: "20px",
                position: "absolute",
                bottom: "20px",
                left: "20px",
                backgroundColor: "rgb(191 219 254)",
              }}
            />
          </div>
          <div className="w-1/2">
            <p className="text-gray-400 text-md">Balance</p>
            <h1 className="text-2xl font-bold">$2.4k</h1>
            <p className="flex text-sm">
              <span className="text-red-600 flex items-center">
                <BsArrowDownShort
                  style={{
                    width: "20px",
                    height: "20px",
                  }}
                />
                37.8%&nbsp;
              </span>
              this month
            </p>
          </div>
        </div>

        <div className="bg-white drop-shadow-md flex justify-center items-center gap-3 py-3 rounded-md">
          <div className="relative bg-red-200 w-20 h-20 rounded-full flex justify-center items-center">
            <FaBagShopping
              color="rgb(220 38 38)"
              style={{ width: "40px", height: "40px", margin: "5px" }}
            />
          </div>
          <div className="w-1/2">
            <p className="text-gray-400 text-md">Orders</p>
            <h1 className="text-2xl font-bold">$89k</h1>
            <p className="flex text-sm">
              <span className="text-green-600 flex items-center">
                <BsArrowUpShort
                  style={{
                    width: "20px",
                    height: "20px",
                  }}
                />
                11%&nbsp;
              </span>
              this month
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex gap-4">
        <div className="w-4/6 bg-white drop-shadow-md rounded-md p-1">
          <div className="flex justify-between px-4">
            <div className="leading-2">
              <h1 className="text-2xl font-bold leading-none">Overview</h1>
              <p className="text-gray-300">Monthly Earning</p>
            </div>
            <div className="bg-purple-100 rounded-md flex items-center gap-2 p-0 h-8 px-2">
              <p>Quarterly</p>
              <FaAngleDown color="black" />
            </div>
          </div>
          <Barchart />
        </div>
        <div className="w-2/6 bg-white drop-shadow-md rounded-md flex flex-col justify-center items-center">
          <div className="w-full px-4">
            <h1 className="text-2xl font-bold leading-none">Customers</h1>
            <p className="text-gray-300">Customers that buy products</p>
          </div>
          <div className="w-64 h-64">
            <Donut />
          </div>
        </div>
      </div>

      <div className="w-full bg-white drop-shadow-md mt-2 rounded-md p-2">
        yo
      </div>
    </section>
  );
};

export default Dashboard;
