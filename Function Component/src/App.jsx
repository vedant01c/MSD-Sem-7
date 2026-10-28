import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  ThemeProvider,
  createTheme,
  Box,
} from '@mui/material';

import profile from './assets/profile.jpg';
import styles from './App.module.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#8CC7C4',
    },
    secondary: {
      main: '#2C687B',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box className={styles.page}>
        {/* Navbar */}
        <AppBar position="static" color="primary">
          <Toolbar className={styles.toolbar}>
            <Typography variant="h6" className={styles.logo}>
              Resume
            </Typography>

            <Box className={styles.navLinks}>
              <Typography className={styles.navItem}>Home</Typography>
              <Typography className={styles.navItem}>About</Typography>
              <Typography className={styles.navItem}>Services</Typography>
              <Typography className={styles.navItem}>Contact</Typography>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Hero Section */}
        <Container maxWidth="lg" className={styles.container}>
          <Box className={styles.hero}>
            <Box className={styles.textSection}>
              <Typography variant="h3" className={styles.heading}>
                Hi, I am Snehal
              </Typography>

              <Typography variant="body1" className={styles.description}>
                Computer Science undergraduate with hands-on experience building
                full-stack MERN applications, designing REST APIs, and
                integrating AI services.
              </Typography>

              <Box className={styles.buttons}>
                <Button variant="contained" color="secondary">
                  Download CV
                </Button>

                <Button variant="outlined" color="secondary">
                  About Me
                </Button>
              </Box>
            </Box>

            <Box className={styles.imageWrapper}>
              <img src={profile} alt="Profile" className={styles.image} />
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;