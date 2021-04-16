import express from 'express';
import {getPosts, getPost, createPost, updatePost, deletePost, likePost} from "../controllers/posts.js"

const router = express.Router();

// localhost:5000/posts
router.route('/').get(getPosts).post(createPost);
router.route('/:id').get(getPost).patch(updatePost).delete(deletePost);
router.route('/:id/likePost').patch(likePost);

export default router;