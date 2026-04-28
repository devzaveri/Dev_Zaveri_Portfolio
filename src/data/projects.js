// Project data configuration for easy management
// To add a new project, simply add an object to this array

export const projects = [
  {
    id: 1,
    title: "Lawhub",
    category: "Legal Tech",
    client: "LegalTech Startup",
    duration: "3 months",
    teamSize: "4 developers",
    description: `A sophisticated AI-powered legal assistant that revolutionizes document management and legal consultation. This comprehensive platform delivers intelligent chat-based interactions and seamless document analysis with cutting-edge AI technology.`,
    challenge:
      "The client needed a solution that could handle complex legal document analysis while maintaining user-friendly interface and real-time AI responses.",
    solution:
      "Built with React Native and integrated advanced AI APIs, creating an intuitive interface with secure document storage and multi-language support for global accessibility.",
    results: [
      "40% reduction in document processing time",
      "95% user satisfaction rate",
      "10,000+ active users in first 3 months",
      "Featured in TechCrunch and LegalTech News",
    ],
    images: [
      require("../Projects/Lawhub/Lawhub.png"),
      require("../Projects/Lawhub/Lawhub2.png"),
      require("../Projects/Lawhub/Lawhub3.png"),
    ],
    video: null, // Add video property for video-only projects
    technologies: [
      "React Native",
      "React Navigation",
      "AsyncStorage",
      "Styled Components",
      "REST APIs",
      "Custom Hooks",
      "i18n",
      "AI Integration",
    ],
    github: "https://github.com/devzaveri/lawhub",
    demo: "https://lawhub-demo.com",
    featured: true,
  },
  {
    id: 2,
    title: "Sonata",
    category: "Wellness",
    client: "Wellness Company",
    duration: "4 months",
    teamSize: "3 developers",
    description: `An innovative therapeutic sound application that harnesses power of healing frequencies for wellness and relaxation. Built with React Native and AWS integration, Sonata offers a unique sound mixing experience.`,
    challenge:
      "Creating a seamless audio mixing experience with real-time frequency manipulation while maintaining battery efficiency and smooth performance.",
    solution:
      "Implemented custom audio processing algorithms with AWS S3 integration for cloud storage, creating premium frequency collections with custom sound blending capabilities.",
    results: [
      "50,000+ downloads in first quarter",
      "4.8 star rating on app stores",
      "30% user retention improvement",
      "$100K+ in-app revenue generated",
    ],
    images: [
      require("../Projects/Sonata/Sonata.png"),
      require("../Projects/Sonata/Sonata2.png"),
      require("../Projects/Sonata/Sonata3.png"),
    ],
    video: null,
    technologies: [
      "React Native",
      "React Navigation",
      "AsyncStorage",
      "Styled Components",
      "REST APIs",
      "Custom Hooks",
      "AWS S3",
      "In-App Purchase",
    ],
    github: "https://github.com/devzaveri/sonata",
    demo: "https://sonata-demo.com",
    featured: true,
  },
  {
    id: 3,
    title: "Treamo",
    category: "Food Delivery",
    client: "Restaurant Chain",
    duration: "5 months",
    teamSize: "5 developers",
    description: `A feature-rich food delivery platform that connects food enthusiasts with their favorite restaurants. This React Native application incorporates Redux for state management and offers a seamless ordering experience.`,
    challenge:
      "Building a scalable platform that could handle real-time order tracking, multiple restaurant partnerships, and complex delivery logistics.",
    solution:
      "Developed a comprehensive solution with Redux for state management, real-time tracking, and multi-language support, ensuring superior food delivery experience.",
    results: [
      "200+ restaurant partnerships",
      "15,000+ daily active users",
      "25% increase in order efficiency",
      "Expanded to 5 new cities",
    ],
    images: [
      require("../Projects/Treamo/Treamo1.png"),
      require("../Projects/Treamo/Treamo2.png"),
      require("../Projects/Treamo/Treamo3.png"),
    ],
    video: null,
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
    github: "https://github.com/devzaveri/treamo",
    demo: "https://treamo-demo.com",
    featured: false,
  },
  {
    id: 4,
    title: "WeCollect",
    category: "NFT Marketplace",
    client: "Web3 Startup",
    duration: "6 months",
    teamSize: "6 developers",
    description: `A state-of-the-art NFT marketplace that redefines digital collectible trading. This comprehensive platform combines secure trading with social features, including 24-hour stories and real-time chat.`,
    challenge:
      "Implementing secure blockchain integration while providing smooth user experience and real-time social features for NFT trading.",
    solution:
      "Built with React Native and integrated WebSocket for live updates, supporting 10 languages and secure in-app purchases with comprehensive social features.",
    results: [
      "$2M+ in trading volume",
      "50,000+ registered users",
      "Featured in major crypto publications",
      "Partnership with 100+ artists",
    ],
    images: [
      require("../Projects/WeCollect/WeCollect.png"),
      require("../Projects/WeCollect/WeCollect2.png"),
      require("../Projects/WeCollect/WeCollect3.png"),
    ],
    technologies: [
      "React Native",
      "React Navigation",
      "AsyncStorage",
      "Styled Components",
      "Redux",
      "WebSocket",
      "AWS S3",
      "In-App Purchase",
      "i18n",
    ],
    github: "https://github.com/devzaveri/wecollect",
    demo: "https://wecollect-demo.com",
    featured: true,
  },
  {
    id: 4,
    title: "Video Portfolio Demo",
    category: "Portfolio",
    client: "Personal Project",
    duration: "1 month",
    teamSize: "1 developer",
    description: `A stunning video-based portfolio showcase demonstrating advanced video integration and smooth animations. This project highlights expertise in video handling and modern web technologies.`,
    challenge:
      "Creating a seamless video showcase with proper controls and responsive design while maintaining optimal performance.",
    solution:
      "Implemented custom video player with React hooks, ensuring smooth playback, responsive design, and intuitive user controls.",
    results: [
      "100% video playback success rate",
      "Optimized loading times",
      "Cross-browser compatibility",
      "Mobile-responsive design",
    ],
    images: [], // No images for video-only project
    video: "/videos/your-linkedin-video.mp4", // Add your LinkedIn video here
    technologies: [
      "React",
      "Video.js",
      "Custom Hooks",
      "Responsive Design",
      "Performance Optimization",
    ],
    github: "https://github.com/devzaveri/video-portfolio",
    demo: "https://video-portfolio-demo.com",
    featured: true,
  },
];

// Categories for filtering
export const categories = [
  "All",
  "Legal Tech",
  "Wellness",
  "Food Delivery",
  "NFT Marketplace",
  "Portfolio",
];

// Helper function to add a new project
export const addProject = (newProject) => {
  const projectWithId = {
    ...newProject,
    id: Math.max(...projects.map((p) => p.id)) + 1,
  };
  projects.push(projectWithId);
  return projectWithId;
};

// Helper function to get projects by category
export const getProjectsByCategory = (category) => {
  if (category === "All") return projects;
  return projects.filter((project) => project.category === category);
};

// Helper function to get featured projects
export const getFeaturedProjects = () => {
  return projects.filter((project) => project.featured);
};

// Helper function to get project by ID
export const getProjectById = (id) => {
  return projects.find((project) => project.id === id);
};
