import { z } from 'zod';

const projectSchema = z.object({
  title: z
    .string()
    .min(3, { message: 'Project title must be at least 3 characters long' }),
  description: z
    .string()
    .min(10, { message: 'Description must be at least 10 characters long' }),
  technologies: z
    .array(z.string())
    .nonempty({ message: 'At least one technology must be specified' }),
  link: z.string().url({ message: 'Project link must be a valid URL' }),
  image_url: z
    .string()
    .url()
    .optional()
    .default('https://example.com/default-project-image.jpg'),
  is_active: z.boolean().optional().default(true),
});

const articleSchema = z.object({
  title: z
    .string()
    .min(5, { message: 'Article title must be at least 5 characters long' }),
  content: z.string().min(20, {
    message: 'Article content must be at least 20 characters long',
  }),
  tags: z.array(
    z.enum([
      'JavaScript',
      'React',
      'Node.js',
      'Frontend',
      'Backend',
      'Full Stack',
    ]),
  ),
  author: z.string().uuid({ message: 'Author ID must be a valid UUID' }),
  is_published: z.boolean().optional().default(false),
  publication_date: z.date().optional().default(new Date()),
});

const testimonialSchema = z.object({
  client_name: z.string().min(1, { message: 'Client name is required' }),
  content: z.string().min(10, {
    message: 'Testimonial content must be at least 10 characters long',
  }),
  rating: z
    .number()
    .min(1, { message: 'Rating must be between 1 and 5' })
    .max(5, { message: 'Rating must be between 1 and 5' }),
  company: z.string().min(1, { message: 'Company name is required' }),
  is_active: z.boolean().optional().default(true),
});

const analyticsSchema = z.object({
  page: z.string().min(1, { message: 'Page name is required' }),
  views: z
    .number()
    .min(0, { message: 'Views must be a non-negative number' })
    .optional(),
  uniqueVisitors: z
    .number()
    .min(0, { message: 'Unique Visitors must be a non-negative number' })
    .optional(),
  totalClicks: z
    .number()
    .min(0, { message: 'Total Clicks must be a non-negative number' })
    .optional(),
  engagementRate: z
    .number()
    .min(0, { message: 'Engagement rate must be a non-negative number' })
    .optional(),
  formSubmissions: z
    .number()
    .min(0, { message: 'Form submissions must be a non-negative number' })
    .optional(),
});

const contactFormSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email format' }),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters long' }),
  phone: z.string().optional(),
  is_responded: z.boolean().optional().default(false),
  responded_at: z.date().optional(),
});

export {
  analyticsSchema,
  articleSchema,
  contactFormSchema,
  projectSchema,
  testimonialSchema,
};

export type Project = z.infer<typeof projectSchema>;
export type Article = z.infer<typeof articleSchema>;
export type Testimonial = z.infer<typeof testimonialSchema>;
export type Analytics = z.infer<typeof analyticsSchema>;
export type ContactFormSubmission = z.infer<typeof contactFormSchema>;
