const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

// create fields/columns for Post model
const PostSchema = new Schema(
    {
      title: {
        type: String,
        required: true
      },
      calories: {
        type: Number,
        required: true
      },
      user_id: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
      }
    },
);

const Post = model('Post', PostSchema)

module.exports = Post;