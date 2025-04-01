import React from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Stack, 
  useTheme,
  useMediaQuery,
  alpha,
  Divider
} from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import DiamondIcon from '@mui/icons-material/Diamond';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const FeatureCard = ({ icon,  title, description, badge, index }) => {
  const theme = useTheme();
  const controls = useAnimation();

  return (
    <Grid item xs={12} sm={6} md={3}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: index * 0.15 }}
        onHoverStart={() => controls.start("hover")}
        onHoverEnd={() => controls.start("rest")}
      >
        <Box
          sx={{
            height: '100%',
            p: 4,
            background: 'linear-gradient(145deg, #1a1a1a 0%, #252525 100%)',
            borderRadius: '16px',
            border: '1px solid rgba(255, 215, 0, 0.1)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Animated border bottom */}
          <motion.div
            variants={{
              rest: { width: '0%', opacity: 0 },
              hover: { width: '100%', opacity: 1 }
            }}
            animate={controls}
            transition={{ duration: 0.6 }}
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              height: '3px',
              background: 'linear-gradient(90deg, #FFD700, #D4AF37)',
            }}
          />

          {/* Feature badge */}
          {badge && (
            <Box
              component={motion.div}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ 
                delay: index * 0.15 + 0.3,
                type: 'spring',
                stiffness: 500,
                damping: 15
              }}
              sx={{
                position: 'absolute',
                top: 20,
                right: 20,
                px: 2,
                py: 0.5,
                background: alpha(theme.palette.warning.main, 0.2),
                border: '1px solid gold',
                borderRadius: '50px',
                fontSize: '0.7rem',
                fontWeight: 600,
                color: 'gold',
                zIndex: 2
              }}
            >
              {badge}
            </Box>
          )}

          {/* Icon */}
          <Box
            sx={{
              width: 80,
              height: 80,
              mb: 3,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(255, 215, 0, 0.05)',
              borderRadius: '12px',
              color: 'gold',
              fontSize: '2.5rem'
            }}
          >
            {icon}
          </Box>

          {/* Title */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              mb: 2,
              background: 'linear-gradient(90deg, #FFD700, #FFFFFF)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              display: 'inline-block'
            }}
          >
            {title}
          </Typography>

          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              mb: 3,
              minHeight: '72px',
              opacity: 0.8
            }}
          >
            {description}
          </Typography>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileHover={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              color: 'gold'
            }}
          >
            <Typography variant="caption" sx={{ fontWeight: 600, mr: 1 }}>
              Learn more
            </Typography>
            <ArrowForwardIcon fontSize="small" />
          </motion.div>

          {/* Decorative corner */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              width: '60px',
              height: '60px',
              borderRight: '2px solid rgba(255, 215, 0, 0.5)',
              borderBottom: '2px solid rgba(255, 215, 0, 0.5)',
              borderBottomRightRadius: '16px'
            }}
          />
        </Box>
      </motion.div>
    </Grid>
  );
};

const Features = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const features = [
    {
      icon: <DiamondIcon fontSize="inherit" />,
      title: "AI-Powered Promotion",
      description: "Our proprietary algorithm boosts your artwork's visibility across platforms, targeting ideal collectors and galleries.",
      badge: "MOST POPULAR"
    },
    {
      icon: <DiamondIcon fontSize="inherit" />,
      title: "Elite Branding Suite",
      description: "Full customization with luxury templates, watermarking, and SEO optimization for premium positioning.",
      badge: "EXCLUSIVE"
    },
    {
      icon: <DiamondIcon fontSize="inherit" />,
      title: "Wealth Analytics",
      description: "Real-time tracking of engagement, sales potential, and collector demographics with predictive insights.",
      badge: "PRO FEATURE"
    },
    {
      icon: <DiamondIcon fontSize="inherit" />,
      title: "Omni-Channel Distribution",
      description: "One-click publishing to elite platforms including Artsy, Saatchi Art, and Christie's digital.",
      badge: "NEW"
    },
    {
      icon: <DiamondIcon fontSize="inherit" />,
      title: "Smart Copyright Protection",
      description: "AI-driven watermarking and blockchain authentication to safeguard your intellectual property.",
      badge: "SECURE"
    },
    {
      icon: <DiamondIcon fontSize="inherit" />,
      title: "Interactive 3D Previews",
      description: "Showcase your artwork with lifelike 3D visualizations, allowing collectors to experience pieces in immersive detail.",
      badge: "INNOVATIVE"
    }
  ];
  

  return (
    <Box
      sx={{
        background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)',
        color: theme.palette.common.white,
        py: 15,
        px: isMobile ? 4 : 12,
        position: 'relative',
        overflow: 'hidden',
      }}
      id="features"
    >
      {/* Section header */}
      <Box 
        sx={{ 
          textAlign: 'center', 
          mb: 10,
          position: 'relative',
          zIndex: 2
        }}
      >
        <Typography
          variant="caption"
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          sx={{
            color: 'gold',
            letterSpacing: '4px',
            fontWeight: 600,
            display: 'block',
            mb: 3,
            textTransform: 'uppercase'
          }}
        >
          The Pixplorer Advantage
        </Typography>
        <Typography
          variant={isMobile ? 'h2' : 'h1'}
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          sx={{
            fontFamily: '"Playfair Display", serif',
            fontWeight: 700,
            mb: 3,
            background: 'linear-gradient(90deg, #FFD700, #FFFFFF)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            display: 'inline-block'
          }}
        >
          Unparalleled Creative Empowerment
        </Typography>
        <Divider 
          component={motion.div}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          sx={{ 
            width: '150px', 
            height: '3px', 
            background: 'linear-gradient(90deg, #FFD700, #D4AF37)', 
            mx: 'auto', 
            my: 5,
            border: 'none'
          }} 
        />
        <Typography
          variant={isMobile ? 'body1' : 'h5'}
          component={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          sx={{
            maxWidth: '800px',
            mx: 'auto',
            fontWeight: 300
          }}
        >
          Designed for discerning artists who demand excellence. Pixplorer's suite of tools elevates your 
          creative process to unprecedented levels of sophistication and reach.
        </Typography>
      </Box>

      <Grid 
  container 
  spacing={6}
  sx={{ 
    position: 'relative',
    zIndex: 2,
    width: '100%',
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, // Two columns per row
    gap: { xs: 4, md: 6 }
  }}
>
  {features.map((feature, index) => (
    <Grid 
      item 
      key={index} 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'stretch', // Ensures equal height
        width: '100%'
      }}
    >
      <FeatureCard 
        icon={feature.icon}
        title={feature.title}
        description={feature.description}
        badge={feature.badge}
        index={index}
        sx={{ 
          width: '100%', 
          maxWidth: '500px',  
          height: '100%', // ✅ Ensures equal height for all cards
          display: 'flex', 
          flexDirection: 'column',
        }} 
      />
    </Grid>
  ))}
</Grid>

    </Box>
  );
};

export default Features;