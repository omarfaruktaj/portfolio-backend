import { Request, Response } from 'express';
import Article from '../../model/article';

export const createArticle = async (req: Request, res: Response) => {
  const data = req.body;

  const newArticle = new Article(data);
  await newArticle.save();

  res.status(201).json(newArticle);
};

export const getAllArticles = async (req: Request, res: Response) => {
  const articles = await Article.find();
  res.status(200).json(articles);
};

export const getArticleById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const article = await Article.findById(id);
  if (!article) {
    res.status(404).json({ error: 'Article not found' });
    return;
  }

  res.status(200).json(article);
};

export const updateArticleById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const data = req.body;

  const updatedArticle = await Article.findByIdAndUpdate(id, data, {
    new: true,
  });

  if (!updatedArticle) {
    res.status(404).json({ error: 'Article not found' });
    return;
  }

  res.status(200).json(updatedArticle);
};

export const deleteArticleById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const deletedArticle = await Article.findByIdAndDelete(id);

  if (!deletedArticle) {
    res.status(404).json({ error: 'Article not found' });
    return;
  }

  res.status(200).json({ message: 'Article deleted successfully' });
};
