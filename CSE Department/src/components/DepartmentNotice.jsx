import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider,
} from "@mui/material";

import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

function DepartmentNotice() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Notice Section */}
      <Box
        sx={{
          py: 8,
          backgroundColor: "#2C687B",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 4,
              flexDirection: { xs: "column", md: "row" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {/* Left */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 3,
              }}
            >
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "secondary.main",
                  color: "primary.main",
                  flexShrink: 0,
                }}
              >
                <NotificationsActiveIcon />
              </Box>

              <Box>
                <Typography
                  variant="overline"
                  sx={{
                    color: "secondary.main",
                    fontWeight: 700,
                    letterSpacing: 2,
                  }}
                >
                  Important Notice
                </Typography>

                <Typography
                  variant="h5"
                  sx={{
                    color: "#fff",
                    fontWeight: 700,
                  }}
                >
                  Department Activities & Announcements
                </Typography>

                <Typography
                  sx={{
                    color: "#d8e8eb",
                    mt: 1,
                  }}
                >
                  Stay updated with the latest department information.
                </Typography>
              </Box>
            </Box>

            {/* Button */}
            <Button
              variant="contained"
              onClick={handleOpen}
              sx={{
                backgroundColor: "secondary.main",
                color: "#163B4A",
                px: 4,
                py: 1.2,
                borderRadius: 2,
                fontWeight: 700,
                whiteSpace: "nowrap",

                "&:hover": {
                  backgroundColor: "#a3d8d5",
                },
              }}
            >
              View Notice
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle
          sx={{
            color: "#163B4A",
            fontWeight: 700,
          }}
        >
          Department Announcement
        </DialogTitle>

        <Divider />

        <DialogContent sx={{ py: 3 }}>
          <Typography
            variant="h6"
            sx={{
              color: "#163B4A",
              fontWeight: 600,
              mb: 2,
            }}
          >
            Upcoming Technical Activities
          </Typography>

          <Typography
            sx={{
              color: "#667A82",
              lineHeight: 1.8,
              mb: 3,
            }}
          >
            The Computer Science and Engineering Department is organizing
            various technical activities, workshops, and student development
            programs throughout the academic year.
          </Typography>

          <Typography
            sx={{
              color: "#667A82",
              lineHeight: 1.8,
            }}
          >
            Students are encouraged to participate actively and take
            advantage of these opportunities to enhance their technical
            knowledge and practical skills.
          </Typography>
        </DialogContent>

        <DialogActions sx={{ px: 3, pb: 3 }}>
          <Button
            onClick={handleClose}
            variant="contained"
            color="primary"
            sx={{
              borderRadius: 2,
              px: 3,
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default DepartmentNotice;