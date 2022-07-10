import { Box } from "@mui/material";

function Sidebar() {
  return (
    <Box
      p={2}
      flex={1}
      sx={{ backgroundColor: "pink", display: { xs: "none", sm: "block" } }}
    >
      Sidebar
    </Box>
  );
}

export default Sidebar;
