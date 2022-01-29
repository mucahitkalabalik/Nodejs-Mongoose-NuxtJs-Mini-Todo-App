import express from "express";
import mongoose from "mongoose";
import Post from "../db/posts.js";

const router = express.Router();

router.get("/posts", async (req, res) => {
  try {
    const allPosts = await Post.find();
    res.json(allPosts);
  } catch (error) {
    console.log(error);
  }
});
router.get("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
    if (!post) return;
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
  }
});
router.post("/posts", async (req, res) => {
  try {
    const post = req.body;
    const createdPost = await Post.create(post);
    res.status(201).json(createdPost);
  } catch (error) {
    console.log(error);
  }
});
router.put("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, creator } = req.body;
    //gelen id içeride kayıtlımı kontrolü //
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send("post bulunamadi");

    const updatedPost = { title, content, creator, _id: id };

    await Post.findByIdAndUpdate(id, updatedPost, {new:true});
    res.json({message:"post güncellendi"})

  } catch (error) {
    console.log(error);
  }
});
router.delete("/posts/:id", async (req, res) => {
  try {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("post bulunamadi");

    await Post.findByIdAndDelete(id)
    res.json({message:"post silindi"})

  } catch (error) {
    console.log(error);
  }
});

export default router;
