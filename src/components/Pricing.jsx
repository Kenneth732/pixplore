import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Stack, 
  Grid, 
  Button,
  Divider,
  useTheme,
  useMediaQuery,
  alpha,
  Fade
} from '@mui/material';
import { 
  Diamond as DiamondIcon,
  Check as CheckIcon,
  Star as StarIcon,
  Bolt as BoltIcon,
  WorkspacePremium as PremiumIcon,
  AutoAwesome as SparkleIcon,
  Security as SecurityIcon
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const Pricing = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [selectedPlan, setSelectedPlan] = useState('premium');
  const [hoveredPlan, setHoveredPlan] = useState(null);

  // Pricing plans data
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for beginners exploring AI art",
      cta: "Get Started",
      featured: false,
      icon: <SparkleIcon fontSize="small" />,
      features: [
        "5 AI art generations per day",
        "Basic artistic styles",
        "Standard resolution (1024px)",
        "Watermarked outputs",
        "Community support"
      ]
    },
    {
      name: "Premium",
      price: "$29",
      period: "/month",
      description: "For serious creators and professionals",
      cta: "Start 7-Day Free Trial",
      featured: true,
      icon: <PremiumIcon fontSize="small" />,
      features: [
        "Unlimited AI art generations",
        "100+ premium artistic styles",
        "High resolution (2048px)",
        "No watermarks",
        "Priority generation queue",
        "Commercial usage rights",
        "Premium support",
        "Early access to new features"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For studios and large teams",
      cta: "Contact Sales",
      featured: false,
      icon: <SecurityIcon fontSize="small" />,
      features: [
        "Everything in Premium",
        "Dedicated AI instances",
        "Custom model training",
        "Team collaboration tools",
        "API access",
        "Dedicated account manager",
        "SLA guarantees",
        "White-glove onboarding"
      ]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.1, 0.8, 0.2, 1]
      }
    }
  };

  const glowVariant = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: [0, 0.3, 0],
      scale: 1.2,
      transition: { 
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <Box 
      sx={{
        background: 'radial-gradient(ellipse at top, #0a0a0a 0%, #000000 100%)',
        color: theme.palette.common.white,
        py: 12,
        px: isMobile ? 4 : 15,
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255,215,0,0.1)'
      }}
    >
      {/* Luxury decorative elements */}
      <Box
        component={motion.div}
        variants={glowVariant}
        initial="initial"
        animate="animate"
        sx={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, rgba(255,215,0,0.15) 0%, rgba(255,215,0,0) 70%)',
          borderRadius: '50%',
          zIndex: 0,
        }}
      />
      
      <Box
        component={motion.div}
        variants={glowVariant}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.5 }}
        sx={{
          position: 'absolute',
          bottom: '10%',
          right: '15%',
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(255,215,0,0.1) 0%, rgba(255,215,0,0) 70%)',
          borderRadius: '50%',
          zIndex: 0,
        }}
      />

      {/* Luxury border accents */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 4,
        background: 'linear-gradient(90deg, transparent 0%, gold 50%, transparent 100%)',
        opacity: 0.3
      }} />
      
      <Box sx={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 4,
        background: 'linear-gradient(90deg, transparent 0%, gold 50%, transparent 100%)',
        opacity: 0.3
      }} />

      {/* Section header */}
      <Box 
        component={motion.div}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        sx={{ 
          textAlign: 'center',
          mb: 10,
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
            fontSize: '0.9rem',
            textTransform: 'uppercase'
          }}
        >
          <DiamondIcon fontSize="small" sx={{ color: 'gold' }} />
          Exclusive Membership Tiers
          <DiamondIcon fontSize="small" sx={{ color: 'gold' }} />
        </Typography>
        
        <Typography 
          variant="h2" 
          sx={{ 
            fontFamily: '"Playfair Display", serif',
            fontWeight: 700,
            lineHeight: 1.2,
            fontSize: isMobile ? '2.5rem' : '3.5rem',
            mb: 2,
            background: 'linear-gradient(90deg, #FFFFFF 0%, #FFD700 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Elevate Your Creative Journey
        </Typography>
        
        <Typography 
          variant="subtitle1"
          sx={{
            maxWidth: 700,
            margin: '0 auto',
            opacity: 0.8,
            fontSize: '1.1rem',
            lineHeight: 1.6
          }}
        >
          Select the perfect tier for your artistic ambitions. Each level unlocks 
          new dimensions of creative potential.
        </Typography>
      </Box>

      {/* Pricing plans */}
      <Grid 
        container 
        spacing={4}
        justifyContent="center"
        alignItems="stretch"
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {plans.map((plan, index) => (
          <Grid 
            item 
            xs={12}
            sm={6}
            lg={4}
            key={index}
            component={motion.div}
            variants={itemVariants}
            sx={{ display: 'flex' }}
            onMouseEnter={() => setHoveredPlan(index)}
            onMouseLeave={() => setHoveredPlan(null)}
          >
            <Box
              component={motion.div}
              whileHover={{ y: -10 }}
              animate={{
                borderColor: hoveredPlan === index ? 'rgba(255,215,0,0.5)' : 
                          plan.featured ? 'gold' : 'rgba(255,215,0,0.1)',
                boxShadow: hoveredPlan === index ? '0 15px 50px rgba(255, 215, 0, 0.4)' : 
                          plan.featured ? '0 10px 40px rgba(255, 215, 0, 0.3)' : '0 10px 30px rgba(0, 0, 0, 0.3)'
              }}
              sx={{
                background: plan.featured 
                  ? 'linear-gradient(135deg, rgba(25,25,25,0.95) 0%, rgba(15,15,15,0.95) 100%)' 
                  : 'linear-gradient(135deg, rgba(30,30,30,0.8) 0%, rgba(20,20,20,0.8) 100%)',
                backdropFilter: 'blur(12px)',
                borderRadius: '20px',
                p: 5,
                flex: 1,
                border: '1px solid',
                borderColor: plan.featured ? 'gold' : 'rgba(255,215,0,0.1)',
                boxShadow: plan.featured 
                  ? '0 10px 40px rgba(255, 215, 0, 0.3)' 
                  : '0 10px 30px rgba(0, 0, 0, 0.3)',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                zIndex: 1,
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '5px',
                  background: plan.featured ? 
                    'linear-gradient(90deg, #FFD700 0%, #D4AF37 100%)' : 
                    'linear-gradient(90deg, rgba(255,215,0,0.5) 0%, rgba(255,215,0,0.1) 100%)'
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  width: '100%',
                  height: '100%',
                  background: 'radial-gradient(circle at 70% 80%, rgba(255,215,0,0.05) 0%, transparent 60%)',
                  opacity: hoveredPlan === index ? 1 : 0,
                  transition: 'opacity 0.4s ease'
                }
              }}
            >
              {/* Floating diamond particles */}
              <AnimatePresence>
                {hoveredPlan === index && (
                  <>
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ 
                          opacity: [0, 0.8, 0],
                          scale: 1,
                          x: Math.random() * 100 - 50,
                          y: Math.random() * 100 - 50
                        }}
                        transition={{ 
                          duration: 2,
                          delay: i * 0.2,
                          repeat: Infinity,
                          repeatDelay: 3
                        }}
                        style={{
                          position: 'absolute',
                          color: 'gold',
                          fontSize: '1rem'
                        }}
                      >
                        <DiamondIcon fontSize="inherit" />
                      </motion.div>
                    ))}
                  </>
                )}
              </AnimatePresence>

              {plan.featured && (
                <Box
                  component={motion.div}
                  initial={{ rotate: -45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  sx={{
                    position: 'absolute',
                    top: 20,
                    right: 20,
                    px: 2.5,
                    py: 1,
                    background: 'linear-gradient(135deg, #FFD700 0%, #D4AF37 100%)',
                    color: theme.palette.getContrastText('#FFD700'),
                    borderRadius: '6px',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.8,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    boxShadow: '0 4px 15px rgba(255, 215, 0, 0.5)',
                    zIndex: 2
                  }}
                >
                  <StarIcon fontSize="small" />
                  Most Popular
                </Box>
              )}
              
              <Stack spacing={3.5} height="100%">
                {/* Plan header */}
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                    {plan.icon && React.cloneElement(plan.icon, {
                      sx: { 
                        color: plan.featured ? 'gold' : 'rgba(255,255,255,0.7)',
                        fontSize: '2rem'
                      }
                    })}
                    <Typography 
                      variant="h4" 
                      sx={{ 
                        fontWeight: 700,
                        letterSpacing: '0.5px',
                        color: plan.featured ? 'gold' : 'inherit'
                      }}
                    >
                      {plan.name}
                    </Typography>
                  </Box>
                  <Typography variant="body1" sx={{ 
                    opacity: 0.8,
                    fontStyle: 'italic',
                    fontSize: '0.95rem'
                  }}>
                    {plan.description}
                  </Typography>
                </Box>

                {/* Price */}
                <Box sx={{ my: 2 }}>
                  <Typography 
                    variant="h2" 
                    sx={{ 
                      fontWeight: 700,
                      lineHeight: 1,
                      color: plan.featured ? 'gold' : 'inherit',
                      fontFamily: '"Playfair Display", serif',
                      fontSize: isMobile ? '2.5rem' : '3rem'
                    }}
                  >
                    {plan.price}
                    {plan.period && (
                      <Box 
                        component="span" 
                        sx={{ 
                          fontSize: '1.2rem',
                          opacity: 0.7,
                          ml: 0.5,
                          fontWeight: 400
                        }}
                      >
                        {plan.period}
                      </Box>
                    )}
                  </Typography>
                </Box>

                {/* Features */}
                <Stack spacing={2.5} sx={{ flexGrow: 1 }}>
                  {plan.features.map((feature, i) => (
                    <Box 
                      key={i}
                      sx={{ 
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 2
                      }}
                    >
                      <CheckIcon 
                        sx={{ 
                          color: plan.featured ? 'gold' : 'rgba(255,255,255,0.7)',
                          fontSize: '1.2rem',
                          mt: '2px',
                          minWidth: '24px'
                        }} 
                      />
                      <Typography variant="body1" sx={{ lineHeight: 1.5 }}>
                        {feature}
                      </Typography>
                    </Box>
                  ))}
                </Stack>

                {/* CTA button */}
                <Box sx={{ mt: 'auto', pt: 3 }}>
                  <Button
                    fullWidth
                    variant={plan.featured ? "contained" : "outlined"}
                    size="large"
                    sx={{
                      py: 1.8,
                      borderRadius: '50px',
                      fontWeight: 600,
                      fontSize: '1rem',
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase',
                      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                      position: 'relative',
                      overflow: 'hidden',
                      ...(plan.featured ? {
                        background: 'linear-gradient(135deg, #FFD700 0%, #D4AF37 100%)',
                        color: theme.palette.getContrastText('#FFD700'),
                        boxShadow: '0 5px 20px rgba(255, 215, 0, 0.4)',
                        '&:hover': {
                          transform: 'translateY(-3px)',
                          boxShadow: '0 8px 25px rgba(255, 215, 0, 0.6)'
                        }
                      } : {
                        color: 'white',
                        borderColor: 'rgba(255,255,255,0.3)',
                        '&:hover': {
                          borderColor: 'gold',
                          color: 'gold',
                          backgroundColor: 'rgba(255,215,0,0.05)'
                        }
                      }),
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: '-50%',
                        left: '-50%',
                        width: '200%',
                        height: '200%',
                        background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)',
                        transform: 'rotate(45deg)',
                        transition: 'all 0.6s ease'
                      },
                      '&:hover::after': {
                        left: '100%'
                      }
                    }}
                  >
                    {plan.cta}
                  </Button>
                </Box>
              </Stack>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Luxury comparison table */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        sx={{
          mt: 12,
          background: 'linear-gradient(135deg, rgba(25,25,25,0.9) 0%, rgba(15,15,15,0.9) 100%)',
          backdropFilter: 'blur(12px)',
          borderRadius: '20px',
          p: 5,
          border: '1px solid rgba(255,215,0,0.2)',
          position: 'relative',
          zIndex: 1,
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle at 20% 30%, rgba(255,215,0,0.03) 0%, transparent 60%)',
            pointerEvents: 'none'
          }
        }}
      >
        <Typography 
          variant="h4" 
          sx={{ 
            mb: 4,
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            fontFamily: '"Playfair Display", serif',
            color: 'gold'
          }}
        >
          <BoltIcon sx={{ fontSize: '2rem' }} />
          Detailed Feature Comparison
        </Typography>
        
        <Box sx={{ 
          overflowX: 'auto',
          '&::-webkit-scrollbar': {
            height: '6px'
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'rgba(255,215,0,0.3)',
            borderRadius: '3px'
          }
        }}>
          <Box component="table" sx={{ 
            width: '100%', 
            borderCollapse: 'separate',
            borderSpacing: 0
          }}>
            <thead>
              <tr>
                <th style={{ 
                  textAlign: 'left', 
                  padding: '16px 24px', 
                  borderBottom: '1px solid rgba(255,215,0,0.3)',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                  opacity: 0.8
                }}>
                  Feature
                </th>
                {plans.map((plan, i) => (
                  <th key={i} style={{ 
                    textAlign: 'center', 
                    padding: '16px 24px', 
                    borderBottom: '1px solid rgba(255,215,0,0.3)',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    color: plan.featured ? 'gold' : 'inherit',
                    opacity: plan.featured ? 1 : 0.8
                  }}>
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { feature: "AI Generations", values: ["5/day", "Unlimited", "Unlimited+"] },
                { feature: "Resolution", values: ["1024px", "2048px", "4K+"] },
                { feature: "Art Styles", values: ["10 Basic", "100+ Premium", "Custom"] },
                { feature: "Watermarks", values: ["Yes", "No", "No"] },
                { feature: "Commercial Rights", values: ["No", "Yes", "Yes"] },
                { feature: "Support", values: ["Community", "Priority", "Dedicated"] },
                { feature: "Generation Speed", values: ["Standard", "Priority", "Dedicated"] },
                { feature: "API Access", values: ["No", "Limited", "Full"] },
                { feature: "Team Members", values: ["1", "1", "Unlimited"] }
              ].map((row, i) => (
                <tr key={i}>
                  <td style={{ 
                    padding: '16px 24px', 
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                    fontWeight: 500
                  }}>
                    {row.feature}
                  </td>
                  {row.values.map((value, j) => (
                    <td key={j} style={{ 
                      textAlign: 'center', 
                      padding: '16px 24px', 
                      borderBottom: '1px solid rgba(255,255,255,0.05)',
                      color: plans[j].featured ? 'gold' : 'inherit',
                      fontWeight: plans[j].featured ? 500 : 400
                    }}>
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Box>
        </Box>
      </Box>

      {/* Luxury footer note */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: true }}
        sx={{
          mt: 8,
          textAlign: 'center',
          position: 'relative',
          zIndex: 1
        }}
      >
        <Typography variant="body2" sx={{ 
          opacity: 0.7,
          fontStyle: 'italic',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1
        }}>
          <DiamondIcon fontSize="small" sx={{ color: 'gold', fontSize: '1rem' }} />
          All plans come with our 30-day satisfaction guarantee
          <DiamondIcon fontSize="small" sx={{ color: 'gold', fontSize: '1rem' }} />
        </Typography>
      </Box>
    </Box>
  );
};

export default Pricing;