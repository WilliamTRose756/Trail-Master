import { Box } from "@mui/material";

function Rightbar() {
  return (
    <Box
      sx={{ backgroundColor: "red", display: { xs: "none", sm: "block" } }}
      flex={2}
      p={2}
    >
      Latest Posts
    </Box>
  );
}

export default Rightbar;
