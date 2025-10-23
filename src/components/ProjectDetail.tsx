import React from 'react';
import { Box, Typography, Card, CardContent, Button, Grid, Chip, CardMedia, Divider } from '@mui/material';
import { GitHub, Launch, ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

interface ProjectDetailProps {
  project: {
    id: number;
    title: string;
    description: string;
    longDescription: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    imageUrl?: string;
    features?: string[];
    challenges?: string[];
    results?: string[];
  };
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  const navigate = useNavigate();

  return (
    <Box>
      {/* Back Button */}
      <Button
        startIcon={<ArrowBack />}
        onClick={() => navigate('/projects')}
        sx={{ mb: 4 }}
      >
        Back to Projects
      </Button>

      {/* Project Header */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          {project.title}
        </Typography>
        
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto', mb: 4 }}>
          {project.description}
        </Typography>

        {/* Project Image */}
        {project.imageUrl && (
          <CardMedia
            component="img"
            height="400"
            image={project.imageUrl}
            alt={project.title}
            sx={{
              borderRadius: 2,
              boxShadow: 3,
              mb: 4,
            }}
          />
        )}

        {/* Action Buttons */}
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mb: 4 }}>
          {project.githubUrl && (
            <Button
              startIcon={<GitHub />}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              color="primary"
              size="large"
            >
              View Code
            </Button>
          )}
          {project.liveUrl && (
            <Button
              startIcon={<Launch />}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              color="primary"
              size="large"
            >
              Live Demo
            </Button>
          )}
        </Box>
      </Box>

      <Grid container spacing={4}>
        {/* Main Content */}
        <Grid xs={12} md={8}>
          <Card elevation={2}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
                Project Overview
              </Typography>
              
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
                {project.longDescription}
              </Typography>

              {project.features && (
                <>
                  <Divider sx={{ my: 3 }} />
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
                    Key Features
                  </Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    {project.features.map((feature, index) => (
                      <Typography component="li" key={index} variant="body1" sx={{ mb: 1 }}>
                        {feature}
                      </Typography>
                    ))}
                  </Box>
                </>
              )}

              {project.challenges && (
                <>
                  <Divider sx={{ my: 3 }} />
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
                    Challenges & Solutions
                  </Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    {project.challenges.map((challenge, index) => (
                      <Typography component="li" key={index} variant="body1" sx={{ mb: 1 }}>
                        {challenge}
                      </Typography>
                    ))}
                  </Box>
                </>
              )}

              {project.results && (
                <>
                  <Divider sx={{ my: 3 }} />
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
                    Results & Impact
                  </Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    {project.results.map((result, index) => (
                      <Typography component="li" key={index} variant="body1" sx={{ mb: 1 }}>
                        {result}
                      </Typography>
                    ))}
                  </Box>
                </>
              )}
            </CardContent>
          </Card>
        </Grid>

        {/* Sidebar */}
        <Grid xs={12} md={4}>
          <Card elevation={2}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
                Technologies Used
              </Typography>
              
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                {project.technologies.map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    color="primary"
                    variant="outlined"
                    sx={{ mb: 1 }}
                  />
                ))}
              </Box>

              <Divider sx={{ my: 3 }} />

              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
                Project Details
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Project Type
                  </Typography>
                  <Typography variant="body1">
                    {project.id === 1 ? 'Senior Design Project' : 
                     project.id === 2 ? 'Hardware/Software Integration' : 
                     'Software Development'}
                  </Typography>
                </Box>
                
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Duration
                  </Typography>
                  <Typography variant="body1">
                    {project.id === 1 ? '8 months' : 
                     project.id === 2 ? '6 months' : 
                     '4 months'}
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Team Size
                  </Typography>
                  <Typography variant="body1">
                    {project.id === 1 ? '4 members' : 
                     project.id === 2 ? 'Solo project' : 
                     '2 members'}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectDetail;
