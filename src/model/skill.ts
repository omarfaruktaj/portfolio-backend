import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Skill name is required'],
      trim: true,
      minlength: [2, 'Skill name must be at least 2 characters'],
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      enum: {
        values: ['Frontend', 'Backend', 'Database', 'Tools', 'Soft Skills'],
        message:
          'Category must be one of: Frontend, Backend, Database, Tools, Soft Skills',
      },
    },
    proficiency: {
      type: String,
      enum: ['Beginner', 'Intermediate', 'Advanced', 'Expert'],
      default: 'Intermediate',
      required: [true, 'Proficiency level is required'],
    },
  },
  { timestamps: true },
);

const Skill = mongoose.model('Skill', skillSchema);
export default Skill;
