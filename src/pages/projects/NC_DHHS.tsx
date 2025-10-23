import React from 'react';
import ProjectDetail from '../../components/ProjectDetail';

const NC_DHHS_Project: React.FC = () => {
  const project = {
    id: 1,
    title: 'NC DHHS Senior Design Project',
    description: 'I worked alongside a team of my peers on a project for the NC Department of Health and Human Services to design and create a net new inventory management application.',
    longDescription: 'This comprehensive inventory management system was developed for the North Carolina Department of Health and Human Services as part of our senior design capstone project. The application streamlines the process of tracking medical supplies, equipment, and resources across multiple healthcare facilities. The system features real-time inventory tracking, automated reorder notifications, and comprehensive reporting capabilities to ensure healthcare providers have the necessary supplies when needed.',
    technologies: ['React (Vite)', 'ASP.Net', 'MariaDB', 'Docker', 'Nginx'],
    imageUrl: '/project1.jpg',
    features: [
      'Real-time inventory tracking across multiple locations',
      'Automated low-stock alerts and reorder notifications',
      'Comprehensive reporting dashboard with data visualization',
      'User role management with different access levels',
      'Mobile-responsive design for on-the-go access',
      'Integration with existing DHHS systems'
    ],
    challenges: [
      'Integrating with legacy DHHS systems while maintaining security protocols',
      'Designing a scalable architecture to handle multiple healthcare facilities',
      'Ensuring HIPAA compliance for all data handling and storage',
      'Creating an intuitive interface for healthcare workers with varying technical skills',
      'Implementing real-time updates without impacting system performance'
    ],
    results: [
      'Successfully delivered a fully functional inventory management system',
      'Reduced manual inventory tracking time by 60%',
      'Improved supply chain visibility across all DHHS facilities',
      'Received positive feedback from DHHS stakeholders and end users',
      'System is currently being evaluated for broader implementation'
    ]
  };

  return <ProjectDetail project={project} />;
};

export default NC_DHHS_Project;
