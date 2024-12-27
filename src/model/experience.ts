import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema(
  {
    job_title: {
      type: String,
      required: [true, 'Job title is required'],
      trim: true,
    },
    company_name: {
      type: String,
      required: [true, 'Company name is required'],
      trim: true,
    },
    location: {
      type: String,
      trim: true,
    },
    start_date: {
      type: Date,
      required: [true, 'Start date is required'],
      validate: {
        validator: function (v: Date) {
          return v <= new Date();
        },
        message: 'Start date cannot be in the future',
      },
    },
    end_date: {
      type: Date,
      validate: {
        validator: function (v: Date) {
          return v ? v <= new Date() : true;
        },
        message: 'End date cannot be in the future',
      },
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      minlength: [10, 'Description must be at least 10 characters long'],
    },
    technologies: [
      {
        type: String,
        validate: {
          validator: function (v: string[]) {
            return v.length > 0;
          },
          message: 'At least one technology must be provided',
        },
      },
    ],
    is_active: {
      type: Boolean,
      default: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Author is required'],
    },
  },
  { timestamps: true },
);

const Experience = mongoose.model('Experience', experienceSchema);
export default Experience;
