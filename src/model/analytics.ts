import mongoose from 'mongoose';

const analyticsSchema = new mongoose.Schema(
  {
    page: {
      type: String,
      required: true,
      trim: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    uniqueVisitors: {
      type: Number,
      default: 0,
    },
    totalClicks: {
      type: Number,
      default: 0,
    },
    engagementRate: {
      type: Number,
      default: 0,
    },
    formSubmissions: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);
const Analytics = mongoose.model('Analytics', analyticsSchema);

export default Analytics;
