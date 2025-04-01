import React from 'react';
import {
  Box,
  Typography,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useMediaQuery,
  useTheme,
  alpha
} from '@mui/material';
import { Button } from '@mui/material';

import {
  ExpandMore as ExpandMoreIcon,
  Help as HelpIcon,
  Diamond as DiamondIcon
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const Faq = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [expanded, setExpanded] = React.useState(null);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  // FAQ data
  const faqs = [
    {
      question: "How does the AI art generation process work?",
      answer: "Our platform uses cutting-edge neural networks to transform your inputs into stunning artwork. Simply describe your vision or upload a reference image, select from our premium styles, and our AI will generate multiple variations for you to choose from. Each creation is unique and can be refined to your exact specifications."
    },
    {
      question: "What makes Pixplorer different from other AI art tools?",
      answer: "Pixplorer offers exclusive high-resolution outputs with museum-quality detail, a curated collection of premium artistic styles you won't find elsewhere, and certified digital ownership of your creations. Our platform is designed specifically for discerning artists and collectors who demand the finest quality AI-generated art."
    },
    {
      question: "Can I use the generated artwork commercially?",
      answer: "Yes, all artwork generated with our Premium and Professional plans comes with full commercial rights. We provide certification of authenticity and ownership for each piece. For exclusive limited editions, additional licensing options are available to ensure your artwork maintains its collector's value."
    },
    {
      question: "How long does it take to generate artwork?",
      answer: "Standard generations typically complete in under 30 seconds for most styles. Our high-fidelity premium styles may take 1-2 minutes to render the exceptional detail we're known for. You'll receive a notification when your artwork is ready for review."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and cryptocurrency (BTC, ETH). For enterprise clients and high-volume creators, we also offer wire transfer options and custom billing arrangements. All transactions are secured with bank-level encryption."
    },
    {
      question: "How can I ensure my artwork remains exclusive?",
      answer: "We offer exclusive generation options that permanently retire the style parameters used for your artwork, ensuring it remains one-of-a-kind. Each limited edition piece is cryptographically registered on the blockchain for provenance tracking and authenticity verification."
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
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
          FREQUENTLY ASKED QUESTIONS
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
          Your <Box component="span" sx={{ color: 'gold' }}>Questions</Box> Answered
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
          Find answers to common inquiries about our premium AI art generation platform.
        </Typography>
      </Box>

      {/* FAQ Accordions */}
      <Box
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        sx={{
          maxWidth: '1000px',
          mx: 'auto',
          position: 'relative',
          zIndex: 1
        }}
      >
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            style={{ marginBottom: 16 }}
          >
            <Accordion
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              sx={{
                background: 'rgba(20, 20, 20, 0.7)',
                backdropFilter: 'blur(10px)',
                border: '1px solid',
                borderColor: expanded === `panel${index}` ? 'rgba(255,215,0,0.3)' : 'rgba(255,215,0,0.1)',
                boxShadow: 'none',
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: 'rgba(255,215,0,0.3)'
                },
                '&:before': {
                  display: 'none'
                }
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon sx={{ color: expanded === `panel${index}` ? 'gold' : 'rgba(255,255,255,0.7)' }} />
                }
                sx={{
                  minHeight: 70,
                  '& .MuiAccordionSummary-content': {
                    alignItems: 'center',
                    gap: 2
                  }
                }}
              >
                <HelpIcon sx={{ color: 'gold', fontSize: 24 }} />
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: '"Playfair Display", serif',
                    fontWeight: 600,
                    color: expanded === `panel${index}` ? 'gold' : 'white'
                  }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  background: 'rgba(0,0,0,0.2)',
                  borderTop: '1px solid rgba(255,215,0,0.1)',
                  pt: 3,
                  pb: 4,
                  px: 4
                }}
              >
                <AnimatePresence>
                  {expanded === `panel${index}` && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          fontFamily: '"Cormorant Garamond", serif',
                          fontWeight: 300,
                          lineHeight: 1.7,
                          fontSize: '1.1rem',
                          color: 'white'
                        }}
                      >
                        {faq.answer}
                      </Typography>
                    </motion.div>
                  )}
                </AnimatePresence>
              </AccordionDetails>
            </Accordion>
          </motion.div>
        ))}
      </Box>

      {/* CTA Section */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
        sx={{
          textAlign: 'center',
          mt: { xs: 6, md: 8 },
          position: 'relative',
          zIndex: 1
        }}
      >
        <Typography
          variant="h5"
          sx={{
            mb: 3,
            fontFamily: '"Playfair Display", serif',
            fontWeight: 600,
            color: 'white',
            fontSize: { xs: '1.3rem', md: '1.5rem' }
          }}
        >
          Still have questions?
        </Typography>
        <Button
          variant="contained"
          href="#contact"
          sx={{
            background: 'linear-gradient(135deg, #FFD700 0%, #D4AF37 100%)',
            color: '#000',
            px: 5,
            py: 1.5,
            borderRadius: '4px',
            fontWeight: 600,
            fontSize: '1rem',
            '&:hover': {
              boxShadow: '0 0 20px rgba(255,215,0,0.5)'
            }
          }}
        >
          Contact Our Support Team
        </Button>
      </Box>
    </Box>
  );
};

export default Faq;