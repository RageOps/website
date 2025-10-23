import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Layout from './components/Layout';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NC_DHHS_Project from './pages/projects/NC_DHHS';
import Formula_SAE_DIS from './pages/projects/Formula_SAE_DIS';
import Portfolio_Website from './pages/projects/Portfolio_Website';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

// Component to handle page title changes
const PageTitleHandler: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const baseTitle = 'Devan Schneider';
    let pageTitle = baseTitle;

    switch (location.pathname) {
      case '/':
      case '/about':
        pageTitle = `${baseTitle} | About`;
        break;
      case '/projects':
        pageTitle = `${baseTitle} | Projects`;
        break;
      case '/contact':
        pageTitle = `${baseTitle} | Contact`;
        break;
      case '/projects/nc-dhhs':
        pageTitle = `${baseTitle} | NC DHHS Project`;
        break;
      case '/projects/formula-sae':
        pageTitle = `${baseTitle} | Formula SAE DIS`;
        break;
      case '/projects/portfolio':
        pageTitle = `${baseTitle} | Portfolio Website`;
        break;
      default:
        pageTitle = baseTitle;
    }

    document.title = pageTitle;
  }, [location.pathname]);

  return null;
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <PageTitleHandler />
        <Layout>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects/nc-dhhs" element={<NC_DHHS_Project />} />
            <Route path="/projects/formula-sae" element={<Formula_SAE_DIS />} />
            <Route path="/projects/portfolio" element={<Portfolio_Website />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
