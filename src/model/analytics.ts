import mongoose from 'mongoose';

const analyticsSchema = new mongoose.Schema(
  {
    page_name: {
      type: String,
      required: [true, 'Page name is required'],
      trim: true,
    },
    views: {
      type: Number,
      required: [true, 'Number of views is required'],
      default: 0,
    },
    interactions: {
      type: Number,
      required: [true, 'Number of interactions is required'],
      default: 0,
    },
    last_updated: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true },
);
const Analytics = mongoose.model('Analytics', analyticsSchema);

export default Analytics;
