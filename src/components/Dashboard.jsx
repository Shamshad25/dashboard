import { BiData } from "react-icons/bi";
import {
  BsCurrencyDollar,
  BsArrowDownLeft,
  BsArrowUpShort,
  BsFileText,
  BsArrowDownShort,
  BsHeadset,
} from "react-icons/bs";
import { FaBagShopping } from "react-icons/fa6";
import { RiWallet3Line } from "react-icons/ri";

const Dashboard = () => {
  return (
    <section className="h-full p-8 bg-gray-100">
      <div>
        <h1>
          Hello Shahrukh
          <span role="img" aria-label="sheep">
            👋,
          </span>
        </h1>
      </div>
      <div className="grid grid-cols-4 grid-rows-3 gap-4">
        <div className="bg-white drop-shadow-md flex justify-center items-center gap-3 py-8 rounded-md">
          <div className="relative bg-green-200 w-24 h-24 rounded-full flex justify-center items-center">
            <div className="absolute top-4 right-4">
              <span>
                <BsArrowDownLeft
                  color="rgb(22 163 74)"
                  style={{
                    width: "20px",
                    height: "20px",
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

        <div className="bg-white drop-shadow-md flex justify-center items-center gap-3 py-8 rounded-md">
          <div className="relative bg-purple-200 w-24 h-24 rounded-full flex justify-center items-center">
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

        <div className="bg-white drop-shadow-md flex justify-center items-center gap-3 py-8 rounded-md">
          <div className="relative bg-blue-200 w-24 h-24 rounded-full flex justify-center items-center">
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
                bottom: "25px",
                left: "25px",
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

        <div className="bg-white drop-shadow-md flex justify-center items-center gap-3 py-8 rounded-md">
          <div className="relative bg-red-200 w-24 h-24 rounded-full flex justify-center items-center">
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
    </section>
  );
};

export default Dashboard;
