import {
  AppBar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled, alpha } from '@mui/material/styles';
import { createSvgIcon } from '@mui/material/utils';
import LogoutIcon from '@mui/icons-material/Logout';
import React from "react";
import { Link } from "react-router-dom";
import InputBase from '@mui/material/InputBase';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import './NavBar.css'

const HomeIcon = createSvgIcon(
  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
  'Home',
);
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
function NavBar({image1,yes,image2,no,title}) {
  if(title==="ZK-TECO DEVICES")
  {
    no=true;
    yes=true;
  }
  if(title==="AMAZON DEVICES")
  {
    yes=false;
    no=false;
  }
  return (
    <AppBar position="static" className="nav">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon sx={{ fontSize: 30 }}/>
        </IconButton>
        
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
        {yes && <Link to="/devices/zkteco"><img src={image1} alt="" /></Link>}
        {no===false &&<Link to="/devices/amazon"><img src={image2} alt="" /></Link>}
        </Typography>
       
        <Stack direction="row" spacing={4} >
        <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          {yes && <Link to="/device"><Button color="inherit" sx={{ fontSize: 15 }} startIcon={<AddCircleIcon fontSize="inherit"/>}>Add-Device</Button></Link>}
          <Link to="/"><Button color="inherit" sx={{ fontSize: 15 }} startIcon={<HomeIcon fontSize="inherit"/>}>Home</Button></Link>
          <Button color="inherit" sx={{ fontSize: 15 }}>Features</Button>
          <Button color="inherit" sx={{ fontSize: 15 }}>About</Button>
          <Link to="/"><Button color="inherit" sx={{ fontSize: 15 }} endIcon={<LogoutIcon/>}>Logout</Button></Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
