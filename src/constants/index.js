import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  mysql,
  html,
  css,
  reactjs,
  Python,
  tailwind,
  nodejs,
  java,
  git,
  figma,
  eskalate,
  flutter,
  food,
  pronunce,
  com,
  threejs,
  uidesign,
  ace,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI and Machine learning",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Python",
    icon: Python,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "flutter",
    icon: flutter,
  },
];

const experiences = [
  {
    title: "Mobile Developer Intern",
    company_name: "Eskalate LLC",
    icon: eskalate,
    iconBg: "#383E56",
    date: "July 2024 - oct 2024",
    points: [
      "Developed and maintained a full-featured e-commerce mobile app using Flutter, adhering to Clean Architecture principles to ensure scalability, modularity, and maintainability.",
      "Applied state management, dependency injection, and modular design patterns, resulting in a 20% improvement in code efficiency and reliability.",
      "Implemented the integration of key e-commerce features such as product catalogs, shopping carts, and realtime user notifications, while ensuring smooth performance.",
      "Collaborated closely with cross-functional teams to design and implement APIs integration.",
      "Utilized Agile methodologies throughout the project, conducting regular meetings with team members to align objectives and deliverables."
    ],
  },
  {
    title: "UI/UX Developer",
    company_name: "RDX Delta",
    icon: uidesign,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - Present",
    points: [
      "Designed and refined user interfaces for an educational website and no-stock e-commerce management system, focusing on creating intuitive and efficient user experiences.",
      "Collaborated closely with stakeholders, development teams, and project managers through regular meetings to gather feedback and align designs with business goals.",
      "Led focus group sessions to test and evaluate designs, using user feedback to refine and improve UI/UX designs in an iterative process.",
      "Utilized Figma to create wireframes, prototypes, and high-fidelity designs, ensuring smooth communication between design and development teams.",
      "Managed tasks, tracked progress, and met deadlines using Monday.com, ensuring timely completion of design deliverables.",
    ],
  },
  
];



const projects = [
  {
    name: "Speed chow",
    description:
      "A mobile app that allows users to search, select a menu, and order a food from a resturant, providing a convenient and efficient solution for food consumption needs.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Dart",
        color: "green-text-gradient",
      },

    ],
    image: food,
    source_code_link: "https://github.com/Mahlet-assefa/mobile-internship-assessment",
  },
  {
    name: "Accent Aid",
    description:
      "a web app designed to help users improve their pronunciation in English spoken language through scoring. It provides phoneme-level assessments.",
    tags: [
      {
        name: "Flask",
        color: "blue-text-gradient",
      },
      {
        name: "Microsft Azure speeech services",
        color: "green-text-gradient",
      },
      
    ],
    image: pronunce,
    source_code_link: "https://github.com/the-croods-Accent-Aid/Accent-aid",
  },
  {
    name: "E-commerce app",
    description:
      "An e-commerce app that allows users to browse, search, and purchase products online. It features a catalog of items, product details and Adding a product.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Dart",
        color: "green-text-gradient",
      },
      {
        name: "Shared preference",
        color: "pink-text-gradient",
      },
    ],
    image: com,
    source_code_link: "https://github.com/Mahlet-assefa/2024-internship-mobile-tasks",
  },

  {
    name: "Ace-Link",
    description:
     "connects learners with expert tutors tailored to their individual preferences,and offers real-time conferencing for interactive tutoring sessions and study groups. Additionally, a dedicated resources page provides valuable learning materials, ensuring a comprehensive and collaborative educational experience.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Figma",
        color: "green-text-gradient",
      },
      {
        name: "Node js",
        color: "pink-text-gradient",
      },
    ],
    image: ace,
    source_code_link: "https://github.com/Maedot-Asrat/AceLink/tree/main/ace-link",
  },
];

export { services, technologies, experiences, projects };