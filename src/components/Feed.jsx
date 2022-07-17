import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

import Post from "./Post";
function Feed() {
  return (
    <Box p={2} flex={4}>
      <Post />
      <Post />
    </Box>
  );
}

export default Feed;
