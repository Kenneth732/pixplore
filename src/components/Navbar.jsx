import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  Badge, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText 
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DiamondIcon from '@mui/icons-material/Diamond';
import EastIcon from '@mui/icons-material/East';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { styled, alpha } from '@mui/material/styles';

const GoldButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(135deg, #FFD700 0%, #D4AF37 100%)',
  color: theme.palette.getContrastText('#FFD700'),
  padding: '10px 24px',
  borderRadius: '50px',
  fontWeight: 600,
  boxShadow: '0 4px 15px rgba(255, 215, 0, 0.3)',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 20px rgba(255, 215, 0, 0.4)',
    background: 'linear-gradient(135deg, #FFD700 0%, #D4AF37 100%)',
  },
  transition: 'all 0.3s ease',
}));

const PlatinumButton = styled(Button)(({ theme }) => ({
  background: 'transparent',
  color: theme.palette.common.white,
  border: '1px solid rgba(255, 255, 255, 0.3)',
  padding: '10px 24px',
  borderRadius: '50px',
  fontWeight: 600,
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.1),
    borderColor: theme.palette.common.white,
  },
  transition: 'all 0.3s ease',
}));

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      sx={{ width: 250, backgroundColor: '#1a1a1a', height: '100vh', color: 'white', padding: 2 }}
      role="presentation"
    >
      <IconButton onClick={handleDrawerToggle} sx={{ color: 'gold', float: 'right' }}>
        <CloseIcon />
      </IconButton>
      <List>
        {['Create AI Art', 'Gallery', 'Premium Styles', 'For Professionals'].map((text, index) => (
          <ListItem button key={index}>
            <DiamondIcon sx={{ color: 'gold', mr: 1 }} />
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar 
      position="static" 
      sx={{ 
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
        borderBottom: '1px solid rgba(255, 215, 0, 0.2)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)',
        py: 1,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Mobile Menu Button */}
        <IconButton 
          color="inherit" 
          edge="start" 
          onClick={handleDrawerToggle} 
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        {/* Logo Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton sx={{ p: 0 }}>
            <DiamondIcon sx={{ color: 'gold', fontSize: 32, filter: 'drop-shadow(0 0 4px rgba(255, 215, 0, 0.6))' }} />
          </IconButton>
          <Box>
            <Typography 
              variant="h6" 
              component="div" 
              sx={{ 
                fontFamily: '"Playfair Display", serif',
                fontWeight: 700,
                letterSpacing: '1px',
                color: 'gold',
                textShadow: '0 0 8px rgba(255, 215, 0, 0.3)',
                lineHeight: 1,
              }}
            >
              PIXPLORER<sup style={{ fontSize: '0.6em' }}>®</sup>
            </Typography>
            <Typography 
              variant="caption" 
              sx={{ 
                fontFamily: '"Montserrat", sans-serif',
                letterSpacing: '3px',
                color: 'common.white',
                opacity: 0.7,
                textTransform: 'uppercase',
              }}
            >
              AI ART STUDIO
            </Typography>
          </Box>
        </Box>

        {/* Navigation Links (Hidden on Small Screens) */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4, mx: 4 }}>
          {['Create AI Art', 'Gallery', 'Premium Styles', 'For Professionals'].map((text, index) => (
            <Typography key={index} variant="body1" sx={{ color: 'white', cursor: 'pointer', '&:hover': { color: 'gold' } }}>
              {text}
            </Typography>
          ))}
        </Box>

        {/* CTA Buttons (Hidden on Small Screens) */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          <GoldButton variant="contained" endIcon={<EastIcon />}>
            Start Creating
          </GoldButton>
          <PlatinumButton variant="outlined" endIcon={<AddIcon />}>
            Upgrade to Pro
          </PlatinumButton>
        </Box>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
