import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import BarChartIcon from '@mui/icons-material/BarChart';
import DevicesIcon from '@mui/icons-material/Devices';

const features = [
  {
    icon: <AutoGraphIcon sx={{ fontSize: 48, color: 'gold' }} />,
    title: "AI-Powered Promotion",
    description: "Boost your visibility with intelligent AI-driven promotions tailored to your audience."
  },
  {
    icon: <BrandingWatermarkIcon sx={{ fontSize: 48, color: 'gold' }} />,
    title: "Custom Branding & SEO",
    description: "Enhance your brand identity with customizable branding and SEO optimization for better reach."
  },
  {
    icon: <BarChartIcon sx={{ fontSize: 48, color: 'gold' }} />,
    title: "Analytics Dashboard",
    description: "Track performance with real-time analytics to improve your strategy and engagement."
  },
  {
    icon: <DevicesIcon sx={{ fontSize: 48, color: 'gold' }} />,
    title: "Multi-Platform Support",
    description: "Seamlessly integrate with multiple platforms to maximize your reach and accessibility."
  }
];

const FeaturesSection = () => {
  return (
    <Box sx={{ py: 8, px: 4, textAlign: 'center', background: '#121212', color: 'white' }}>
      <Typography 
        variant="h4" 
        sx={{ fontWeight: 700, mb: 3, textTransform: 'uppercase', color: 'gold' }}
      >
        Why Use Pixplorer?
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ background: '#1a1a1a', color: 'white', textAlign: 'center', p: 2, boxShadow: '0 4px 15px rgba(255, 215, 0, 0.2)' }}>
              <CardContent>
                {feature.icon}
                <Typography variant="h6" sx={{ mt: 2, fontWeight: 600 }}>{feature.title}</Typography>
                <Typography variant="body2" sx={{ mt: 1, opacity: 0.7 }}>{feature.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturesSection;
