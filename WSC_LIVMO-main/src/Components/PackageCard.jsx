import React from "react";

const PackageCard = ({ price, title, description, buttonText, isFree }) => {
  return (
    <div className="flex flex-col items-center text-center gap-2 w-full lg:w-1/3 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg cursor-pointer lg:hover:-translate-y-6 transition duration-300 ease-in-out">
      <h1 className={`text-4xl font-bold ${isFree ? "text-green-600" : "text-yellow-600"}`}>{title}</h1>
      <h2 className="text-xl font-semibold">{price}</h2>
      <ul className="text-left mt-4">
        {description.map((item, index) => (
          <li key={index} className="text-sm text-gray-700 mb-2 flex items-center">
            <span className={`${item.included ? 'text-green-500' : 'text-red-500'} mr-2`}>
              {item.included ? '✔' : '✖'}
            </span>
            {item.text}
          </li>
        ))}
      </ul>
      <button
        className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
        style={{ marginTop: '20px' }}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default PackageCard;
