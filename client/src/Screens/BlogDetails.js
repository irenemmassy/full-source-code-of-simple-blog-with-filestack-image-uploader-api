import React, { useEffect, useState } from "react";
import Header from "../Layouts/Header";
import Layout from "../Layouts/Layout";
import { BsFileEarmarkZipFill } from "react-icons/bs";
import { IoMdCloudDownload } from "react-icons/io";
import { useParams } from "react-router-dom";
import { getSinglePost } from "../APIs";
import Loading from "../components/Loading";
import moment from "moment";

function BlogDetails() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [blog, setBlog] = useState();

  // get single blog post
  useEffect(() => {
    if (id) {
      getSinglePost({
        id: id,
        loading: setLoading,
        blog: setBlog,
      });
    }
  }, [id]);

  const downloadFiles = () => {
    window.open(
      `https://cdn.filestackcontent.com/${process.env.REACT_APP_FILESTACK_API_KEY}/zip/content=f:"sourceCode.zip"/[${blog?.files}]`
    );
  };

  return (
    <Layout>
      {blog ? (
        loading ? (
          <Loading />
        ) : (
          <Header image={blog?.thumbnail} details={true}>
            <div className="flex flex-col gap-6">
              <img
                className="w-full object-cover"
                src={
                  blog
                    ? `https://cdn.filestackcontent.com/resize=w:900,h:500,fit:crop/rounded_corners=radius:6/${blog?.image}`
                    : "https://via.placeholder.com/1000x500.png"
                }
                alt="images"
              />
              <h1 className="text-3xl font-medium mt-4">{blog?.title}</h1>
              <span className="text-main italic text-sm">
                Posted: {moment(blog?.createdAt).format("LL")}
              </span>
              <p className="text-gray-400 font-light leading-8 text-lg">
                {blog?.desc}
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="p-2 flex-rows gap-6 bg-subMain border border-green-200 rounded-md">
                  <div className="flex-colo bg-main w-24 rounded h-16">
                    <BsFileEarmarkZipFill className="text-3xl text-white" />
                  </div>
                  <p className="text-lg font-light">Download All source code</p>
                </div>
                <button
                  onClick={downloadFiles}
                  className="p-2 flex text-xl text-white font-light items-center justify-center gap-6 bg-main border border-gray-300 rounded-md"
                >
                  <IoMdCloudDownload /> Download All
                </button>
              </div>
            </div>
          </Header>
        )
      ) : (
        <Loading />
      )}
    </Layout>
  );
}

export default BlogDetails;
