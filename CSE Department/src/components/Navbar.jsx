import {
  AppBar,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";
import logo from "../assets/DYPCET.avif";

import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar className={styles.toolbar}>
        <Box
  component="img"
  src={logo}
  alt="D. Y. Patil College of Engineering & Technology"
  sx={{
    height: 75,
    width: "auto",
    display: "block",
    filter: "brightness(0) invert(1)",
  }}
/>

        <Box className={styles.navLinks}>
          <Typography className={styles.navItem}>Home</Typography>
          <Typography className={styles.navItem}>About</Typography>
          <Typography className={styles.navItem}>Faculty</Typography>
          <Typography className={styles.navItem}>Courses</Typography>
          <Typography className={styles.navItem}>Contact</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;