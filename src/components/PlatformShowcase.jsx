import React, { useState } from 'react';
import {
  Box,
  Typography,
  Stack,
  Grid,
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Divider,
  IconButton,
  useMediaQuery,
  useTheme,
  alpha
} from '@mui/material';
import {
  Diamond as DiamondIcon,
  Close as CloseIcon,
  Star as StarIcon,
  Add as AddIcon,
  ArrowForward as ArrowForwardIcon
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const PlatformShowcase = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [openSubmit, setOpenSubmit] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    url: '',
    description: ''
  });

  // Premium featured platforms data
  const featuredPlatforms = [
    {
      id: 1,
      name: 'ArtGen Elite',
      description: 'AI-powered art generation with museum-quality outputs',
      rating: 4.9,
      image: 'https://cdn.leonardo.ai/users/ee45af7d-c760-4bff-8329-08130eda5868/generations/3cb77e97-71fc-4b33-b005-11edb9841d11/Leonardo_Phoenix_10_Create_a_vibrant_and_modern_image_for_soci_1.jpg?w=512',
      featured: true
    },
    {
      id: 2,
      name: 'PixelMasters',
      description: 'Transform photos into masterpieces with neural networks',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      featured: true
    },
    {
      id: 3,
      name: 'DreamCanvas Pro',
      description: 'Next-generation creative suite for digital artists',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      featured: true
    },
    {
      id: 4,
      name: 'NeuralArt Collective',
      description: 'Community-driven AI art platform with exclusive styles',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1132&q=80',
      featured: false
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.17, 0.67, 0.21, 0.99]
      }
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Submitted platform:', formData);
    setOpenSubmit(false);
    setFormData({ name: '', url: '', description: '' });
  };

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #050505 0%, #121212 100%)',
        color: theme.palette.common.white,
        py: { xs: 8, md: 12 },
        px: { xs: 4, md: 8, lg: 12 },
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255,215,0,0.1)'
      }}
    >
      {/* Floating diamond decorations */}
      <AnimatePresence>
        {[...Array(8)].map((_, i) => (
          <Box
            key={i}
            component={motion.div}
            initial={{
              y: Math.random() * 200 - 50,
              x: Math.random() * 200 - 50,
              opacity: 0,
              rotate: Math.random() * 360
            }}
            animate={{
              y: Math.random() * 300 - 100,
              x: Math.random() * 300 - 100,
              opacity: [0, 0.4, 0],
              transition: {
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                repeatType: "reverse",
                delay: Math.random() * 5
              }
            }}
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
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        sx={{
          textAlign: 'center',
          mb: { xs: 6, md: 8 },
          position: 'relative',
          zIndex: 1
        }}
      >
        <Typography
          variant="overline"
          sx={{
            color: 'gold',
            letterSpacing: '3px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
            mb: 2,
            fontSize: { xs: '0.7rem', md: '0.8rem' }
          }}
        >
          <DiamondIcon fontSize="small" />
          CURATED COLLECTION
          <DiamondIcon fontSize="small" />
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontFamily: '"Playfair Display", serif',
            fontWeight: 700,
            lineHeight: 1.2,
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            mb: 2
          }}
        >
          Premium <Box component="span" sx={{ color: 'gold' }}>AI Art</Box> Platforms
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
          Discover the most exclusive platforms for creating and collecting AI-generated art masterpieces.
        </Typography>
      </Box>

      {/* Featured platforms grid */}
      <Box
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        sx={{
          maxWidth: '1400px',
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
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: { xs: 4, md: 6 }
          }}
        >
          {featuredPlatforms.map((platform) => (
            <Grid item key={platform.id} sx={{ display: 'flex', justifyContent: 'center' }}>
              <motion.div
                variants={itemVariants}
                whileHover="hover"
                style={{ width: '100%' }}
              >
                <Paper
                  sx={{
                    background: 'rgba(20, 20, 20, 0.7)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '4px',
                    color: 'white',
                    width: '100%',
                    height: '100%',
                    border: '1px solid rgba(255,215,0,0.1)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                    transition: 'all 0.3s ease',
                    overflow: 'hidden',
                    position: 'relative',
                    '&:hover': {
                      borderColor: 'rgba(255,215,0,0.3)',
                      boxShadow: '0 12px 40px rgba(255, 215, 0, 0.2)'
                    }
                  }}
                >
                  {/* Platform image */}
                  <Box
                    sx={{
                      height: 200,
                      position: 'relative',
                      overflow: 'hidden',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '60%',
                        background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)'
                      }
                    }}
                  >
                    <Box
                      component="img"
                      src={platform.image}
                      alt={platform.name}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease',
                        '&:hover': {
                          transform: 'scale(1.05)'
                        }
                      }}
                    />
                    {platform.featured && (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 16,
                          right: 16,
                          background: 'rgba(0,0,0,0.7)',
                          px: 1.5,
                          py: 0.5,
                          borderRadius: '4px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          border: '1px solid gold'
                        }}
                      >
                        <StarIcon sx={{ color: 'gold', fontSize: 16 }} />
                        <Typography variant="caption" sx={{ color: 'gold' }}>
                          Featured
                        </Typography>
                      </Box>
                    )}
                  </Box>

                  {/* Platform info */}
                  <Box sx={{ p: 4 }}>
                    <Typography
                      variant="h5"
                      sx={{
                        mb: 1,
                        fontWeight: 600,
                        fontFamily: '"Playfair Display", serif'
                      }}
                    >
                      {platform.name}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        mb: 3,
                        opacity: 0.8,
                        fontFamily: '"Cormorant Garamond", serif',
                        fontWeight: 300,
                        minHeight: 60
                      }}
                    >
                      {platform.description}
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        mt: 'auto'
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <StarIcon sx={{ color: 'gold', fontSize: 20 }} />
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                          {platform.rating}
                        </Typography>
                      </Box>
                      <Button
                        variant="outlined"
                        size="small"
                        endIcon={<ArrowForwardIcon />}
                        sx={{
                          color: 'gold',
                          borderColor: 'rgba(255,215,0,0.5)',
                          '&:hover': {
                            borderColor: 'gold',
                            backgroundColor: 'rgba(255,215,0,0.1)'
                          }
                        }}
                      >
                        Explore
                      </Button>
                    </Box>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}

          {/* Add your platform card */}
          <Grid item sx={{ display: 'flex', justifyContent: 'center' }}>
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              style={{ width: '100%' }}
            >
              <Paper
                onClick={() => setOpenSubmit(true)}
                sx={{
                  background: 'rgba(20, 20, 20, 0.3)',
                  backdropFilter: 'blur(5px)',
                  borderRadius: '4px',
                  color: 'white',
                  width: '100%',
                  height: '100%',
                  minHeight: 400,
                  border: '1px dashed rgba(255,215,0,0.3)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    border: '1px dashed rgba(255,215,0,0.7)',
                    background: 'rgba(255,215,0,0.05)'
                  }
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    border: '1px dashed gold',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 3,
                    transition: 'all 0.3s ease'
                  }}
                >
                  <AddIcon sx={{ color: 'gold', fontSize: 40 }} />
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 1,
                    fontWeight: 600,
                    fontFamily: '"Playfair Display", serif',
                    color: 'gold'
                  }}
                >
                  Submit Your Platform
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    opacity: 0.7,
                    maxWidth: 300,
                    textAlign: 'center',
                    fontFamily: '"Cormorant Garamond", serif',
                    fontWeight: 300
                  }}
                >
                  Get featured in our exclusive collection of premium AI art platforms
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Box>

      {/* Submission Dialog */}
      <Dialog
        open={openSubmit}
        onClose={() => setOpenSubmit(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
            border: '1px solid rgba(255,215,0,0.2)',
            borderRadius: '4px',
            overflow: 'hidden'
          }
        }}
      >
        <DialogTitle
          sx={{
            background: 'rgba(255,215,0,0.1)',
            borderBottom: '1px solid rgba(255,215,0,0.2)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            pr: 2
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: '"Playfair Display", serif',
              fontWeight: 600,
              color: 'gold'
            }}
          >
            Submit Your Platform
          </Typography>
          <IconButton onClick={() => setOpenSubmit(false)} sx={{ color: 'gold' }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ p: 4 }}>
          <form onSubmit={handleSubmit} style={{ margin: "20px 0" }}> 
            <Stack spacing={4}>
              <TextField
                fullWidth
                label="Platform Name"
                variant="outlined"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'rgba(255,215,0,0.3)'
                    },
                    '&:hover fieldset': {
                      borderColor: 'gold'
                    }
                  },
                  '& .MuiInputLabel-root': {
                    color: 'rgba(255,255,255,0.7)'
                  },
                  '& .MuiInputBase-input': {
                    color: 'white'
                  }
                }}
              />
              <TextField
                fullWidth
                label="Platform URL"
                variant="outlined"
                name="url"
                type="url"
                value={formData.url}
                onChange={handleInputChange}
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'rgba(255,215,0,0.3)'
                    },
                    '&:hover fieldset': {
                      borderColor: 'gold'
                    }
                  },
                  '& .MuiInputLabel-root': {
                    color: 'rgba(255,255,255,0.7)'
                  },
                  '& .MuiInputBase-input': {
                    color: 'white'
                  }
                }}
              />
              <TextField
                fullWidth
                label="Description"
                variant="outlined"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                multiline
                rows={4}
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'rgba(255,215,0,0.3)'
                    },
                    '&:hover fieldset': {
                      borderColor: 'gold'
                    }
                  },
                  '& .MuiInputLabel-root': {
                    color: 'rgba(255,255,255,0.7)'
                  },
                  '& .MuiInputBase-input': {
                    color: 'white'
                  }
                }}
              />
              <Divider sx={{ borderColor: 'rgba(255,215,0,0.2)' }} />
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                <Button
                  onClick={() => setOpenSubmit(false)}
                  sx={{
                    color: 'white',
                    borderColor: 'rgba(255,255,255,0.3)',
                    '&:hover': {
                      borderColor: 'white'
                    }
                  }}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    background: 'linear-gradient(135deg, #FFD700 0%, #D4AF37 100%)',
                    color: '#000',
                    fontWeight: 600,
                    '&:hover': {
                      boxShadow: '0 0 20px rgba(255,215,0,0.5)'
                    }
                  }}
                >
                  Submit Platform
                </Button>
              </Box>
            </Stack>
          </form>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default PlatformShowcase;