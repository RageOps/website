import React from 'react';
import { Box, Typography, Card, CardContent, CardActions, Button, Grid, Chip, CardMedia } from '@mui/material';
import { GitHub, Launch, Visibility } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

const Projects: React.FC = () => {
  const navigate = useNavigate();
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'NC DHHS Senior Design Project',
      description: 'I worked alongside a team of my peers on a project for the NC Department of Health and Human Services to design and create a net new inventory management application.',
      longDescription: 'Detailed description of your first project.',
      technologies: ['React (Vite)', 'ASP.Net', 'MariaDB', 'Docker', 'Nginx'],
      imageUrl: '/project1.jpg',
    },
    {
      id: 2,
      title: 'Formula SAE Driver Information System',
      description: 'This Driver Information System (DIS) is an Arduino powered TFT display that displays important information to the drive of the Formula car during operation.',
      longDescription: 'Detailed description of your second project.',
      technologies: ['Arduino', 'PCB Design', 'C++', 'CAD'],
      imageUrl: '/project2.jpg',
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'My personal portfolio website built with React and Vite, showcasing my work and expertise.',
      longDescription: 'Detailed description of your third project.',
      technologies: ['React', 'Vite', 'Material UI'],
      githubUrl: 'https://github.com/RageOps/website',
      liveUrl: 'https://devanschneider.com',
      imageUrl: '/project3.jpg',
    },
  ];

  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', mb: 6 }}>
        My Projects
      </Typography>
      
      <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', justifyContent: 'center' }}>
        {projects.map((project) => (
          <Box key={project.id} sx={{ flex: '0 0 auto', width: { xs: '100%', sm: 'calc(50% - 12px)', md: 'calc(33.333% - 16px)' } }}>
            <Card 
              elevation={0}
              sx={{ 
                height: '100%',
                display: 'flex', 
                flexDirection: 'column',
                backgroundColor: 'white',
                borderRadius: 3,
                border: '1px solid',
                borderColor: 'grey.200',
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 3,
                  borderColor: 'grey.300',
                }
              }}
            >
              {/* Project Preview Image */}
              <CardMedia
                component="img"
                height="160"
                image={project.imageUrl}
                alt={project.title}
                sx={{
                  objectFit: 'cover',
                  borderRadius: 1,
                  border: '1px solid',
                  borderColor: 'grey.100',
                  mb: 2,
                }}
              />
              
              <CardContent sx={{ flexGrow: 1, p: 3, pb: 2 }}>
                <Typography 
                  variant="h6" 
                  component="h2" 
                  gutterBottom 
                  sx={{ 
                    fontWeight: 'bold',
                    color: 'grey.800',
                    fontSize: '1.25rem',
                    mb: 1
                  }}
                >
                  {project.title}
                </Typography>
                
                <Typography 
                  variant="body2" 
                  color="grey.700" 
                  sx={{
                    mb: 2,
                    lineHeight: 1.5
                  }}
                >
                  {project.description}
                </Typography>
                
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  {project.technologies.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      size="small"
                      sx={{
                        backgroundColor: 'grey.100',
                        color: 'primary.main',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        height: 24,
                        '& .MuiChip-label': {
                          px: 1,
                          py: 0.5
                        }
                      }}
                    />
                  ))}
                </Box>
              </CardContent>
              
              <CardActions sx={{ p: 3, pt: 0, mt: 'auto' }}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() => {
                    const routes = ['', 'nc-dhhs', 'formula-sae', 'portfolio'];
                    navigate(`/projects/${routes[project.id]}`);
                  }}
                  sx={{
                    py: 1.5,
                    fontWeight: 600,
                    borderRadius: 2,
                    textTransform: 'none',
                    fontSize: '0.875rem'
                  }}
                >
                  View Project
                </Button>
              </CardActions>
            </Card>
          </Box>
        ))}
      </Box>
      
      <Box sx={{ textAlign: 'center', mt: 6 }}>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Want to see more of my work?
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          href="https://github.com/RageOps"
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<GitHub />}
        >
          View All Projects on GitHub
        </Button>
      </Box>
    </Box>
  );
};

export default Projects;
