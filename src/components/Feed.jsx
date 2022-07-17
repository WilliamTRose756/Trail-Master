import { Box } from "@mui/material";
import Post from "./Post";
function Feed() {
  return (
    <Box sx={{ backgroundColor: "yellow" }} p={2} flex={4}>
      Feed
      <Post />
    </Box>
  );
}

export default Feed;
