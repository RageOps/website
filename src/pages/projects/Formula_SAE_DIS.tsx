import React from 'react';
import ProjectDetail from '../../components/ProjectDetail';

const Formula_SAE_DIS: React.FC = () => {
  const project = {
    id: 2,
    title: 'Formula SAE Driver Information System',
    description: 'This Driver Information System (DIS) is an Arduino powered TFT display that displays important information to the driver of the Formula car during operation.',
    longDescription: 'The Formula SAE Driver Information System is a custom-built display unit designed specifically for our Formula SAE race car. The system provides real-time telemetry data to the driver during competition, including engine RPM, vehicle speed, oil temperature, water temperature, and lap times. The system features a custom-designed PCB, Arduino-based microcontroller, and a high-brightness TFT display that remains visible in various lighting conditions.',
    technologies: ['Arduino', 'C++', 'TFT Display', 'PCB Design', 'CAN Bus', 'Telemetry'],
    imageUrl: '/project2.jpg',
    features: [
      'Real-time engine RPM and vehicle speed display',
      'Temperature monitoring for oil and coolant systems',
      'Lap time tracking and sector analysis',
      'High-brightness TFT display for visibility in all conditions',
      'Custom PCB design for compact integration',
      'CAN Bus communication with vehicle ECU',
      'Waterproof housing for outdoor racing conditions'
    ],
    challenges: [
      'Designing a compact system that fits within Formula SAE regulations',
      'Ensuring reliable operation in high-vibration racing environment',
      'Creating a display interface readable at high speeds',
      'Implementing robust CAN Bus communication protocols',
      'Designing waterproof housing for outdoor racing conditions',
      'Optimizing power consumption for extended race sessions'
    ],
    results: [
      'Successfully integrated into Formula SAE race car',
      'Improved driver awareness and performance during competition',
      'Reduced driver workload by providing critical data at a glance',
      'System performed reliably throughout entire racing season',
      'Received recognition from Formula SAE judges for innovation',
      'Contributed to overall team success in competition'
    ]
  };

  return <ProjectDetail project={project} />;
};

export default Formula_SAE_DIS;
