import React from 'react';
import { 
  Box, 
  Typography, 
  Stack, 
  Grid, 
  Avatar,
  useTheme,
  useMediaQuery,
  alpha,
  Paper
} from '@mui/material';
import { 
  Star as StarIcon,
  FormatQuote as QuoteIcon,
  Diamond as DiamondIcon,
  AutoAwesome as SparkleIcon
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Luxury testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Emma Richardson",
      role: "Gallery Curator, The Metropolitan",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      content: "Pixplorer has revolutionized our contemporary art exhibitions. The AI-generated pieces now command higher prices than our traditional collections, attracting a new generation of art collectors.",
      rating: 5,
      highlight: "Featured in ARTnews"
    },
    {
      id: 2,
      name: "James Vanderbilt",
      role: "Creative Director, Luxe Brands",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      content: "Our luxury clients demand exclusivity. With Pixplorer, we create limited edition digital art that becomes instant status symbols. The quality rivals pieces that take human artists months to produce.",
      rating: 5,
      highlight: "VIP Client Preferred"
    },
    {
      id: 3,
      name: "Sophia Chen",
      role: "Chief Digital Artist, Future Galleries",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      content: "I've collaborated with master artists worldwide, yet Pixplorer's AI surprises me daily. It's like having Da Vinci, Monet, and Hockney collaborating in my studio, available at any moment.",
      rating: 5,
      highlight: "Industry Innovator"
    }
  ];

  // Premium brand partners
  const brands = [
    { name: "Art Basel", logo: "/art-basel-logo.png" },
    { name: "Sotheby's", logo: "/sothebys-logo.png" },
    { name: "LVMH", logo: "/lvmh-logo.png" },
    { name: "The Met", logo: "/met-logo.png" },
    { name: "Christie's", logo: "/christies-logo.png" }
  ];

  // Animation variants
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
        px: { xs: 4, md: 12 },
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255,215,0,0.1)',
        borderBottom: '1px solid rgba(255,215,0,0.1)'
      }}
    >
      {/* Animated diamond particles */}
      <AnimatePresence>
        {[...Array(12)].map((_, i) => (
          <Box
            key={i}
            component={motion.div}
            variants={floatingDiamond}
            initial="hidden"
            animate="visible"
            sx={{
              position: 'absolute',
              width: 8,
              height: 8,
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
        transition={{ duration: 0.8 }}
        sx={{ 
          textAlign: 'center',
          mb: { xs: 6, md: 10 },
          position: 'relative',
          zIndex: 1
        }}
      >
        <Typography 
          variant="overline"
          sx={{ 
            color: 'gold',
            letterSpacing: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
            mb: 3,
            fontSize: { xs: '0.7rem', md: '0.8rem' }
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
          CLIENT TESTIMONIALS
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
          sx={{ 
            fontFamily: '"Playfair Display", serif',
            fontWeight: 700,
            lineHeight: 1.2,
            fontSize: { xs: '2.2rem', md: '3rem' },
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
            Praise
          </Box>{' '}
          From <Box component="span" sx={{ color: 'gold' }}>Industry Leaders</Box>
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            maxWidth: 700,
            mx: 'auto',
            opacity: 0.8,
            fontFamily: '"Cormorant Garamond", serif',
            fontWeight: 300,
            fontSize: { xs: '1rem', md: '1.1rem' }
          }}
        >
          Hear from elite creatives and collectors who have transformed their work with our premium AI art platform.
        </Typography>
      </Box>

      {/* Testimonials grid */}
      <Grid 
        container 
        spacing={{ xs: 4, md: 6 }}
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        sx={{ 
          mb: { xs: 8, md: 12 },
          maxWidth: 1400,
          mx: 'auto'
        }}
      >
        {testimonials.map((testimonial) => (
          <Grid 
            item 
            xs={12}
            md={4}
            key={testimonial.id}
            sx={{ display: 'flex' }}
          >
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              style={{ width: '100%' }}
            >
              <Paper
                sx={{
                  background: 'rgba(20, 20, 20, 0.7)',
                  backdropFilter: 'blur(12px)',
                  borderRadius: '4px',
                  p: { xs: 3, md: 4 },
                  height: '100%',
                  border: '1px solid rgba(255,215,0,0.2)',
                  boxShadow: '0 8px 40px rgba(0, 0, 0, 0.4)',
                  position: 'relative',
                  overflow: 'hidden',
                  color: 'white',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '4px',
                    background: 'linear-gradient(90deg, #FFD700, #D4AF37)'
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, transparent 65%, rgba(255,215,0,0.05))',
                    zIndex: -1
                  }
                }}
              >
                {/* Highlight badge */}
                {testimonial.highlight && (
                  <Box
                    component={motion.div}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      background: 'rgba(0,0,0,0.7)',
                      border: '1px solid gold',
                      px: 2,
                      py: 0.5,
                      borderRadius: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1
                    }}
                  >
                    <SparkleIcon sx={{ color: 'gold', fontSize: 16 }} />
                    <Typography variant="caption" sx={{ color: 'gold' }}>
                      {testimonial.highlight}
                    </Typography>
                  </Box>
                )}

                <QuoteIcon 
                  sx={{ 
                    color: alpha(theme.palette.warning.main, 0.1),
                    fontSize: 80,
                    position: 'absolute',
                    top: 10,
                    right: 10,
                    zIndex: -1
                  }} 
                />

                <Stack spacing={4} sx={{ position: 'relative', zIndex: 1 }}>
                  {/* Rating stars */}
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    {[...Array(5)].map((_, i) => (
                      <Box
                        key={i}
                        component={motion.div}
                        whileHover={{ scale: 1.2 }}
                      >
                        <StarIcon 
                          sx={{ 
                            color: i < testimonial.rating ? 'gold' : 'rgba(255,255,255,0.1)',
                            fontSize: 24,
                            stroke: 'gold',
                            strokeWidth: 1
                          }} 
                        />
                      </Box>
                    ))}
                  </Box>

                  {/* Testimonial content */}
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      fontStyle: 'italic',
                      position: 'relative',
                      fontFamily: '"Cormorant Garamond", serif',
                      fontWeight: 300,
                      fontSize: '1.1rem',
                      lineHeight: 1.7,
                      '&::before, &::after': {
                        content: '"\\201C"',
                        color: 'gold',
                        fontSize: '2em',
                        lineHeight: 0,
                        verticalAlign: '-0.4em',
                        opacity: 0.5
                      },
                      '&::before': {
                        mr: 1
                      },
                      '&::after': {
                        content: '"\\201D"',
                        ml: 1
                      }
                    }}
                  >
                    {testimonial.content}
                  </Typography>

                  {/* Client info */}
                  <Stack direction="row" spacing={3} alignItems="center">
                    <Box
                      component={motion.div}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Avatar 
                        src={testimonial.avatar} 
                        sx={{ 
                          width: 70, 
                          height: 70,
                          border: '2px solid gold',
                          boxShadow: '0 4px 20px rgba(255,215,0,0.3)'
                        }} 
                      />
                    </Box>
                    <Box>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          fontWeight: 600,
                          fontFamily: '"Playfair Display", serif'
                        }}
                      >
                        {testimonial.name}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          opacity: 0.8,
                          fontFamily: '"Cormorant Garamond", serif',
                          fontWeight: 300
                        }}
                      >
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </Stack>
                </Stack>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Brand partners section */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        sx={{
          textAlign: 'center',
          position: 'relative',
          zIndex: 1
        }}
      >
        <Typography 
          variant="overline"
          sx={{ 
            color: 'rgba(255,255,255,0.7)',
            letterSpacing: '3px',
            mb: 4,
            display: 'block',
            fontFamily: '"Playfair Display", serif'
          }}
        >
          TRUSTED BY ELITE INSTITUTIONS
        </Typography>
        <Grid 
          container 
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{ maxWidth: 1200, mx: 'auto' }}
        >
          {brands.map((brand, index) => (
            <Grid item xs={6} sm={4} md={2} key={index}>
              <Box
                component={motion.div}
                whileHover={{ scale: 1.1 }}
                sx={{
                  p: 2,
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: '4px',
                  border: '1px solid rgba(255,215,0,0.1)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 80,
                  transition: 'all 0.3s ease',
                  '& img': {
                    filter: 'grayscale(100%) brightness(1.5)',
                    opacity: 0.7,
                    transition: 'all 0.3s ease',
                    height: isMobile ? 24 : 32,
                    maxWidth: '100%',
                    objectFit: 'contain'
                  },
                  '&:hover': {
                    background: 'rgba(255,255,255,0.1)',
                    borderColor: 'rgba(255,215,0,0.3)',
                    '& img': {
                      filter: 'grayscale(0%) brightness(1)',
                      opacity: 1
                    }
                  }
                }}
              >
                <motion.img
                  src={brand.logo}
                  alt={brand.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Testimonials;