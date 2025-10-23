import React from 'react';
import { Box, Typography, Card, CardContent, Chip, Grid } from '@mui/material';
import { Code, School, Work, LocationOn } from '@mui/icons-material';

const About: React.FC = () => {
  const skills = [
    'Java', 'JavaScript', 'TypeScript', 'Python', 'C++', 'C', 'SQL', 'Lua', 'CSS'
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Box
          component="img"
          src="/pfp.jpg"
          alt="Devan Schneider"
          sx={{
            width: 150,
            height: 150,
            mx: 'auto',
            mb: 3,
            borderRadius: '50%',
            objectFit: 'cover',
            border: '3px solid',
            borderColor: 'primary.main',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          }}
        />
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Devan Schneider
        </Typography>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          Java Developer & Software Engineer
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 600, mx: 'auto', mt: 2 }}>
          Passionate about creating innovative solutions and building meaningful software that makes a difference. Java Developer for Huntington National Bank.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* About Me Card */}
        <Grid xs={12} md={8}>
          <Card elevation={2}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
                About Me
              </Typography>
              <Typography variant="body1" paragraph>
                I'm a dedicated software engineer with a passion for solving complex problems through technology. 
                My journey in software development has led me to work on diverse projects ranging from web applications 
                to embedded systems.
              </Typography>
              <Typography variant="body1" paragraph>
                I believe in writing clean, maintainable code and staying up-to-date with the latest technologies. 
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge with the developer community.
              </Typography>
              <Typography variant="body1">
                I'm always excited to take on new challenges and collaborate with like-minded individuals to create 
                innovative solutions that have a positive impact.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Skills & Info Card */}
        <Grid xs={12} md={4}>
          <Card elevation={2} sx={{ mb: 3 }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Skills
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {skills.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    size="small"
                    color="primary"
                    variant="outlined"
                  />
                ))}
              </Box>
            </CardContent>
          </Card>

          <Card elevation={2}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Quick Info
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <LocationOn color="primary" />
                  <Typography variant="body2">Based in [Your Location]</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <School color="primary" />
                  <Typography variant="body2">[Your Education]</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Work color="primary" />
                  <Typography variant="body2">[Your Experience]</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Code color="primary" />
                  <Typography variant="body2">Full-Stack Developer</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
