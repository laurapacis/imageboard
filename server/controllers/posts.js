import mongoose from 'mongoose';
import PostMessage from "../models/PostMessage.js";

export const getPosts = async (req, res, next) => {
    try {
        const allPostMessages = await PostMessage.find();
        res.status(200).json(allPostMessages); // 200 = "OK"
    } catch (error) {
        next(res.status(404).json({ message: error.message })); // 404 => "Not Found"
    }
};

export const createPost = async (req, res, next) => {
    const post = req.body;
    
    try {
        const newPost = await PostMessage.create(post);
        console.log(newPost);
        res.status(201).json(newPost); // 201 = "Created"
    } catch (error) {
        next(res.status(404).json({ message: error.message }));
    }
};


export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with that ID");

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post, _id}, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with that ID");

    await PostMessage.findByIdAndRemove(id);

    res.json({message: 'Post successfully deleted'})
}

export const likePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with that ID");

    const post = await PostMessage.findById(id);
    const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });

    res.json(updatedPost);
}