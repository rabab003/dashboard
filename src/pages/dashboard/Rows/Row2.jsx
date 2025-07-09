import {
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import Line from "../../line/Line";
import { DownloadOutlined } from "@mui/icons-material";
import { transactions } from "../data";

export default function Row2() {
  const theme = useTheme();
  return (
    <>
      <Stack direction={"row"} flexWrap={"wrap"} gap={1} mt={3}>
        <Paper
          sx={{
            maxWidth: 900,
            minWidth: "460px",
            flexGrow: 1,
          }}
        >
          <Stack
            direction={"row"}
            flexWrap={"wrap"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box>
              <Typography
                color={theme.palette.secondary.main}
                mb={1}
                mt={2}
                ml={4}
                variant="h6"
              >
                revenue generated
              </Typography>
              <Typography variant="body2" ml={4}>
                64,654,546
              </Typography>
            </Box>

            <Box>
              <IconButton sx={{ mr: 3 }}>
                <DownloadOutlined />
              </IconButton>
            </Box>
          </Stack>

          <Line isDashboard={true} />
        </Paper>

        <Box
          sx={{
            overflow: "auto",
            width: 100,
            minWidth: 230,
            maxHeight: "380px",
            flexGrow: 1,
          }}
        >
          <Paper>
            <Typography
              color={theme.palette.secondary.main}
              fontWeight={"bold"}
              p={1.2}
              variant="h6"
            >
              recent transactions
            </Typography>
          </Paper>

          {transactions.map((item) => {
            return (
              <Paper
                sx={{
                  mt: 1,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  p: 1.4,
                }}
              >
                <Box>
                  <Typography variant="body2" fontWeight={"600"}>
                    {item.user}
                  </Typography>
                  <Typography variant="body2">{item.txId}</Typography>
                </Box>
                <Typography>{item.date}</Typography>
                <Typography
                  borderRadius={1.4}
                  p={1}
                  bgcolor={theme.palette.error.main}
                  color={theme.palette.getContrastText(
                    theme.palette.error.main
                  )}
                >
                  {item.cost}
                </Typography>
              </Paper>
            );
          })}
        </Box>
      </Stack>
    </>
  );
}
