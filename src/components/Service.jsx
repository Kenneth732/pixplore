import React from 'react';
import {
  Box,
  Typography,
  Stack,
  Grid,
  Paper,
  useMediaQuery,
  useTheme,
  alpha
} from '@mui/material';
import {
  Diamond as DiamondIcon,
  Palette as PaletteIcon,
  Brush as BrushIcon,
  Star as StarIcon,
  ImageSearch as UploadIcon
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const Service = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  // Premium step data with enhanced colors
  const steps = [
    {
      icon: <UploadIcon sx={{ color: 'gold', fontSize: 40 }} />,
      title: "Upload or Describe",
      description: "Provide an image or describe your vision in text",
      color: "#FFD700",
      gradient: "linear-gradient(135deg, rgba(255,215,0,0.1) 0%, rgba(255,215,0,0.05) 100%)"
    },
    {
      icon: <PaletteIcon sx={{ color: 'gold', fontSize: 40 }} />,
      title: "Choose Your Style",
      description: "Select from 100+ premium artistic styles",
      color: "#E0115F",
      gradient: "linear-gradient(135deg, rgba(224,17,95,0.1) 0%, rgba(224,17,95,0.05) 100%)"
    },
    {
      icon: <BrushIcon sx={{ color: 'gold', fontSize: 40 }} />,
      title: "AI Creates Magic",
      description: "Our exclusive AI generates stunning artwork",
      color: "#B9F2FF",
      gradient: "linear-gradient(135deg, rgba(185,242,255,0.1) 0%, rgba(185,242,255,0.05) 100%)"
    },
    {
      icon: <StarIcon sx={{ color: 'gold', fontSize: 40 }} />,
      title: "Download & Share",
      description: "Get high-resolution files ready for display",
      color: "#E5E4E2",
      gradient: "linear-gradient(135deg, rgba(229,228,226,0.1) 0%, rgba(229,228,226,0.05) 100%)"
    }
  ];

  // Enhanced animation settings
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.17, 0.67, 0.21, 0.99]
      }
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 }
    }
  };

  // Floating diamond animation
  const floatingDiamond = {
    hidden: { 
      y: Math.random() * 200 - 50,
      x: Math.random() * 200 - 50,
      opacity: 0,
      rotate: Math.random() * 360
    },
    visible: {
      y: Math.random() * 300 - 100,
      x: Math.random() * 300 - 100,
      opacity: [0, 0.6, 0],
      transition: {
        duration: 20 + Math.random() * 15,
        repeat: Infinity,
        repeatType: "reverse",
        delay: Math.random() * 8
      }
    }
  };

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #050505 0%, #121212 100%)',
        color: theme.palette.common.white,
        py: { xs: 10, md: 15 },
        px: { xs: 4, md: 8, lg: 15 },
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255,215,0,0.1)',
        borderBottom: '1px solid rgba(255,215,0,0.1)'
      }}
    >
      {/* Animated diamond particles */}
      <AnimatePresence>
        {[...Array(16)].map((_, i) => (
          <Box
            key={i}
            component={motion.div}
            variants={floatingDiamond}
            initial="hidden"
            animate="visible"
            sx={{
              position: 'absolute',
              width: 10,
              height: 10,
              background: 'gold',
              clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
              zIndex: 0,
              filter: 'drop-shadow(0 0 4px rgba(255,215,0,0.5))'
            }}
          />
        ))}
      </AnimatePresence>

      {/* Section header */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        sx={{
          textAlign: 'center',
          mb: { xs: 8, md: 12 },
          position: 'relative',
          zIndex: 1
        }}
      >
        <Box
          component={motion.div}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          sx={{
            width: 200,
            height: 1,
            background: 'linear-gradient(90deg, transparent, gold, transparent)',
            mx: 'auto',
            mb: 3
          }}
        />
        <Typography
          variant="overline"
          sx={{
            color: 'gold',
            letterSpacing: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
            mb: 2,
            fontSize: { xs: '0.7rem', md: '0.8rem' },
            textTransform: 'uppercase'
          }}
        >
          <DiamondIcon 
            sx={{ 
              fontSize: '1rem',
              animation: 'pulse 3s infinite',
              '@keyframes pulse': {
                '0%': { opacity: 0.6 },
                '50%': { opacity: 1 },
                '100%': { opacity: 0.6 }
              }
            }} 
          />
          The Exclusive Process
          <DiamondIcon 
            sx={{ 
              fontSize: '1rem',
              animation: 'pulse 3s infinite 0.5s',
              '@keyframes pulse': {
                '0%': { opacity: 0.6 },
                '50%': { opacity: 1 },
                '100%': { opacity: 0.6 }
              }
            }} 
          />
        </Typography>
        <Typography
          variant="h2"
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          sx={{
            fontFamily: '"Playfair Display", serif',
            fontWeight: 700,
            lineHeight: 1.2,
            fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.5rem' },
            mb: 2
          }}
        >
          <Box 
            component="span" 
            sx={{ 
              color: 'transparent',
              background: 'linear-gradient(135deg, #FFD700 0%, #D4AF37 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text'
            }}
          >
            Pixplorer
          </Box>{' '}
          <Box component="span" sx={{ position: 'relative' }}>
            <Box
              component={motion.span}
              animate={{ rotate: [0, 2, -2, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              Masterpiece
            </Box>
            <Box sx={{
              position: 'absolute',
              bottom: -8,
              right: -20,
              fontSize: '0.5em',
              color: 'gold',
              fontStyle: 'normal'
            }}>
              ®
            </Box>
          </Box>
        </Typography>
        <Typography
          variant="subtitle1"
          component={motion.p}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 0.6 }}
          sx={{
            maxWidth: 700,
            mx: 'auto',
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: { xs: '1rem', md: '1.2rem' },
            fontWeight: 300,
            letterSpacing: '0.5px'
          }}
        >
          Our exclusive four-step process transforms your vision into gallery-quality digital art,
          certified and ready for collectors.
        </Typography>
      </Box>

      {/* Animated connecting line (desktop only) */}
      {!isMobile && (
        <Box
          component={motion.div}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          viewport={{ once: true }}
          sx={{
            position: 'absolute',
            top: '40%',
            left: '10%',
            right: '10%',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(255,215,0,0.3), transparent)',
            zIndex: 0,
            transformOrigin: 'left center'
          }}
        />
      )}

      {/* Steps container */}
      <Box
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        sx={{
          maxWidth: '1600px',
          mx: 'auto',
          position: 'relative',
          zIndex: 1
        }}
      >
        <Grid
          container
          spacing={{ xs: 4, md: 6 }}
          sx={{
            display: 'grid',
            gridTemplateColumns: { 
              xs: '1fr', 
              sm: 'repeat(2, 1fr)', 
              md: 'repeat(4, 1fr)' 
            },
            gap: { xs: 4, md: 6 }
          }}
        >
          {steps.map((step, index) => (
            <Grid item key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
              <motion.div
                variants={itemVariants}
                whileHover="hover"
                style={{ width: '100%' }}
              >
                <Paper
                  component={motion.div}
                  whileHover={{ 
                    boxShadow: `0 20px 50px -10px ${alpha(step.color, 0.3)}`,
                    borderColor: alpha(step.color, 0.5)
                  }}
                  sx={{
                    background: 'rgba(15, 15, 15, 0.7)',
                    backdropFilter: 'blur(12px)',
                    borderRadius: '4px',
                    color: 'white',
                    width: '100%',
                    maxWidth: '400px',
                    p: { xs: 3, md: 4 },
                    height: '100%',
                    border: '1px solid rgba(255,215,0,0.15)',
                    boxShadow: '0 8px 40px rgba(0, 0, 0, 0.4)',
                    transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '4px',
                      background: step.color,
                      zIndex: 1
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: step.gradient,
                      zIndex: -1
                    }
                  }}
                >
                  {/* Step number */}
                  <Typography
                    variant="h3"
                    sx={{
                      position: 'absolute',
                      top: 8,
                      right: 12,
                      color: alpha(step.color, 0.1),
                      fontFamily: '"Playfair Display", serif',
                      fontWeight: 700,
                      fontSize: '3rem',
                      lineHeight: 1
                    }}
                  >
                    0{index + 1}
                  </Typography>

                  {/* Icon container */}
                  <Box
                    component={motion.div}
                    whileHover={{ rotate: 5 }}
                    sx={{
                      width: { xs: 70, md: 90 },
                      height: { xs: 70, md: 90 },
                      background: alpha(step.color, 0.1),
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 4,
                      border: `1px solid ${alpha(step.color, 0.3)}`,
                      mx: 'auto',
                      position: 'relative',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        inset: -5,
                        border: `1px dashed ${alpha(step.color, 0.2)}`,
                        borderRadius: '50%',
                        animation: 'rotate 20s linear infinite',
                        '@keyframes rotate': {
                          '0%': { transform: 'rotate(0deg)' },
                          '100%': { transform: 'rotate(360deg)' }
                        }
                      }
                    }}
                  >
                    {step.icon}
                  </Box>

                  {/* Content */}
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 2,
                      fontWeight: 600,
                      textAlign: 'center',
                      fontSize: { xs: '1.3rem', md: '1.5rem' },
                      fontFamily: '"Playfair Display", serif',
                      position: 'relative',
                      zIndex: 1
                    }}
                  >
                    {step.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      opacity: 0.8,
                      lineHeight: 1.7,
                      textAlign: 'center',
                      fontSize: { xs: '1rem', md: '1.1rem' },
                      fontFamily: '"Cormorant Garamond", serif',
                      fontWeight: 300,
                      position: 'relative',
                      zIndex: 1
                    }}
                  >
                    {step.description}
                  </Typography>

                  {/* Hover effect */}
                  <Box
                    component={motion.div}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.3 }}
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: `radial-gradient(circle at center, ${alpha(step.color, 0.5)} 0%, transparent 70%)`,
                      zIndex: 0,
                      pointerEvents: 'none'
                    }}
                  />
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Service;