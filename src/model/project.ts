import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Project title is required'],
      trim: true,
      minlength: [3, 'Project title must be at least 3 characters long'],
    },
    description: {
      type: String,
      required: [true, 'Project description is required'],
      minlength: [10, 'Description must be at least 10 characters long'],
    },
    technologies: [
      {
        type: String,
        required: [true, 'Technologies used must be specified'],
      },
    ],
    link: {
      type: String,
      required: [true, 'Project link is required'],
      validate: {
        validator: function (v: string) {
          return /^(ftp|http|https):\/\/[^ "]+$/.test(v);
        },
        message: 'Project link must be a valid URL',
      },
    },
    image_url: {
      type: String,
      default: 'https://example.com/default-project-image.jpg',
    },
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);
const Project = mongoose.model('Project', projectSchema);

export default Project;
