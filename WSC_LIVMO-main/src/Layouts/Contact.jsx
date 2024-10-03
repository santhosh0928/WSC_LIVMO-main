import React from "react";
import Button from "./Button";

const PackagePlandetails = ({ closeForm }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="popup-form absolute mt-12 text-black">
        <form className="w-80 md:w-96 space-y-5 bg-white p-5 rounded-xl">
          <h1 className="text-4xl font-semibold text-center text-backgroundColor">Book Now</h1>
          <h2 className="text-2xl font-bold">My Plan Package</h2>
          <ul>
            <li className="flex flex-row gap-2">
              <i className="fas fa-clock"></i>
              <span>24/7 Healthcare Assistant</span>
            </li>
            <li className="flex flex-row gap-2">
              <i className="fas fa-house-user"></i>
              <span>One Home Visit by Field Executive</span>
            </li>
            <li className="flex flex-row gap-2">
              <i className="fas fa-vials"></i>
              <span>Lab Investigations:</span>
              <ul className="ml-4">
                <li>Complete Blood Count</li>
                <li>Urine Routine</li>
                <li>TSH</li>
                <li>HBA1C</li>
              </ul>
            </li>
            <li className="flex flex-row gap-2">
              <i className="fas fa-video"></i>
              <span>One Zoom Session with General Consultant (max 20 mins)</span>
            </li>
          </ul>
          <div className="flex gap-5">
            <Button title="Order Now" />
            <button 
              className="bg-backgroundColor text-white px-10 rounded-md active:bg-red-500"
              onClick={closeForm}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PackagePlandetails;
