import React from 'react';
import { Box, Typography, Card, CardContent, CardActions, Button, IconButton } from '@mui/material';
import { 
  LinkedIn, 
  GitHub, 
  YouTube, 
  Email,
  Instagram
} from '@mui/icons-material';

const Contact: React.FC = () => {
  const contactMethods = [
    {
      icon: <Email />,
      title: 'Email',
      value: 'dschneid098@gmail.com',
      action: 'mailto:dschneid098@gmail.com',
      color: 'primary' as const,
    },
    {
      icon: <LinkedIn />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/devan-schneider',
      action: 'https://www.linkedin.com/in/devan-schneider/',
      color: 'primary' as const,
    },
    {
      icon: <GitHub />,
      title: 'GitHub',
      value: 'github.com/RageOps',
      action: 'https://github.com/RageOps',
      color: 'primary' as const,
    },
    {
      icon: <YouTube />,
      title: 'YouTube',
      value: 'youtube.com/@rageops',
      action: 'https://youtube.com/@rageops',
      color: 'error' as const,
    },
    {
      icon: <Instagram />,
      title: 'Instagram',
      value: 'instagram.com/devan_schneider',
      action: 'https://instagram.com/devan_schneider',
      color: 'secondary' as const,
    },
  ];

  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', mb: 6 }}>
        Get In Touch
      </Typography>
      
      <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', justifyContent: 'center' }}>
        {contactMethods.map((method, index) => (
          <Box key={index} sx={{ flex: '0 0 auto', width: { xs: '100%', sm: 'calc(50% - 12px)', md: 'calc(33.333% - 16px)', lg: 'calc(20% - 16px)' } }}>
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
              <CardContent sx={{ flexGrow: 1, p: 3, textAlign: 'center' }}>
                <Box sx={{ mb: 2 }}>
                  <IconButton 
                    color={method.color} 
                    sx={{ fontSize: '2.5rem' }}
                  >
                    {method.icon}
                  </IconButton>
                </Box>
                
                <Typography 
                  variant="h6" 
                  component="h2" 
                  gutterBottom 
                  sx={{ 
                    fontWeight: 800,
                    color: 'grey.900',
                    fontSize: '1.25rem',
                    mb: 1
                  }}
                >
                  {method.title}
                </Typography>
                
                <Typography 
                  variant="body2" 
                  color="grey.700" 
                  sx={{
                    mb: 2,
                    lineHeight: 1.5,
                    fontWeight: 600,
                    color: 'grey.800'
                  }}
                >
                  {method.value}
                </Typography>
              </CardContent>
              
              <CardActions sx={{ p: 3, pt: 0, mt: 'auto' }}>
                <Button
                  variant="outlined"
                  color={method.color}
                  fullWidth
                  href={method.action}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    fontWeight: 700,
                    borderWidth: 2,
                    '&:hover': {
                      borderWidth: 2,
                    }
                  }}
                >
                  Connect
                </Button>
              </CardActions>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Contact;
