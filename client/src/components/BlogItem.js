import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

function BlogItem({ item }) {
  return (
    <Link
      to={`/blog/${item?._id}`}
      key={item?.id}
      className="p-4 bg-white rounded-md shadow-md"
    >
      <img
        src={`https://cdn.filestackcontent.com/resize=w:800,h:500,fit:crop/${item?.image}`}
        alt="imageUploded"
        className="w-full object-cover h-auto rounded-md"
      />
      <div className="flex flex-col gap-2 mt-6 px-4">
        <h1 className="text-xl font-medium">
          {" "}
          {item?.title.substring(0, 35) + "..."}
        </h1>
        <span className="text-main italic text-sm">
          Posted: {moment(item?.createdAt).format("LL")}
        </span>
        <p className="text-gray-400 font-light">
          {item?.desc.substring(0, 150) + "..."}
        </p>
      </div>
    </Link>
  );
}

export default BlogItem;
