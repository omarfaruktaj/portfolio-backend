import { Request, Response } from 'express';
import Project from '../../model/project';

export const createProject = async (req: Request, res: Response) => {
  const data = req.body;

  const newProject = new Project(data);
  await newProject.save();

  res.status(201).json(newProject);
};

export const getAllProjects = async (req: Request, res: Response) => {
  const projects = await Project.find();
  res.status(200).json(projects);
};

export const getProjectById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const project = await Project.findById(id);
  if (!project) {
    res.status(404).json({ error: 'Project not found' });
    return;
  }
  res.status(200).json(project);
};

export const updateProjectById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const data = req.body;

  const updatedProject = await Project.findByIdAndUpdate(id, data, {
    new: true,
  });

  if (!updatedProject) {
    res.status(404).json({ error: 'Project not found' });
    return;
  }

  res.status(200).json(updatedProject);
};

export const deleteProjectById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const deletedProject = await Project.findByIdAndDelete(id);

  if (!deletedProject) {
    res.status(404).json({ error: 'Project not found' });
    return;
  }

  res.status(200).json({ message: 'Project deleted successfully' });
};
