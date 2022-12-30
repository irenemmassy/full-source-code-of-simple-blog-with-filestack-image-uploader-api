import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { MongodbConnect } from "./MongoDbConnect.js";
import Blog from "./Model.js";

dotenv.config();
MongodbConnect();
const app = express();
app.use(express.json());
app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
const port = process.env.PORT || 5000;

// get all blogs
app.get("/", async (req, res) => {
  try {
    const blog = await Blog.find({}).sort({ _id: -1 });
    res.status(200).json(blog);
  } catch (error) {
    res.status(404).json({ msg: "Data error" });
  }
});

// get single blog
app.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    res.status(200).json(blog);
  } catch (error) {
    res.status(404).json({ msg: "Data error" });
  }
});

// post blog
app.post("/", async (req, res) => {
  try {
    const { image, title, desc, thumbnail, files } = req.body;
    const createBlog = {
      image,
      title,
      desc,
      thumbnail,
      files,
    };
    if (createBlog) {
      const newBlog = await Blog.create(createBlog);
      res.status(201).json(newBlog);
    }
  } catch (error) {
    res.status(404).json({ msg: "Data error" });
  }
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
