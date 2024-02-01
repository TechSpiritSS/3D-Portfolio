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
    name: 'Mood-Messenger',
    description:
      'Embark on a seamless communication experience with Mood Messenger, a real-time chat application meticulously crafted using cutting-edge technologies. This application, powered by Node.js and React.js, boasts integration with Google Cloud SQL for robust data storage. Users can effortlessly sign in with their Google accounts, initiate chats with fellow users via email, send messages, and seamlessly revisit previous conversations. Elevate your messaging experience with Mood Messenger, hosted on the reliable Google Cloud Platform.',
    link: 'https://github.com/TechSpiritSS/Mood-Messenger',
  },
  {
    iconUrl: threads,
    theme: 'btn-back-green',
    name: 'PregChat',
    description:
      'PregChat is a chatbot designed to help expecting mothers access important information about their pregnancy in a simple, accessible and interactive way. Our chatbot is powered by Dialogflow, a Google Cloud-based natural language processing platform. With PregChat, mothers can easily ask about their symptoms and receive information regarding medical emergencies, first aid, medications, and exercises. PregChat aims to provide support and education to mothers in need, ultimately improving the health outcomes for both mother and child.',
    link: 'https://github.com/TechSpiritSS/PregChat_Dialogflow',
  },
  {
    iconUrl: car,
    theme: 'btn-back-blue',
    name: 'S Movies',
    description:
      'Developed a comprehensive movie web application featuring an advanced profile system and personalized recommendations. The application includes voice integration for an enhanced user experience and supports both Dark and Light modes. Implemented ESLint configurations to maintain clean and organized code. Successfully deployed on Netlify, ensuring seamless accessibility.',
    link: 'https://github.com/TechSpiritSS/S-Movies',
  },
  {
    iconUrl: snapgram,
    theme: 'btn-back-pink',
    name: 'BigINT Library',
    description:
      'Presenting my custom C Library for handling BigINT (Big Integer) operations, meticulously crafted from the ground up. Boasting support for handling massive numbers, with the capacity to manage up to 2700 digits (modifiable in the bigint.c file). This project serves as a personal exploration, a journey in reinventing the wheel solely for the purpose of deepening my understanding of intricate concepts in programming.',
    link: 'https://github.com/TechSpiritSS/bigInt.git',
  },
  {
    iconUrl: estate,
    theme: 'btn-back-black',
    name: 'Task C++',
    description:
      'Introducing Task C++, a command line-powered task management application designed exclusively in C++. This efficient tool utilizes a text file as a storage medium for seamless task organization. Notably, it stands out for its commitment to pure C++ implementation, without relying on any external libraries. Simplify your task management experience with this lightweight, console-based solution.',
    link: 'https://github.com/TechSpiritSS/Task-C-',
  },
  {
    iconUrl: summiz,
    theme: 'btn-back-yellow',
    name: '50 Days of Web',
    description:
      'Embark on a transformative journey through the realms of web development with the "50 Days of Web" challenge. This ambitious venture involves creating 50 unique projects over the course of 50 days, employing a skillful blend of HTML, CSS, and JavaScript. Join me on this immersive experience as we explore the dynamic landscape of web development, one project at a time.',
    link: 'https://techspiritss.github.io/50-Days-50-Projects-Web-Dev/',
  },
];
