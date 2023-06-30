import { v2 as cloudinary } from "cloudinary";
import express from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const router = express.Router();

const configuration = new Configuration({
  apiKey: process.env.API_KEY_OPENAI,
});
const openAI = new OpenAIApi(configuration);

router.get("/", (req, res) => {
  return res.send("Hello From DALL-E Route");
});

router.post("/", async (req, res) => {
  try {
    const { prompt } = req.body;
    const aiResponse = await openAI.createImage({
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });
    const image = aiResponse.data.data[0].b64_json;
    res.status(200).send({
      photo: image,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error?.response.data.error.message);
  }
});

export default router;
