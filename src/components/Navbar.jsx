import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  styled,
  InputBase,
} from "@mui/material";
import ForestIcon from "@mui/icons-material/Forest";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: " 0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
}));

function Navbar() {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Trail Master
        </Typography>
        <ForestIcon sx={{ display: { xs: "block", sm: "none" } }}></ForestIcon>
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <Icons>Icons</Icons>
      </StyledToolbar>
    </AppBar>
  );
}

export default Navbar;
