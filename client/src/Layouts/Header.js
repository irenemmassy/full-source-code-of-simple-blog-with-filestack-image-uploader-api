import React from "react";

function Header({ children, image, details }) {
  return (
    <>
      <div
        className={`rounded-xl relative overflow-hidden ${
          !details && "h-header"
        }`}
      >
        <img
          src={
            image
              ? details
                ? `https://cdn.filestackcontent.com/resize=w:900,h:250,fit:crop/${image}`
                : image
              : "https://via.placeholder.com/600x600.png"
          }
          alt="imageUploded"
          className="w-full"
        />
        <div className="absolutes bg-text bg-opacity-80"></div>
      </div>
      <div className="w-full relative flex-colo -top-48">
        <div className="container px-52 mx-auto">
          <div className="bg-white rounded-md shadow-md px-6 py-8">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
