import React, { useState } from "react";
import Header from "../Layouts/Header";
import Layout from "../Layouts/Layout";
import { IoMdCloudUpload } from "react-icons/io";
import Uploader from "../components/Uploader";
import ImagePreview from "../components/ImagePreview";
import { postBlog } from "../APIs";

function BlogPost() {
  const [image, setImage] = useState();
  const [thumbnail, setThumbnail] = useState();
  const [files, setFiles] = useState();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image || !thumbnail || !files || !title || !desc) {
      alert("Please fill all the fields");
    } else if (title?.length > 100) {
      alert("Title should be atleast 50 characters less");
    } else if (desc?.length > 1500) {
      alert("Description should be atleast 500 characters less");
    } else {
      await postBlog({
        datas: {
          image: image[0]?.handle,
          thumbnail: thumbnail[0]?.handle,
          files: files?.length > 0 ? files?.map((file) => file.handle) : [],
          title: title,
          desc: desc,
        },
        loading: setLoading,
      }).then(() => {
        alert("Blog posted successfully");
        setDesc("");
        setTitle("");
        setImage();
        setThumbnail();
        setFiles();
      });
    }
  };

  return (
    <Layout>
      <Header image="/images/main.png" details={false}>
        <div className="flex flex-col gap-8">
          {/* title */}
          <div className="flex flex-col gap-4">
            <label htmlFor="title">Blog Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              className="bg-subMain text-main border rounded-md px-3 py-5 border-gray-200"
            />
          </div>
          {/* desc */}
          <div className="flex flex-col gap-4">
            <label htmlFor="title">Blog Description</label>
            <textarea
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              rows={10}
              className="bg-subMain text-main border rounded-md px-3 py-5 border-gray-200"
            />
          </div>
          {/* blog image */}
          <div className="flex flex-col gap-4">
            <p>Blog Image</p>
            <div className="grid grid-cols-12 gap-6 items-center justify-center">
              <Uploader setFile={setImage} />
              <ImagePreview image={image} file={false} />
            </div>
          </div>
          {/* blog thumbnail */}
          <div className="flex flex-col gap-4">
            <p>Blog Thumbnail</p>
            <div className="grid grid-cols-12 gap-6 items-center justify-center">
              <Uploader setFile={setThumbnail} />
              <ImagePreview image={thumbnail} file={false} />
            </div>
          </div>
          {/* blog files */}
          <div className="flex flex-col gap-4">
            <p>Blog Files</p>
            <div className="grid grid-cols-12 gap-6 items-center justify-center">
              <Uploader setFile={setFiles} />
              <ImagePreview image={files} file={true} />
            </div>
          </div>
          <div className="flex-colo">
            <button
              disabled={loading}
              onClick={handleSubmit}
              className="py-6 px-16 flex text-xl text-white font-light items-center justify-center gap-6 bg-main border border-gray-300 rounded-md"
            >
              <IoMdCloudUpload /> {loading ? "Uploading..." : "Publish Now"}
            </button>
          </div>
        </div>
      </Header>
    </Layout>
  );
}

export default BlogPost;
