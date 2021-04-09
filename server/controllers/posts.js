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