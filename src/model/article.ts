import mongoose from 'mongoose';

const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Article title is required'],
      trim: true,
      minlength: [5, 'Article title must be at least 5 characters long'],
    },
    content: {
      type: String,
      required: [true, 'Article content is required'],
      minlength: [20, 'Article content must be at least 20 characters long'],
    },
    tags: [
      {
        type: String,
        enum: [
          'JavaScript',
          'React',
          'Node.js',
          'Frontend',
          'Backend',
          'Full Stack',
        ],
        message:
          'Tag must be one of: JavaScript, React, Node.js, Frontend, Backend, Full Stack',
      },
    ],
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Author is required'],
    },
    is_published: {
      type: Boolean,
      default: false,
    },
    publication_date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true },
);

const Article = mongoose.model('Article', articleSchema);

export default Article;
