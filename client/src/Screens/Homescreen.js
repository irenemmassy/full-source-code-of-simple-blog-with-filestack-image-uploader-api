import React, { useEffect, useState } from "react";
import Layout from "../Layouts/Layout";
import { Link } from "react-router-dom";
import BlogItem from "../components/BlogItem";
import { getPosts } from "../APIs";
import Loading from "../components/Loading";

function Homescreen() {
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);

  // get all blog post
  useEffect(() => {
    getPosts({
      loading: setLoading,
      blogs: setBlogs,
    });
  }, []);

  return (
    <Layout>
      {/* header */}
      <div className="flex-colo rounded-xl overflow-hidden relative">
        <img
          src="/images/main2.png"
          alt="imageUploded"
          className="w-full h-96 object-cover"
        />
        <div className="absolutes bg-text bg-opacity-80 flex-colo gap-6">
          <h1 className="text-4xl font-medium text-white">
            Best Marketplace For Coders
          </h1>
          <Link
            to="/blog/post"
            className="bg-main text-white font-light px-12 py-4 rounded-md"
          >
            Post Blog
          </Link>
        </div>
      </div>
      {/* blogs */}
      <div className="container mx-auto mt-16 lg:px-24">
        {loading ? (
          <Loading />
        ) : blogs?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs?.map((item) => (
              <BlogItem item={item} />
            ))}
          </div>
        ) : (
          <h1 className="text-2xl font-medium text-center">No Blogs Found</h1>
        )}
      </div>
    </Layout>
  );
}

export default Homescreen;
