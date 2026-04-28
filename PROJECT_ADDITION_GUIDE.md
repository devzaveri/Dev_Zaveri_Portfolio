# How to Add New Projects to Your Portfolio

## Quick Overview
To add a new project, you need to:
1. Add project images to the appropriate folder
2. Update the projects array in `src/sections/Projects.js`
3. Update the categories if needed

## Step-by-Step Guide

### Step 1: Add Project Images
1. Create a new folder for your project in `src/Projects/`
2. Add your project screenshots (PNG format recommended)
3. Name them consistently (e.g., `ProjectName1.png`, `ProjectName2.png`, `ProjectName3.png`)

Example folder structure:
```
src/Projects/
├── YourProjectName/
│   ├── YourProjectName1.png
│   ├── YourProjectName2.png
│   └── YourProjectName3.png
├── Lawhub/
├── Sonata/
└── ...
```

### Step 2: Add Project to the Projects Array
Open `src/sections/Projects.js` and add a new project object to the `projects` array:

```javascript
{
  id: 5, // Use the next available number
  title: "Your Project Name",
  category: "Your Category",
  description: `Brief description of your project highlighting key features and technologies used.`,
  technicalFocus: [
    "Key technical implementation 1",
    "Key technical implementation 2",
    "Key technical implementation 3",
    "Key technical implementation 4",
    "Key technical implementation 5",
  ],
  frontendSkills: [
    "React Native",
    "React Navigation",
    "Function Components",
    "Hooks (useState, useEffect, ...)",
    "Styled Components",
    "React Animation",
    "Third-Party Libraries (...)",
    "UI/UX Optimization",
  ],
  mobileSkills: [
    "Android Development",
    "iOS Development",
    "Native Modules (...)",
    "Performance Optimization",
    "State Management (...)",
    "Mobile UI/UX",
  ],
  backendSkills: [
    "Redux/Context API",
    "AsyncStorage",
    "Axios",
    "API Integration",
    "Data Caching",
    "Serverless Computing",
    "Cloud Storage (AWS, Azure, ...)",
  ],
  devOpsSkills: [
    "Git & GitHub",
    "CI/CD Pipeline",
    "Code Review",
    "Testing (...)",
  ],
  images: [
    require("../Projects/YourProjectName/YourProjectName1.png"),
    require("../Projects/YourProjectName/YourProjectName2.png"),
    require("../Projects/YourProjectName/YourProjectName3.png"),
  ],
  technologies: [
    "React Native",
    "React Navigation",
    "AsyncStorage",
    "Styled Components",
    "Redux",
    "REST APIs",
    "Custom Hooks",
    "i18n",
  ],
  github: "https://github.com/yourusername/yourproject",
  demo: "https://yourproject-demo.com",
  featured: false, // Set to true for featured projects
}
```

### Step 3: Update Categories (Optional)
If you're adding a new category, update the categories array in the same file:

```javascript
const categories = ["All", "Legal Tech", "Wellness", "Food Delivery", "NFT Marketplace", "Your New Category"];
```

## Project Template (Copy & Paste)

Here's a ready-to-use template for your new project:

```javascript
{
  id: 5,
  title: "Your Project Name",
  category: "Your Category",
  description: `Your project description - focus on technical achievements and features.`,
  technicalFocus: [
    "Main technical achievement 1",
    "Main technical achievement 2",
    "Main technical achievement 3",
    "Main technical achievement 4",
    "Main technical achievement 5",
  ],
  frontendSkills: [
    "React Native",
    "React Navigation",
    "Function Components",
    "Hooks (useState, useEffect, useContext)",
    "Styled Components",
    "React Animation (Framer Motion)",
    "Third-Party Libraries (specific libraries)",
    "UI/UX Optimization",
  ],
  mobileSkills: [
    "Android Development",
    "iOS Development",
    "Native Modules (specific modules)",
    "Performance Optimization",
    "State Management (Redux, Context, etc.)",
    "Mobile UI/UX",
  ],
  backendSkills: [
    "Redux/Context API",
    "AsyncStorage",
    "Axios",
    "API Integration",
    "Data Caching",
    "Serverless Computing",
    "Cloud Storage (AWS, Azure, etc.)",
  ],
  devOpsSkills: [
    "Git & GitHub",
    "CI/CD Pipeline",
    "Code Review",
    "Testing Frameworks (Jest, Detox, etc.)",
  ],
  images: [
    require("../Projects/YourProjectName/YourProjectName1.png"),
    require("../Projects/YourProjectName/YourProjectName2.png"),
    require("../Projects/YourProjectName/YourProjectName3.png"),
  ],
  technologies: [
    "React Native",
    "React Navigation",
    "AsyncStorage",
    "Styled Components",
    "Redux",
    "REST APIs",
    "Custom Hooks",
    "i18n",
  ],
  github: "https://github.com/yourusername/yourproject",
  demo: "https://yourproject-demo.com",
  featured: false,
}
```

## Tips for Great Project Descriptions

1. **Focus on Technical Achievements**: Instead of "built an app", say "implemented real-time chat with WebSocket"
2. **Be Specific with Technologies**: Mention specific libraries like "TensorFlow Lite" instead of just "AI"
3. **Highlight Complex Features**: Emphasize challenging technical implementations
4. **Use Action Verbs**: "Implemented", "Optimized", "Integrated", "Designed"
5. **Keep it Professional**: Avoid client metrics, focus on technical excellence

## Example: Adding a Fitness App

```javascript
{
  id: 5,
  title: "FitTrack Pro",
  category: "Health & Fitness",
  description: `Advanced fitness tracking app with real-time workout analytics, AI-powered exercise recognition, and comprehensive health monitoring. Features custom workout plans and social challenges.`,
  technicalFocus: [
    "AI-powered exercise recognition using TensorFlow Lite",
    "Real-time biometric data processing",
    "Custom workout algorithm implementation",
    "Social features with real-time updates",
    "Advanced analytics and reporting system",
  ],
  frontendSkills: [
    "React Native",
    "React Navigation",
    "Function Components",
    "Hooks (useState, useEffect, useReducer)",
    "Styled Components",
    "React Animation (Framer Motion)",
    "Third-Party Libraries (TensorFlow Lite, HealthKit)",
    "UI/UX Optimization",
  ],
  mobileSkills: [
    "Android Development",
    "iOS Development",
    "Native Modules (HealthKit, Google Fit)",
    "Performance Optimization",
    "State Management (useReducer)",
    "Mobile UI/UX",
  ],
  backendSkills: [
    "useReducer",
    "AsyncStorage",
    "Axios",
    "API Integration",
    "Data Caching",
    "Serverless Computing (AWS Lambda)",
    "Cloud Storage (AWS S3)",
  ],
  devOpsSkills: [
    "Git & GitHub",
    "CI/CD Pipeline",
    "Code Review",
    "Health Data Testing",
  ],
  images: [
    require("../Projects/FitTrackPro/FitTrackPro1.png"),
    require("../Projects/FitTrackPro/FitTrackPro2.png"),
    require("../Projects/FitTrackPro/FitTrackPro3.png"),
  ],
  technologies: [
    "React Native",
    "React Navigation",
    "AsyncStorage",
    "Styled Components",
    "useReducer",
    "REST APIs",
    "Custom Hooks",
    "TensorFlow Lite",
  ],
  github: "https://github.com/yourusername/fittrack-pro",
  demo: "https://fittrack-demo.com",
  featured: false,
}
```

## Final Steps

1. Add your project to the array
2. Update the `id` to the next available number
3. Set `featured: true` for your best project (only 1-2 featured projects recommended)
4. Test that all images load correctly
5. Verify links work properly

That's it! Your new project will appear in the portfolio with all the technical details properly displayed.
