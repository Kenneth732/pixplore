import React, { useState } from 'react';
import {
  Box,
  Typography,
  Stack,
  Grid,
  TextField,
  Button,
  Divider,
  IconButton,
  Paper,
  useMediaQuery,
  useTheme,
  alpha
} from '@mui/material';
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  Close as CloseIcon,
  Send as SendIcon
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // Social media links
  const socialLinks = [
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'Instagram', icon: '📷', url: '#' },
    { name: 'Discord', icon: '💬', url: '#' },
    { name: 'LinkedIn', icon: '💼', url: '#' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
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
        {[...Array(10)].map((_, i) => (
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
          ✉️ CONNECT WITH US
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
          Contact <Box component="span" sx={{ color: 'gold' }}>Support</Box>
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
          Our dedicated team is available to assist you with any inquiries or support needs.
        </Typography>
      </Box>

      {/* Main content */}
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
        <Grid container spacing={{ xs: 4, md: 8 }}>
          {/* Contact form */}
          <Grid item xs={12} md={6}>
            <motion.div variants={itemVariants}>
              <Paper
                sx={{
                  background: 'rgba(20, 20, 20, 0.7)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '4px',
                  p: { xs: 3, md: 4 },
                  border: '1px solid rgba(255,215,0,0.2)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                  height: '100%'
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    mb: 3,
                    fontFamily: '"Playfair Display", serif',
                    fontWeight: 600,
                    color: 'gold'
                  }}
                >
                  Send Us a Message
                </Typography>
                
                {submitted && (
                  <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    sx={{
                      background: 'rgba(255,215,0,0.1)',
                      border: '1px solid rgba(255,215,0,0.3)',
                      p: 2,
                      mb: 3,
                      borderRadius: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2
                    }}
                  >
                    <Typography sx={{ color: 'gold' }}>
                      Thank you for your message! We'll respond within 24 hours.
                    </Typography>
                    <IconButton
                      size="small"
                      onClick={() => setSubmitted(false)}
                      sx={{ color: 'gold' }}
                    >
                      <CloseIcon fontSize="small" />
                    </IconButton>
                  </Box>
                )}

                <form onSubmit={handleSubmit}>
                  <Stack spacing={3}>
                    <TextField
                      fullWidth
                      label="Your Name"
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
                      label="Email Address"
                      variant="outlined"
                      name="email"
                      type="email"
                      value={formData.email}
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
                      label="Your Message"
                      variant="outlined"
                      name="message"
                      value={formData.message}
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
                    <Box sx={{ display: 'flex', gap: 2, pt: 1 }}>
                      <Button
                        type="submit"
                        variant="contained"
                        endIcon={<SendIcon />}
                        sx={{
                          background: 'linear-gradient(135deg, #FFD700 0%, #D4AF37 100%)',
                          color: '#000',
                          px: 4,
                          fontWeight: 600,
                          '&:hover': {
                            boxShadow: '0 0 20px rgba(255,215,0,0.5)'
                          }
                        }}
                      >
                        Send Message
                      </Button>
                      <Button
                        variant="outlined"
                        sx={{
                          color: 'white',
                          borderColor: 'rgba(255,255,255,0.3)',
                          px: 4,
                          '&:hover': {
                            borderColor: 'white'
                          }
                        }}
                      >
                        Clear
                      </Button>
                    </Box>
                  </Stack>
                </form>
              </Paper>
            </motion.div>
          </Grid>

          {/* Contact info */}
          <Grid item xs={12} md={6}>
            <Stack spacing={{ xs: 4, md: 6 }} height="100%">
              <motion.div variants={itemVariants}>
                <Paper
                  sx={{
                    background: 'rgba(20, 20, 20, 0.7)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '4px',
                    p: { xs: 3, md: 4 },
                    border: '1px solid rgba(255,215,0,0.2)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                    color: 'white'
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      mb: 3,
                      fontFamily: '"Playfair Display", serif',
                      fontWeight: 600,
                      color: 'gold'
                    }}
                  >
                    Contact Information
                  </Typography>
                  <Stack spacing={3}>
                    <Box sx={{ display: 'flex', gap: 3, color: 'white' }}>
                      <Box
                        sx={{
                          width: 50,
                          height: 50,
                          borderRadius: '50%',
                          background: 'rgba(255,215,0,0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: '1px solid rgba(255,215,0,0.3)',
                          flexShrink: 0
                        }}
                      >
                        <EmailIcon sx={{ color: 'gold', fontSize: 24 }} />
                      </Box>
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{ fontFamily: '"Playfair Display", serif' }}
                        >
                          Email Us
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            opacity: 0.8,
                            fontFamily: '"Cormorant Garamond", serif',
                            fontWeight: 300
                          }}
                        >
                          support@pixplorer.ai
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 3 }}>
                      <Box
                        sx={{
                          width: 50,
                          height: 50,
                          borderRadius: '50%',
                          background: 'rgba(255,215,0,0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: '1px solid rgba(255,215,0,0.3)',
                          flexShrink: 0
                        }}
                      >
                        <PhoneIcon sx={{ color: 'gold', fontSize: 24 }} />
                      </Box>
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{ fontFamily: '"Playfair Display", serif' }}
                        >
                          Call Us
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            opacity: 0.8,
                            fontFamily: '"Cormorant Garamond", serif',
                            fontWeight: 300
                          }}
                        >
                          +254 (742) 164-615
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 3 }}>
                      <Box
                        sx={{
                          width: 50,
                          height: 50,
                          borderRadius: '50%',
                          background: 'rgba(255,215,0,0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: '1px solid rgba(255,215,0,0.3)',
                          flexShrink: 0
                        }}
                      >
                        <LocationIcon sx={{ color: 'gold', fontSize: 24 }} />
                      </Box>
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{ fontFamily: '"Playfair Display", serif' }}
                        >
                          Visit Us
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            opacity: 0.8,
                            fontFamily: '"Cormorant Garamond", serif',
                            fontWeight: 300
                          }}
                        >
                          123 Kenya Lane, Creative District
                          <br />
                          Nairobi, NRB 94103
                        </Typography>
                      </Box>
                    </Box>
                  </Stack>
                </Paper>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Paper
                  sx={{
                    background: 'rgba(20, 20, 20, 0.7)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '4px',
                    p: { xs: 3, md: 4 },
                    border: '1px solid rgba(255,215,0,0.2)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      mb: 3,
                      fontFamily: '"Playfair Display", serif',
                      fontWeight: 600,
                      color: 'gold'
                    }}
                  >
                    Connect With Us
                  </Typography>
                  <Stack spacing={3}>
                    <Box>
                      <Typography
                        variant="body1"
                        sx={{
                          mb: 2,
                          fontFamily: '"Cormorant Garamond", serif',
                          fontWeight: 300,
                          color: "white"
                        }}
                      >
                        Follow us on social media for updates and inspiration:
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                        {socialLinks.map((social, index) => (
                          <Button
                            key={index}
                            variant="outlined"
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              color: 'gold',
                              borderColor: 'rgba(255,215,0,0.3)',
                              minWidth: 0,
                              px: 3,
                              py: 1,
                              '&:hover': {
                                borderColor: 'gold',
                                background: 'rgba(255,215,0,0.1)'
                              }
                            }}
                          >
                            <Box component="span" sx={{ mr: 1, fontSize: '1.2rem' }}>
                              {social.icon}
                            </Box>
                            {social.name}
                          </Button>
                        ))}
                      </Box>
                    </Box>
                    <Divider sx={{ borderColor: 'rgba(255,215,0,0.2)' }} />
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{
                        background: 'linear-gradient(135deg, rgba(255,215,0,0.2) 0%, rgba(255,215,0,0.1) 100%)',
                        color: 'gold',
                        py: 2,
                        border: '1px solid rgba(255,215,0,0.3)',
                        fontWeight: 600,
                        '&:hover': {
                          background: 'linear-gradient(135deg, rgba(255,215,0,0.3) 0%, rgba(255,215,0,0.2) 100%)'
                        }
                      }}
                    >
                      💬 Start Live Chat
                    </Button>
                    <Button
                      variant="text"
                      fullWidth
                      sx={{
                        color: 'gold',
                        textDecoration: 'underline',
                        '&:hover': {
                          textDecoration: 'none'
                        }
                      }}
                    >
                      View FAQ Section
                    </Button>
                  </Stack>
                </Paper>
              </motion.div>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Contact;