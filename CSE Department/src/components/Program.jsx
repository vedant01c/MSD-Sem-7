import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CodeIcon from "@mui/icons-material/Code";
import ScienceIcon from "@mui/icons-material/Science";
import GroupsIcon from "@mui/icons-material/Groups";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

const offerings = [
  {
    icon: <CodeIcon />,
    title: "Technical Education",
    content:
      "Students receive strong foundations in programming, data structures, databases, operating systems, computer networks, and software engineering.",
  },
  {
    icon: <ScienceIcon />,
    title: "Research & Innovation",
    content:
      "The department encourages students to explore emerging technologies, conduct research, develop innovative solutions, and participate in technical competitions.",
  },
  {
    icon: <GroupsIcon />,
    title: "Industry Interaction",
    content:
      "Workshops, seminars, internships, guest lectures, and industry collaborations help students understand real-world technology and professional practices.",
  },
  {
    icon: <WorkspacePremiumIcon />,
    title: "Career Development",
    content:
      "Students are guided through technical training, projects, coding activities, and placement preparation to help them build successful careers.",
  },
];

function Programs() {
  return (
    <Box
      sx={{
        py: 10,
        backgroundColor: "#f5f9fa",
      }}
    >
      <Container maxWidth="md">

        {/* Heading */}
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
  What we Offer
</Typography>

          <Typography
            variant="h3"
            sx={{
              color: "#163B4A",
              fontWeight: 700,
              mt: 1,
              mb: 2,
            }}
          >
            Learning Beyond Classrooms
          </Typography>

          <Typography
            sx={{
              color: "#667A82",
              lineHeight: 1.8,
            }}
          >
            We provide students with opportunities to learn, experiment,
            collaborate, and grow beyond traditional academics.
          </Typography>
        </Box>

        {/* Accordion */}
        <Box>
          {offerings.map((item, index) => (
            <Accordion
              key={index}
              elevation={0}
              sx={{
                mb: 2,
                border: "1px solid #e1eaec",
                borderRadius: "12px !important",

                "&:before": {
                  display: "none",
                },

                "&:hover": {
                  borderColor: "primary.main",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  px: 3,
                  py: 1,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: 45,
                      height: 45,
                      borderRadius: 2,
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
                    sx={{
                      fontWeight: 600,
                      color: "#163B4A",
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              </AccordionSummary>

              <AccordionDetails sx={{ px: 3, pb: 3 }}>
                <Typography
                  sx={{
                    color: "#667A82",
                    lineHeight: 1.8,
                    pl: { xs: 0, sm: 7 },
                  }}
                >
                  {item.content}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Programs;