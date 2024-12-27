import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema(
  {
    client_name: {
      type: String,
      required: [true, 'Client name is required'],
      trim: true,
    },
    content: {
      type: String,
      required: [true, 'Testimonial content is required'],
      minlength: [
        10,
        'Testimonial content must be at least 10 characters long',
      ],
    },
    rating: {
      type: Number,
      required: [true, 'Rating is required'],
      min: [1, 'Rating must be between 1 and 5'],
      max: [5, 'Rating must be between 1 and 5'],
    },
    company: {
      type: String,
      required: [true, 'Company name is required'],
      trim: true,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);
const Testimonial = mongoose.model('Testimonial', testimonialSchema);

export default Testimonial;
