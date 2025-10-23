import React from 'react';
import ProjectDetail from '../../components/ProjectDetail';

const Portfolio_Website: React.FC = () => {
  const project = {
    id: 3,
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with React and Material-UI to showcase my projects and professional experience.',
    longDescription: 'This portfolio website serves as my digital business card and professional showcase. Built with modern web technologies, it features a clean, responsive design that works seamlessly across all devices. The site includes detailed project showcases, professional information, and contact methods, all wrapped in a user-friendly interface that reflects my technical skills and attention to detail.',
    technologies: ['React', 'TypeScript', 'Material-UI', 'Vite', 'React Router'],
    imageUrl: '/project3.jpg',
    features: [
      'Responsive design that works on all devices',
      'Dynamic page titles for better SEO',
      'Interactive project showcases with detailed views',
      'Professional contact information and social links',
      'Modern Material-UI design system',
      'Fast loading with Vite build optimization',
      'TypeScript for type safety and better development experience'
    ],
    challenges: [
      'Creating a design that stands out while remaining professional',
      'Implementing smooth navigation and routing',
      'Optimizing for fast loading times and good SEO',
      'Ensuring accessibility across different devices and browsers',
      'Balancing visual appeal with functionality',
      'Integrating multiple technologies seamlessly'
    ],
    results: [
      'Successfully created a professional online presence',
      'Improved visibility to potential employers and clients',
      'Demonstrated technical skills through the website itself',
      'Received positive feedback on design and functionality',
      'Achieved fast loading times and excellent user experience',
      'Serves as an effective tool for networking and job applications'
    ]
  };

  return <ProjectDetail project={project} />;
};

export default Portfolio_Website;
