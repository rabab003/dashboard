import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import TopBar from './Components/TobBar';
import SideBar from './Components/SideBar';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import { getDesignTokens } from './theme';
import { Mode } from '@mui/icons-material';


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
   
  const [ mode , setMode] = React.useState(localStorage.getItem("currentMode"));
  const theme = React.useMemo(()=> createTheme(getDesignTokens(mode)), [mode])

  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <TopBar open={open} handleDrawerOpen={handleDrawerOpen} setMode={setMode}/>
      <SideBar open={open} handleDrawerClose={handleDrawerClose}/>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography sx={{ marginBottom: 2 }}>
          Lorem ipsum
        </Typography>
      </Box>
    </Box>      
    </ThemeProvider>

  );
}



