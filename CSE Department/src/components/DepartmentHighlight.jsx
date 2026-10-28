import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
} from "@mui/material";

import SchoolIcon from "@mui/icons-material/School";
import ComputerIcon from "@mui/icons-material/Computer";
import GroupsIcon from "@mui/icons-material/Groups";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const highlights = [
  {
    icon: <SchoolIcon sx={{ fontSize: 40 }} />,
    title: "Quality Education",
    description:
      "A strong academic foundation with industry-oriented curriculum and modern teaching methodologies.",
  },
  {
    icon: <ComputerIcon sx={{ fontSize: 40 }} />,
    title: "Modern Infrastructure",
    description:
      "Well-equipped computer laboratories and technology-driven learning environments for students.",
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 40 }} />,
    title: "Expert Faculty",
    description:
      "Experienced faculty members dedicated to mentoring students and supporting their academic growth.",
  },
  {
    icon: <EmojiEventsIcon sx={{ fontSize: 40 }} />,
    title: "Innovation & Excellence",
    description:
      "Encouraging students to participate in projects, hackathons, research, and technical activities.",
  },
];

function DepartmentHighlights() {
  return (
    <Box
      sx={{
        py: 10,
        backgroundColor: "#ffffff",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Heading */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
  variant="overline"
  sx={{
    display: "inline-block",
    color: "primary.main",
    fontWeight: 700,
    letterSpacing: 2,
    borderBottom: "2px solid",
    borderColor: "secondary.main",
    pb: 1,
  }}
>
  Why Choose Us
</Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              color: "#163B4A",
              mt: 1,
              mb: 2,
            }}
          >
            Department Highlights
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#667A82",
              maxWidth: 650,
              mx: "auto",
              lineHeight: 1.7,
            }}
          >
            Building future-ready computer science professionals through
            quality education, innovation, and practical learning.
          </Typography>
        </Box>

        {/* Highlight Cards */}
        <Grid container spacing={3}>
          {highlights.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  textAlign: "center",
                  border: "1px solid #e5eeee",
                  borderRadius: 3,
                  transition: "all 0.3s ease",

                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 12px 30px rgba(44, 104, 123, 0.12)",
                    borderColor: "primary.main",
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  {/* Icon */}
                  <Box
                    sx={{
                      width: 70,
                      height: 70,
                      mx: "auto",
                      mb: 3,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "secondary.main",
                      color: "primary.main",
                    }}
                  >
                    {item.icon}
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: "#163B4A",
                      mb: 1.5,
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: "#667A82",
                      lineHeight: 1.7,
                    }}
                  >
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default DepartmentHighlights;