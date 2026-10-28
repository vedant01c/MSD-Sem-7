import { Box, Container, Typography, Button } from "@mui/material";
import image from "../assets/cse_dep.jpg";

function Hero() {
  return (
    <Box
      sx={{
        minHeight: "85vh",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#f5f9fa",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 6,
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          {/* Left Content */}
          <Box
            sx={{
              flex: 1,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              variant="overline"
              sx={{
                color: "#2C687B",
                fontWeight: 700,
                letterSpacing: 2,
              }}
            >
              Department of
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                color: "primary",
                mb: 2,
                fontSize: { xs: "2.5rem", md: "4rem" },
              }}
            >
              Computer Science & Engineering
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: "secondary",
                lineHeight: 1.7,
                mb: 4,
                maxWidth: "600px",
              }}
            >
              Empowering students with knowledge, innovation, and
              technology to build the future of computing.
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: 2,
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "#2C687B",
                  px: 4,
                  py: 1.3,
                  borderRadius: 2,
                  "&:hover": {
                    backgroundColor: "#1F5263",
                  },
                }}
              >
                Explore Department
              </Button>

              <Button
                variant="outlined"
                size="large"
                sx={{
                  color: "#2C687B",
                  borderColor: "#2C687B",
                  px: 4,
                  py: 1.3,
                  borderRadius: 2,
                }}
              >
                Learn More
              </Button>
            </Box>
          </Box>

          {/* Right Image */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
  component="img"
  src={image}
  alt="Computer Science and Engineering Department"
  sx={{
    width: "100%",
    maxWidth: 550,
    height: "auto",
    display: "block",
    borderRadius: 4,
    boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
  }}
/>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Hero;