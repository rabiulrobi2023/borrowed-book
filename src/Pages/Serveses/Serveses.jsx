import React from "react";
import { FaComputer, FaHandHoldingHand } from "react-icons/fa6";
import { FcHome } from "react-icons/fc";
import { BsTelephone } from "react-icons/bs";

const Serveses = () => {
  return (
    <div className=" text-center p-10 mt-12 max-w-[1280px] mx-auto">
      <p className="text-3xl font-bold">
        Our <span className="text-[#F3A847]">Services</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-6 p-6 md:border-r-2 border-[#F3A847]">
          <p className="text-3xl text-center mx-auto text-[#F3A847]">
            <FaComputer></FaComputer>
          </p>
          <p className="text-2xl text-gray-600 font-bold">Online Sells</p>
          <p className="text-sm text-gray-700">
            In today's digital era, online selling offers vast reach, 24/7
            availability, cost-effectiveness, and data-driven insights,
            empowering businesses to thrive in the e-commerce landscape.
          </p>
        </div>
        <div className="flex flex-col gap-6 p-6 md:border-r-2 border-[#F3A847]">
          <p className="text-3xl text-center mx-auto text-[#F3A847]">
            <FaHandHoldingHand></FaHandHoldingHand>
          </p>
          <p className="text-2xl text-gray-600 font-bold">Offline Sells</p>
          <p className="text-sm text-gray-700">
            In today's digital era, online selling offers vast reach, 24/7
            availability, cost-effectiveness, and data-driven insights,
            empowering businesses to thrive in the e-commerce landscape.
          </p>
        </div>
        <div className="flex flex-col gap-6 p-6 md:border-r-2 border-[#F3A847]">
          <p className="text-3xl text-center mx-auto text-[#F3A847]">
            <FcHome></FcHome>
          </p>
          <p className="text-2xl text-gray-600 font-bold">Home Delivery</p>
          <p className="text-sm text-gray-700">
            In today's digital era, online selling offers vast reach, 24/7
            availability, cost-effectiveness, and data-driven insights,
            empowering businesses to thrive in the e-commerce landscape.
          </p>
        </div>
        <div className="flex flex-col gap-6 p-6">
          <p className="text-3xl text-center mx-auto text-[#F3A847]">
            <BsTelephone></BsTelephone>
          </p>
          <p className="text-2xl text-gray-600 font-bold">24/7 Customer Care</p>
          <p className="text-sm text-gray-700">
            In today's digital era, online selling offers vast reach, 24/7
            availability, cost-effectiveness, and data-driven insights,
            empowering businesses to thrive in the e-commerce landscape.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Serveses;
