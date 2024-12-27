import { Request, Response } from 'express';
import Analytics from '../../model/analytics';
import { analyticsSchema } from '../../schemas';

export const createOrUpdateAnalytics = async (req: Request, res: Response) => {
  const { page } = req.params;

  const validatedAnalytics = analyticsSchema.parse(req.body);

  let analytics = await Analytics.findOne({ page });

  if (analytics) {
    analytics.views += validatedAnalytics.views || 0;
    analytics.uniqueVisitors += validatedAnalytics.uniqueVisitors || 0;
    analytics.totalClicks += validatedAnalytics.totalClicks || 0;
    analytics.engagementRate =
      validatedAnalytics.engagementRate || analytics.engagementRate;
    analytics.formSubmissions += validatedAnalytics.formSubmissions || 0;
    await analytics.save();
    res.status(200).json(analytics);
  } else {
    analytics = new Analytics({
      ...validatedAnalytics,
    });
    await analytics.save();
    res.status(201).json(analytics);
  }
};

export const getAnalyticsByPage = async (req: Request, res: Response) => {
  const { page } = req.params;

  const analytics = await Analytics.findOne({ page });
  if (!analytics) {
    res.status(404).json({ error: 'Analytics data not found for this page' });
    return;
  }

  res.status(200).json(analytics);
};

export const getAllAnalytics = async (req: Request, res: Response) => {
  const analyticsData = await Analytics.find();
  res.status(200).json(analyticsData);
};

export const deleteAnalyticsByPage = async (req: Request, res: Response) => {
  const { page } = req.params;

  const deletedAnalytics = await Analytics.findOneAndDelete({ page });
  if (!deletedAnalytics) {
    res.status(404).json({ error: 'Analytics data not found for this page' });
    return;
  }

  res.status(200).json({ message: 'Analytics data deleted successfully' });
};
