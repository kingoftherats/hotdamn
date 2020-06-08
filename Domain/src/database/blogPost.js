import mongoose from 'mongoose';

/*
    An individual blog post schema

    TODO:...
*/
const blogPostSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    postDate: { type: Date, required: true },
    postAuthor: { type: String, required: true },
    postContent: {type: String, required: true }
});

const blogPostDbModel = mongoose.model("blogPost", blogPostSchema);

export default blogPostDbModel;