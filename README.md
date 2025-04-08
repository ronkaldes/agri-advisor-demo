
# אדמה חכמה (Smart Soil) - Agricultural Management Platform

![Smart Soil Logo](/lovable-uploads/eced0445-d0fb-449c-9a15-430f8d48e9c9.png)

## Overview

אדמה חכמה (Smart Soil) is a comprehensive agricultural management system designed specifically for Israeli farmers. The platform provides real-time insights, data visualization, and management tools to help farmers make data-driven decisions, optimize crop yields, and improve resource management.

## Features

### Dashboard & Analytics
- **Real-time Overview**: Get a comprehensive view of all farm activities, field status, and upcoming tasks
- **Weather Data**: Access current and forecasted weather conditions with agricultural recommendations
- **Interactive Charts**: Visualize key metrics such as temperature, rainfall, and humidity trends
- **Resource Tracking**: Monitor machine usage, field time, and activity distribution

### Field Management
- **Interactive Map**: Satellite view of all agricultural fields with detailed information
- **Field Status Monitoring**: Track each field's health status with visual indicators (normal, warning, alert)
- **Activity Planning**: Schedule and monitor field activities like irrigation, fertilization, and spraying
- **Area Calculation**: Automatic calculation of field sizes in dunams (דונם)

### Weather & Environmental Data
- **7-Day Forecast**: Detailed weather prediction with temperature, humidity, and rainfall chances
- **Agricultural Recommendations**: Weather-based suggestions for farming activities
- **Historical Data**: Access and analyze past weather patterns
- **Custom Alerts**: Receive warnings about extreme weather conditions that might affect crops

### Solar Radiation Tracking
- **Daily Radiation Curves**: Monitor solar radiation throughout the day
- **Monthly Averages**: Compare current solar radiation with historical averages
- **Energy Optimization**: Recommendations for utilizing solar energy efficiently in agricultural operations

### AI Agricultural Advisor
- **Smart Recommendations**: AI-powered advice based on crop type, weather conditions, and field status
- **Issue Diagnosis**: Help identify potential crop diseases and pest problems
- **Resource Optimization**: Suggestions for efficient water and fertilizer usage

### Mobile-Friendly Interface
- **Responsive Design**: Access the platform from any device - desktop, tablet, or smartphone
- **Hebrew Interface**: Fully localized for Israeli farmers with right-to-left (RTL) support
- **Intuitive Navigation**: Easy-to-use sidebar for quick access to all platform features

## Technical Information

### Tech Stack

#### Frontend
- **React**: Core library for building the user interface
- **TypeScript**: For type-safe code development
- **Vite**: Modern frontend build tool for faster development
- **Tailwind CSS**: Utility-first CSS framework for styling
- **shadcn/ui**: High-quality UI components built with Radix UI and Tailwind
- **Recharts**: Composable charting library for data visualization
- **React Router**: For handling page navigation
- **Lucide React**: Modern icon set for the user interface
- **Google Maps API**: For interactive field mapping and visualization

#### CSS Features
- **RTL Support**: Full right-to-left language support for Hebrew
- **Responsive Design**: Mobile-first approach ensuring usability on all devices
- **Custom Agriculture Theme**: Specialized color palette for agricultural visualization

### Development

#### Prerequisites
- Node.js (version 18 or higher)
- npm or bun package manager

#### Installation
```bash
# Clone the repository
git clone [repository-url]

# Navigate to project directory
cd adama-smart

# Install dependencies
npm install
# or
bun install

# Start development server
npm run dev
# or
bun dev
```

#### Environment Configuration
The application requires the following environment variables:
- `VITE_GOOGLE_MAPS_API_KEY`: Google Maps API key for mapping functionality

#### Building for Production
```bash
# Create optimized production build
npm run build
# or
bun run build

# Preview production build locally
npm run preview
# or
bun run preview
```

## Usage Examples

### Field Management
1. Navigate to the dashboard to see an overview of all fields
2. Click on any field in the map to see detailed information
3. Schedule new activities through the field detail page
4. Monitor upcoming activities in the sidebar widget

### Weather Monitoring
1. Check the weather widget on the dashboard for current conditions
2. Visit the weather page for detailed 7-day forecast
3. Review agricultural recommendations based on upcoming weather patterns

### Using the AI Advisor
1. Navigate to the Advisor section
2. Ask questions about crop management, disease identification, or resource optimization
3. Receive AI-powered recommendations specific to your farm's conditions

## Deployment

The application can be deployed to any modern hosting platform that supports static site hosting, such as:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## License

© 2025 Smart Soil Agricultural Solutions. All rights reserved.

## Support

For technical support or feature requests, please contact:
support@adama-smart.co.il

---

*This platform is currently in active development. Features and interfaces may change as we continuously improve the system based on farmer feedback.*
