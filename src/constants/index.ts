import {
  car,
  contact,
  css,
  eq,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mercor,
  mongodb,
  mui,
  nextjs,
  nodejs,
  pricewise,
  quaterstack,
  react,
  redux,
  snapgram,
  summiz,
  suvidha_foundation,
  tailwindcss,
  threads,
  typescript,
} from '../../public/icons';

export const skills = [
  {
    imageUrl: css,
    name: 'CSS',
    type: 'Frontend',
  },
  {
    imageUrl: express,
    name: 'Express',
    type: 'Backend',
  },
  {
    imageUrl: git,
    name: 'Git',
    type: 'Version Control',
  },
  {
    imageUrl: github,
    name: 'GitHub',
    type: 'Version Control',
  },
  {
    imageUrl: html,
    name: 'HTML',
    type: 'Frontend',
  },
  {
    imageUrl: javascript,
    name: 'JavaScript',
    type: 'Frontend',
  },
  {
    imageUrl: mongodb,
    name: 'MongoDB',
    type: 'Database',
  },
  {
    imageUrl: mui,
    name: 'Material-UI',
    type: 'Frontend',
  },
  {
    imageUrl: nextjs,
    name: 'Next.js',
    type: 'Frontend',
  },
  {
    imageUrl: nodejs,
    name: 'Node.js',
    type: 'Backend',
  },
  {
    imageUrl: react,
    name: 'React',
    type: 'Frontend',
  },
  {
    imageUrl: redux,
    name: 'Redux',
    type: 'State Management',
  },
  {
    imageUrl: tailwindcss,
    name: 'Tailwind CSS',
    type: 'Frontend',
  },
  {
    imageUrl: typescript,
    name: 'TypeScript',
    type: 'Frontend',
  },
];

export const experiences = [
  {
    title: 'Full Stack Engineer',
    company_name: 'Mercor',
    icon: mercor,
    iconBg: '#accbe1',
    date: 'July 2023 - September 2023',
    points: [
      'Successfully transitioned from MERN to T3 Stack within a week, demonstrating adaptability and fast learning.',
      'Utilized OpenAI API to create a marketpanel in just 2 weeks. Highlighted the ability to quickly grasp new technologies and deliver tangible results.',
      'Implemented Context to optimize the market panel, effectively reducing loading times and enhancing user experience. Showcased problem-solving skills and attention to user-centric design.',
      'Successfully incorporated Textbase, a Python library for chatbot development, despite limited prior experience with Python. Developed an automated GCP Cloud Infrastructure for seamless deployment using textbase deploy commands.',
      'Designed and established an automated cloud infrastructure on Google Cloud Platform (GCP) for deploying and managing chatbots. Demonstrated skills in cloud architecture and deployment automation.',
    ],
  },
  {
    title: 'SDE Intern',
    company_name: 'Quaterstack Technologies',
    icon: quaterstack,
    iconBg: '#fbc3bc',
    date: 'November 2022 - March 2023',
    points: [
      'Refactored static code into dynamic function calls, reducing Redwing’s maintenance time by 50% and improving application performance by 25%',
      'Resolved critical drag event bug in the Nodle Project, resulting in a significant reduction in CPU utilization (from 7% to 73% during a single mouse drag in the flowchart area).',
      'Improved scalability in Anatomy-Mapper Project by implementing an advanced algorithm, leading to a significant 30% decrease in processing time and enhanced accuracy across multiple SVG files.',
      'Addition of various new functionalities in Redwing and AnatomyMapper over the course of 3 months.',
    ],
  },
  {
    title: 'React Developer',
    company_name: 'EQ Soft Solutions',
    icon: eq,
    iconBg: '#b7e4c7',
    date: 'July 2022 - August 2022',
    points: [
      'Enhanced user experience by implementing ReactJS Routing, resulting in a 20% increase in user engagement and improved navigation within the movie app.',
      'Implemented Reducer to efficiently handle complex state changes, resulting in a notable 30% reduction in loading times for large-scale data sets within the Movie Application.',
      'Optimized website performance by integrating Axios for efficient data retrieval from external APIs, resulting in a notable 15% improvement in load times and overall user experience.',
    ],
  },
  {
    title: 'Web Development Intern',
    company_name: 'Suvidha Foundation (Suvidha Mahila Mandal)',
    icon: suvidha_foundation,
    iconBg: '#a2d2ff',
    date: 'June 2022 - July 2022',
    points: [
      "Created a website for an NGO to promote the organization's activities and services to the public.",
      'Implemented responsive design and integrated the volunteer, team, and advisor sections of the site.',
      'Utilized SwiperJS to enhance user appeal',
      'Demonstrated expertise in front-end development, web development, and technologies such as Bootstrap, JavaScript, HTML, and CSS.',
    ],
  },
];

export const socialLinks = [
  {
    name: 'Contact',
    iconUrl: contact,
    link: '/contact',
  },
  {
    name: 'GitHub',
    iconUrl: github,
    link: 'https://github.com/TechSpiritSS',
  },
  {
    name: 'LinkedIn',
    iconUrl: linkedin,
    link: 'https://www.linkedin.com/in/sidharthsethiss',
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: 'btn-back-red',
    name: 'Amazon Price Tracker',
    description:
      'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
    link: 'https://github.com/adrianhajdin/pricewise',
  },
  {
    iconUrl: threads,
    theme: 'btn-back-green',
    name: 'Full Stack Threads Clone',
    description:
      'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    link: 'https://github.com/adrianhajdin/threads',
  },
  {
    iconUrl: car,
    theme: 'btn-back-blue',
    name: 'Car Finding App',
    description:
      'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
    link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
  },
  {
    iconUrl: snapgram,
    theme: 'btn-back-pink',
    name: 'Full Stack Instagram Clone',
    description:
      'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
    link: 'https://github.com/adrianhajdin/social_media_app',
  },
  {
    iconUrl: estate,
    theme: 'btn-back-black',
    name: 'Real-Estate Application',
    description:
      'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    link: 'https://github.com/adrianhajdin/projects_realestate',
  },
  {
    iconUrl: summiz,
    theme: 'btn-back-yellow',
    name: 'AI Summarizer Application',
    description:
      'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    link: 'https://github.com/adrianhajdin/project_ai_summarizer',
  },
];
