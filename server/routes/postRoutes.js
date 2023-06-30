import { v2 as cloudinary } from "cloudinary";
import Post from "../models/postModel.js";
import express from "express";
import * as dotenv from "dotenv";

dotenv.config();

const router = express.Router();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//GET ALL POSTS
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).send({ success: true, data: posts });
  } catch (error) {
    res.status(500).send({ success: false, message: error });
    console.log(error);
  }
});

//CREATE NEW POST
router.post("/", async (req, res) => {
  try {
    const { prompt, photo } = req.body;
    let { name } = req.body;
    if (name.length === 0) {
      name = "Anonymous";
    }
    const photoUrl = await cloudinary.uploader.upload(photo);
    const newPost = await Post.create({
      name,
      prompt,
      photo: photoUrl.url,
    });
    res.status(201).send({ success: true, data: newPost });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: error });
  }
});

export default router;
