import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Stack,
  Grid,
  useTheme,
  useMediaQuery,
  alpha
} from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import DiamondIcon from '@mui/icons-material/Diamond';
import StarsIcon from '@mui/icons-material/Stars';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [hovered, setHovered] = useState(false);
  const [artworkHovered, setArtworkHovered] = useState(false);
  const [activeEffect, setActiveEffect] = useState(null);

  // Luxury color schemes
  const goldGradient = 'linear-gradient(135deg, #FFD700 0%, #D4AF37 50%, #FFD700 100%)';
  const diamondGlow = 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(200,255,255,0.5) 50%, rgba(0,0,0,0) 70%)';
  
  // AI artwork with multiple style options
  const artworkStyles = [
    {
      id: 1,
      url: "https://cdn.leonardo.ai/users/b04c1415-78ac-4d6a-80ed-20558d42729a/generations/52432044-3c8a-4379-8af1-fb0773700639/variations/alchemyrefiner_alchemymagic_0_52432044-3c8a-4379-8af1-fb0773700639_0.jpg?w=512",
      name: "Ethereal Vision",
      style: "Fantasy Art",
      edition: "1/25"
    },
    {
      id: 2,
      url: "https://cdn.leonardo.ai/users/1019035a-72d9-4e63-9946-ef9be9550d9b/generations/ae056fbd-a993-4d7c-b8aa-233c369a89c8/Leonardo_Phoenix_10_make_an_image_of_a_desfem_lesbian_with_sho_2.jpg?w=512",
      name: "Celestial Dream",
      style: "Surrealism",
      edition: "2/25"
    },
    {
      id: 3,
      url: "https://cdn.leonardo.ai/users/ae595dbd-857e-46a7-a5b2-4ab60394f83f/generations/348fd40c-e174-4afe-b47e-d8f212b45092/Leonardo_Phoenix_10_a_solitary_intricately_detailed_mushroom_w_3.jpg",
      name: "Mystic Portal",
      style: "Cyberpunk",
      edition: "3/25"
    }
  ];

  const [currentArtwork, setCurrentArtwork] = useState(artworkStyles[0]);

  // Cycle through artwork styles
  const cycleArtwork = () => {
    const currentIndex = artworkStyles.findIndex(art => art.id === currentArtwork.id);
    const nextIndex = (currentIndex + 1) % artworkStyles.length;
    setCurrentArtwork(artworkStyles[nextIndex]);
  };

  // Visual effects
  const visualEffects = [
    {
      name: "Glow",
      apply: () => setActiveEffect('glow'),
      style: { filter: 'brightness(1.2) drop-shadow(0 0 10px gold)' }
    },
    {
      name: "Sketch",
      apply: () => setActiveEffect('sketch'),
      style: { filter: 'grayscale(100%) contrast(130%)' }
    },
    {
      name: "Painting",
      apply: () => setActiveEffect('painting'),
      style: { filter: 'sepia(50%) saturate(200%)' }
    }
  ];

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #050505 0%, #121212 100%)',
        color: theme.palette.common.white,
        position: 'relative',
        overflow: 'hidden',
        py: 15,
        px: isMobile ? 4 : 15,
        borderBottom: '1px solid rgba(255, 215, 0, 0.1)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(255,215,0,0.5), transparent)'
        }
      }}
    >
      {/* Animated diamond particles with trail effect */}
      <AnimatePresence>
        {[...Array(20)].map((_, i) => (
          <Box
            key={i}
            component={motion.div}
            initial={{ opacity: 0, y: -20, x: Math.random() * 100 }}
            animate={{ 
              opacity: [0, 0.6, 0],
              y: [0, Math.random() * 300 + 100],
              x: [0, (Math.random() - 0.5) * 100],
              transition: {
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                repeatType: "reverse",
                delay: Math.random() * 5,
                ease: "linear"
              }
            }}
            sx={{
              position: 'absolute',
              top: 0,
              left: `${Math.random() * 100}%`,
              width: '4px',
              height: '4px',
              background: 'gold',
              transform: 'rotate(45deg)',
              filter: 'blur(0.5px)',
              zIndex: 0,
              '&::before': {
                content: '""',
                position: 'absolute',
                top: -10,
                left: -10,
                right: -10,
                bottom: -10,
                background: 'radial-gradient(circle, gold, transparent 70%)',
                opacity: 0.3
              }
            }}
          />
        ))}
      </AnimatePresence>

      {/* Interactive light source that follows cursor */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        whileHover={{ opacity: 0.25 }}
        sx={{
          position: 'fixed',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(255,215,0,0.5) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 0,
          mixBlendMode: 'soft-light'
        }}
      />

      {/* Main content grid */}
      <Grid container spacing={10} display="flex" alignItems="center" justifyContent="space-between">
        <Grid item xs={12} md={6}>
          <Stack spacing={6} sx={{ position: 'relative', zIndex: 1 }}>
            {/* Premium authentication badge with interactive pulse */}
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, scale: [1, 1.05, 1] }}
              transition={{ 
                delay: 0.3,
                scale: { duration: 3, repeat: Infinity, repeatType: "reverse" }
              }}
              whileHover={{ scale: 1.1 }}
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1.5,
                px: 3,
                py: 1.5,
                background: alpha('#000', 0.7),
                border: `1px solid ${alpha('#FFD700', 0.5)}`,
                borderRadius: '4px',
                width: 'fit-content',
                backdropFilter: 'blur(4px)',
                boxShadow: '0 4px 30px rgba(255, 215, 0, 0.1)',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '1px',
                  background: goldGradient
                }
              }}
              onClick={() => cycleArtwork()}
            >
              <Box
                component={motion.div}
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                sx={{
                  width: 20,
                  height: 20,
                  borderRadius: '50%',
                  border: '1px solid gold',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <DiamondIcon sx={{ 
                  color: 'gold', 
                  fontSize: 12,
                  animation: 'pulse 3s infinite',
                  '@keyframes pulse': {
                    '0%': { opacity: 0.6 },
                    '50%': { opacity: 1 },
                    '100%': { opacity: 0.6 }
                  }
                }} />
              </Box>
              <Typography variant="caption" sx={{ 
                color: 'gold', 
                fontWeight: 600,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                fontSize: '0.7rem'
              }}>
                CLICK TO CYCLE ARTWORK
              </Typography>
            </Box>

            {/* Animated headline with character reveal effect */}
            <Typography
              variant={isMobile ? 'h2' : 'h1'}
              sx={{
                fontFamily: '"Playfair Display", serif',
                fontWeight: 700,
                lineHeight: 1.1,
                textShadow: '0 4px 30px rgba(0, 0, 0, 0.8)',
                letterSpacing: '0.5px',
                position: 'relative',
                // background: 'red',
                maxWidth: '1000px'
              }}
            >
              <Box 
                component={motion.span}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                sx={{ 
                  color: 'transparent',
                  background: goldGradient,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  display: 'inline-block'
                }}
              >
                Create
              </Box>{' '}
              <Box 
                component={motion.span}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Exquisite
              </Box>{' '}
              <Box 
                component={motion.span}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                sx={{ 
                  fontStyle: 'italic',
                  position: 'relative',
                  display: 'inline-block'
                }}
              >
                <Box
                  component={motion.span}
                  animate={{ rotate: [0, 2, -2, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                >
                  Digital Art
                </Box>
                <Box sx={{
                  position: 'absolute',
                  bottom: -8,
                  right: 0,
                  fontSize: '0.5em',
                  color: 'gold',
                  fontStyle: 'normal'
                }}>
                  ®
                </Box>
              </Box>
              <Box
                component={motion.div}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                sx={{
                  height: '2px',
                  background: goldGradient,
                  width: '80px',
                  mt: 2
                }}
              />
            </Typography>

            {/* Description with fade-in effect */}
            <Typography
              variant={isMobile ? 'body1' : 'h5'}
              component={motion.p}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 0.8 }}
              sx={{
                fontWeight: 300,
                maxWidth: 600,
                lineHeight: 1.6,
                letterSpacing: '0.3px',
                fontFamily: '"Cormorant Garamond", serif'
              }}
            >
              Transform your imagination into gallery-worthy digital masterpieces with our 
              exclusive AI platform. Each creation is digitally signed and available as 
              a limited edition collectible.
            </Typography>

            {/* Interactive buttons with enhanced effects */}
            <Stack direction="row" spacing={3} sx={{ pt: 2 }}>
              <Button
                component={motion.div}
                whileHover={{ 
                  scale: 1.03,
                  background: 'linear-gradient(135deg, #FFD700 0%, #F9D423 50%, #FFD700 100%)'
                }}
                whileTap={{ scale: 0.98 }}
                variant="contained"
                endIcon={
                  <Box
                    component={motion.div}
                    animate={{ 
                      x: hovered ? [0, 4, 0] : 0,
                      rotate: hovered ? [0, 360] : 0
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <EastIcon />
                  </Box>
                }
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                sx={{
                  background: goldGradient,
                  color: '#000',
                  px: 5,
                  py: 2,
                  borderRadius: '2px',
                  fontWeight: 600,
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  fontSize: '0.8rem',
                  boxShadow: '0 4px 30px rgba(255, 215, 0, 0.3)',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                    transition: '0.5s'
                  },
                  '&:hover': {
                    boxShadow: '0 8px 40px rgba(255, 215, 0, 0.7)',
                    '&::before': {
                      left: '100%'
                    }
                  },
                  transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)'
                }}
              >
                Generate Your Masterpiece
              </Button>
              <Button
                component={motion.div}
                whileHover={{ 
                  scale: 1.03,
                  backgroundColor: alpha(theme.palette.common.white, 0.1)
                }}
                whileTap={{ scale: 0.98 }}
                variant="outlined"
                sx={{
                  color: theme.palette.common.white,
                  borderColor: alpha(theme.palette.common.white, 0.3),
                  px: 5,
                  py: 2,
                  borderRadius: '2px',
                  fontWeight: 600,
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  fontSize: '0.8rem',
                  backdropFilter: 'blur(4px)',
                  '&:hover': {
                    borderColor: theme.palette.common.white,
                    boxShadow: '0 0 15px rgba(255,255,255,0.3)'
                  },
                  transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)'
                }}
              >
                View Collector's Gallery
              </Button>
            </Stack>

            {/* Interactive metrics with hover effects */}
            <Grid container spacing={2} sx={{ pt: 6 }}>
              <Grid item xs={4}>
                <Box
                  component={motion.div}
                  whileHover={{ 
                    y: -5,
                    borderLeft: '2px solid gold'
                  }}
                  sx={{
                    borderLeft: '1px solid rgba(255,215,0,0.3)',
                    pl: 2,
                    py: 1,
                    transition: 'all 0.3s ease'
                  }}
                >
                  <Typography variant="h3" sx={{ 
                    color: 'gold', 
                    fontWeight: 300,
                    fontFamily: '"Cormorant Garamond", serif',
                    lineHeight: 1
                  }}>
                    10M+
                  </Typography>
                  <Typography variant="caption" sx={{ 
                    opacity: 0.7,
                    letterSpacing: '1px',
                    fontSize: '0.6rem',
                    textTransform: 'uppercase'
                  }}>
                    Creations
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box
                  component={motion.div}
                  whileHover={{ 
                    y: -5,
                    borderLeft: '2px solid gold'
                  }}
                  sx={{
                    borderLeft: '1px solid rgba(255,215,0,0.3)',
                    pl: 2,
                    py: 1,
                    transition: 'all 0.3s ease'
                  }}
                >
                  <Typography variant="h3" sx={{ 
                    color: 'white', 
                    fontWeight: 300,
                    fontFamily: '"Cormorant Garamond", serif',
                    lineHeight: 1
                  }}>
                    100+
                  </Typography>
                  <Typography variant="caption" sx={{ 
                    opacity: 0.7,
                    letterSpacing: '1px',
                    fontSize: '0.6rem',
                    textTransform: 'uppercase'
                  }}>
                    Artistic Styles
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box
                  component={motion.div}
                  whileHover={{ 
                    y: -5,
                    borderLeft: '2px solid gold'
                  }}
                  sx={{
                    borderLeft: '1px solid rgba(255,215,0,0.3)',
                    pl: 2,
                    py: 1,
                    transition: 'all 0.3s ease'
                  }}
                >
                  <Typography variant="h3" sx={{ 
                    color: 'gold', 
                    fontWeight: 300,
                    fontFamily: '"Cormorant Garamond", serif',
                    lineHeight: 1
                  }}>
                    4.9★
                  </Typography>
                  <Typography variant="caption" sx={{ 
                    opacity: 0.7,
                    letterSpacing: '1px',
                    fontSize: '0.6rem',
                    textTransform: 'uppercase'
                  }}>
                    Rated Experience
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Stack>
        </Grid>

        {/* Enhanced Artwork Display */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              position: 'relative',
              perspective: '1200px',
              height: '100%'
            }}
            onMouseEnter={() => setArtworkHovered(true)}
            onMouseLeave={() => setArtworkHovered(false)}
          >
            {/* Interactive artwork frame */}
            <Box
              component={motion.div}
              initial={{ opacity: 0, rotateY: 15 }}
              animate={{ 
                opacity: 1, 
                rotateY: 0,
                scale: artworkHovered ? 1.02 : 1
              }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              sx={{
                position: 'relative',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: artworkHovered 
                  ? '0 50px 100px -20px rgba(255, 215, 0, 0.5)' 
                  : '0 30px 60px -10px rgba(255, 215, 0, 0.3)',
                border: artworkHovered 
                  ? '2px solid rgba(255, 215, 0, 0.5)' 
                  : '1px solid rgba(255, 215, 0, 0.2)',
                aspectRatio: '1/1',
                maxWidth: 600,
                maxHeight: '500px',
                mx: 'auto',
                background: '#0a0a0a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transformStyle: 'preserve-3d',
                transition: 'all 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  background: artworkHovered 
                    ? 'linear-gradient(45deg, transparent 65%, rgba(255,215,0,0.15))' 
                    : 'linear-gradient(45deg, transparent 65%, rgba(255,215,0,0.05))',
                  zIndex: 1,
                  transition: 'all 0.5s ease'
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  boxShadow: artworkHovered 
                    ? 'inset 0 0 50px rgba(255,215,0,0.2)' 
                    : 'inset 0 0 20px rgba(255,215,0,0.1)',
                  transition: 'all 0.5s ease'
                }
              }}
            >
              {/* Artwork with interactive effects */}
              <Box
                component={motion.div}
                whileHover={{ scale: 1.03 }}
                sx={{
                  position: 'relative',
                  maxWidth: '90%',
                  maxHeight: '90%',
                  width: '94%',
                  height: '94%',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(255,215,0,0.3)',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: -20,
                    border: '15px solid rgba(0,0,0,0.4)',
                    zIndex: -1,
                    transition: 'all 0.5s ease'
                  }
                }}
              >
                <Box
                  component={motion.img}
                  key={currentArtwork.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    filter: activeEffect 
                      ? visualEffects.find(e => e.name.toLowerCase() === activeEffect)?.style.filter
                      : artworkHovered 
                        ? 'sepia(5%) brightness(105%) contrast(110%) saturate(120%)' 
                        : 'sepia(10%) brightness(100%) contrast(110%)'
                  }}
                  transition={{ duration: 0.8 }}
                  src={currentArtwork.url}
                  alt="AI-Generated Masterpiece"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'all 0.5s ease'
                  }}
                />
              </Box>
              
              {/* Dynamic lighting effect */}
              <Box
                component={motion.div}
                animate={{ 
                  opacity: artworkHovered ? 0.4 : 0,
                  x: artworkHovered ? [0, 100, -100, 0] : 0,
                  y: artworkHovered ? [0, -50, 50, 0] : 0
                }}
                transition={{ duration: 6, repeat: Infinity }}
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'radial-gradient(circle at center, rgba(255,215,0,0.8) 0%, transparent 70%)',
                  mixBlendMode: 'soft-light',
                  pointerEvents: 'none'
                }}
              />

              {/* Interactive style selector */}
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                sx={{
                  position: 'absolute',
                  bottom: 20,
                  left: '5%',
                  right: '5%',
                  background: 'rgba(0,0,0,0.8)',
                  borderTop: '2px solid gold',
                  px: 3,
                  py: 2,
                  backdropFilter: 'blur(10px)',
                  borderRadius: '4px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <Box>
                  <Typography variant="caption" sx={{ 
                    color: 'gold',
                    letterSpacing: '1px',
                    fontFamily: '"Playfair Display", serif',
                    fontWeight: 500,
                    display: 'block'
                  }}>
                    "{currentArtwork.name}"
                  </Typography>
                  <Typography variant="caption" sx={{ 
                    color: 'white',
                    opacity: 0.8,
                    fontSize: '0.6rem',
                    display: 'block'
                  }}>
                    {currentArtwork.style} • Edition {currentArtwork.edition}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  {visualEffects.map((effect, index) => (
                    <Button
                      key={index}
                      variant="outlined"
                      size="small"
                      onClick={effect.apply}
                      sx={{
                        color: activeEffect === effect.name.toLowerCase() ? 'gold' : 'rgba(255,255,255,0.7)',
                        borderColor: activeEffect === effect.name.toLowerCase() ? 'gold' : 'rgba(255,255,255,0.2)',
                        minWidth: 0,
                        px: 2,
                        fontSize: '0.6rem',
                        '&:hover': {
                          borderColor: 'gold',
                          color: 'gold'
                        }
                      }}
                    >
                      {effect.name}
                    </Button>
                  ))}
                </Box>
              </Box>
            </Box>

            {/* Animated certification seal */}
            <Box
              component={motion.div}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                rotate: artworkHovered ? [0, 10, -10, 0] : 0,
                y: artworkHovered ? [-5, 5, -5] : 0
              }}
              transition={{ 
                delay: 1.2,
                rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
              sx={{
                position: 'absolute',
                top: -25,
                right: -25,
                width: 100,
                height: 100,
                background: goldGradient,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 15px 40px rgba(255,215,0,0.4)',
                zIndex: 2,
                border: '3px solid #000',
                cursor: 'pointer',
                '&:hover': {
                  boxShadow: '0 0 30px rgba(255,215,0,0.8)'
                }
              }}
              onClick={() => cycleArtwork()}
            >
              <DiamondIcon sx={{ 
                color: '#000',
                fontSize: 50,
                animation: 'glow 2s infinite alternate',
                '@keyframes glow': {
                  '0%': { opacity: 0.8, filter: 'drop-shadow(0 0 5px rgba(255,255,255,0.5))' },
                  '100%': { opacity: 1, filter: 'drop-shadow(0 0 15px rgba(255,255,255,0.9))' }
                }
              }} />
            </Box>

            {/* Floating corner accents with interaction */}
            <Box
              component={motion.div}
              animate={{ 
                opacity: [0.6, 0.9, 0.6],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              sx={{
                position: 'absolute',
                top: 20,
                left: 20,
                width: 50,
                height: 50,
                borderLeft: '2px solid gold',
                borderTop: '2px solid gold',
                zIndex: 2
              }}
            />
            <Box
              component={motion.div}
              animate={{ 
                opacity: [0.6, 0.9, 0.6],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 2 }}
              sx={{
                position: 'absolute',
                bottom: 20,
                right: 20,
                width: 50,
                height: 50,
                borderRight: '2px solid gold',
                borderBottom: '2px solid gold',
                zIndex: 2
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;