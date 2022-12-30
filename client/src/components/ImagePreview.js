import React from "react";

function ImagePreview({ image, file }) {
  return (
    <div className="col-span-2 text-xs text-main italic p-2 h-28 flex-colo border border-gray-200 rounded-md">
      {file ? (
        <p>{`${image ? image?.length : 0} Files uploded`}</p>
      ) : (
        <img
          src={
            image ? image[0]?.url : "https://via.placeholder.com/150x150.png"
          }
          alt="images"
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
}

export default ImagePreview;
