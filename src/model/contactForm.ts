import mongoose from 'mongoose';

const contactFormSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      validate: {
        validator: function (v) {
          return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(v);
        },
        message: 'Invalid email format',
      },
    },
    message: {
      type: String,
      required: [true, 'Message is required'],
      minlength: [10, 'Message must be at least 10 characters long'],
    },
    is_responded: {
      type: Boolean,
      default: false,
    },
    responded_at: {
      type: Date,
    },
  },
  { timestamps: true },
);

const ContactForm = mongoose.model('ContactFormSubmission', contactFormSchema);
export default ContactForm;
