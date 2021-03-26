import mongoose from 'mongoose';
const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    creator: {
        type: String,
        tags: [String]
    },
    selectedFile: {
        type: String
    },
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date(),
        default: new Date()
    }
}, {
    versionKey: false // keeps out the __v keys
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default = PostMessage;