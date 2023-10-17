import { BiSearchAlt2 } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa6";
import reef from "../assets/reef.jpg";
import earth from "../assets/earth.jpg";

const Product = () => {
  return (
    <>
      <div className="flex justify-between items-center pb-4">
        <h1 className="text-xl font-bold leading-none">Product Sell</h1>
        <div className="flex gap-2">
          <div className=" bg-blue-100 flex items-center px-1 rounded-md">
            <BiSearchAlt2
              color="rgb(107 114 128)"
              style={{
                width: "20px",
                height: "20px",
                top: 8,
              }}
            />
            <input
              type="search"
              placeholder="search"
              style={{
                backgroundColor: "rgb(219 234 254)",
                border: "none",
                padding: "2px",
              }}
            />
          </div>
          <div className="bg-blue-100 rounded-md flex items-center gap-2 p-0 h-8 px-2">
            <p className="text-gray-500">Last 30 Days</p>
            <FaAngleDown color="black" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-8 border-b-2 border-gray-400 ">
        <p className="col-span-5">Product Name</p>
        <p className="text-center text-gray-500">Stock</p>
        <p className="text-center text-gray-500">Price</p>
        <p className="text-center text-gray-500">Total sales</p>
      </div>

      <div className="grid grid-cols-8 p-1">
        <div className="col-span-5 flex gap-2 items-center">
          <div className="w-16 h-10 rounded-md">
            <img src={reef} alt="abstract" className="w-16 h-10 rounded-md" />
          </div>
          <div className="leading-none">
            <p className="font-sm font-bold">Abstract 3D</p>
            <p className="font-xs">
              Lorem ipsum dolor sit amet, consectuer edipising edit.
            </p>
          </div>
        </div>
        <p className="text-center text-gray-600">32 in stock</p>
        <p className="text-center font-bold">$ 45.99</p>
        <p className="text-center text-gray-600">20</p>
      </div>

      <div className="grid grid-cols-8 p-1">
        <div className="col-span-5 flex gap-2 items-center">
          <div className="w-16 h-10 rounded-md object-cover">
            <img src={earth} alt="abstract" className="w-16 h-10 rounded-md" />
          </div>
          <div className="leading-none">
            <p className="font-sm font-bold">Sarphens Illustration</p>
            <p className="font-xs">
              Lorem ipsum dolor sit amet, consectuer edipising edit.
            </p>
          </div>
        </div>
        <p className="text-center text-gray-600">32 in stock</p>
        <p className="text-center font-bold">$ 45.99</p>
        <p className="text-center text-gray-600">20</p>
      </div>
    </>
  );
};

export default Product;
