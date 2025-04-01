import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Divider,
  Link,
  TextField,
  IconButton,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { Button } from '@mui/material';

import {
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  Facebook as FacebookIcon,
  LinkedIn as LinkedInIcon,
  Pinterest as PinterestIcon,
  Diamond as DiamondIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Footer links data
  const footerLinks = [
    {
      title: 'Explore',
      links: [
        { name: 'Features', url: '#features' },
        { name: 'Pricing', url: '#pricing' },
        { name: 'Gallery', url: '#gallery' },
        { name: 'Showcase', url: '#showcase' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', url: '#about' },
        { name: 'Contact', url: '#contact' },
        { name: 'Careers', url: '#careers' },
        { name: 'Press', url: '#press' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Terms of Service', url: '#terms' },
        { name: 'Privacy Policy', url: '#privacy' },
        { name: 'Cookie Policy', url: '#cookies' },
        { name: 'GDPR', url: '#gdpr' }
      ]
    }
  ];

  // Social media links
  const socialMedia = [
    { icon: <TwitterIcon />, url: '#', name: 'Twitter' },
    { icon: <InstagramIcon />, url: '#', name: 'Instagram' },
    { icon: <FacebookIcon />, url: '#', name: 'Facebook' },
    { icon: <LinkedInIcon />, url: '#', name: 'LinkedIn' },
    { icon: <PinterestIcon />, url: '#', name: 'Pinterest' }
  ];

  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #121212 100%)',
        color: theme.palette.common.white,
        pt: 8,
        pb: 4,
        px: { xs: 4, md: 8, lg: 12 },
        borderTop: '1px solid rgba(255,215,0,0.1)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Decorative diamond pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(255,215,0,0.3), transparent)'
        }}
      />
      
      {/* Floating diamond decorations */}
      {[...Array(6)].map((_, i) => (
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
            width: 6,
            height: 6,
            background: 'gold',
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            zIndex: 0
          }}
        />
      ))}

      <Box
        sx={{
          maxWidth: '1500px',
          mx: 'auto',
          position: 'relative',
          zIndex: 1
        }}
      >
        <Grid container spacing={6} maxWidth="2050" width="100%">
          {/* Logo/Brand section */}
          <Grid item xs={12} md={4}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              sx={{ mb: 3 }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <DiamondIcon sx={{ color: 'gold', fontSize: 32 }} />
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: '"Playfair Display", serif',
                    fontWeight: 700,
                    background: 'linear-gradient(135deg, #FFD700 0%, #D4AF37 100%)',
                    backgroundClip: 'text',
                    color: 'transparent',
                    WebkitBackgroundClip: 'text'
                  }}
                >
                  PIXPLORER
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  opacity: 0.7,
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 300,
                  lineHeight: 1.6,
                  mb: 3
                }}
              >
                The premier platform for luxury AI-generated art and digital collectibles.
              </Typography>
              
              {/* Social media links */}
              <Box sx={{ display: 'flex', gap: 1 }}>
                {socialMedia.map((social, index) => (
                  <IconButton
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    component={motion.a}
                    whileHover={{ y: -3 }}
                    sx={{
                      color: 'rgba(255,255,255,0.7)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      '&:hover': {
                        color: 'gold',
                        borderColor: 'rgba(255,215,0,0.3)',
                        background: 'rgba(255,215,0,0.1)'
                      }
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Footer links */}
          {footerLinks.map((column, colIndex) => (
            <Grid item xs={12} sm={4} md={2} key={colIndex}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: colIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    mb: 3,
                    fontFamily: '"Playfair Display", serif',
                    fontWeight: 600,
                    color: 'gold',
                    fontSize: '1.1rem'
                  }}
                >
                  {column.title}
                </Typography>
                <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                  {column.links.map((link, linkIndex) => (
                    <Box
                      component="li"
                      key={linkIndex}
                      sx={{ mb: 1.5 }}
                    >
                      <Link
                        href={link.url}
                        component={motion.a}
                        whileHover={{ x: 5 }}
                        sx={{
                          color: 'rgba(255,255,255,0.7)',
                          textDecoration: 'none',
                          fontFamily: '"Cormorant Garamond", serif',
                          fontWeight: 300,
                          fontSize: '1rem',
                          position: 'relative',
                          '&:hover': {
                            color: 'gold',
                            '&::before': {
                              content: '"»"',
                              position: 'absolute',
                              left: -15,
                              color: 'gold'
                            }
                          }
                        }}
                      >
                        {link.name}
                      </Link>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
          ))}

          {/* Newsletter/CTA */}
          <Grid item xs={12} md={4}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h6"
                sx={{
                  mb: 3,
                  fontFamily: '"Playfair Display", serif',
                  fontWeight: 600,
                  color: 'gold',
                  fontSize: '1.1rem'
                }}
              >
                Join Our Collector's Circle
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  opacity: 0.7,
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 300,
                  lineHeight: 1.6,
                  mb: 3
                }}
              >
                Receive exclusive early access to new features and limited edition collections.
              </Typography>
              <Box
                component="form"
                sx={{
                  display: 'flex',
                  gap: 2,
                  flexDirection: isMobile ? 'column' : 'row'
                }}
              >
                <TextField
                  variant="outlined"
                  placeholder="Your email"
                  size="small"
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'rgba(255,215,0,0.3)'
                      },
                      '&:hover fieldset': {
                        borderColor: 'gold'
                      }
                    },
                    '& .MuiInputBase-input': {
                      color: 'white',
                      py: 1.5
                    }
                  }}
                />
                <Button
                  variant="contained"
                  sx={{
                    background: 'linear-gradient(135deg, #FFD700 0%, #D4AF37 100%)',
                    color: '#000',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                    px: 4,
                    '&:hover': {
                      boxShadow: '0 0 15px rgba(255,215,0,0.5)'
                    }
                  }}
                >
                  Subscribe
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Divider */}
        <Divider
          sx={{
            my: 6,
            borderColor: 'rgba(255,215,0,0.1)',
            width: '100%'
          }}
        />

        {/* Copyright and bottom links */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column-reverse' : 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2
          }}
        >
          <Typography
            variant="body2"
            sx={{
              opacity: 0.6,
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 300
            }}
          >
            © {new Date().getFullYear()} Pixplorer AI. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Link
              href="#terms"
              variant="body2"
              sx={{
                color: 'rgba(255,255,255,0.6)',
                textDecoration: 'none',
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 300,
                '&:hover': {
                  color: 'gold'
                }
              }}
            >
              Terms of Service
            </Link>
            <Link
              href="#privacy"
              variant="body2"
              sx={{
                color: 'rgba(255,255,255,0.6)',
                textDecoration: 'none',
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 300,
                '&:hover': {
                  color: 'gold'
                }
              }}
            >
              Privacy Policy
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;