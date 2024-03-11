import {
  backend,
  creator,
  css,
  docker,
  figma,
  git,
  homeAutomation,
  html,
  javascript,
  masterQLogo,
  mobile,
  mongodb,
  nodejs,
  omnifiaLogo,
  reactjs,
  redux,
  tailwind,
  threejs,
  typescript,
  verzeo,
  wareHouseAutomation,
  web
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
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Android Developer",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "MongoDB",
    icon: mongodb,
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full-Stack Developer Intern",
    company_name: "VERZEO",
    icon: verzeo,
    iconBg: "#383E56",
    date: "April 2021- June 2021",
    points: [
      "Contributed significantly to user-focused features and UX improvements on the website, prioritizing a seamless user experience.",
      "Actively participated in an agile team, engaging in code reviews and discussions to drive incremental improvements and ensure an iterative development process.",
      "Played a role in integrating MVC pattern-based features, ensuring structured development, while refining UI elements using React to elevate the website's overall user experience.",
    ],
  },
  {
    title: "Product Developer Intern",
    company_name: "MasterQ",
    icon: masterQLogo,
    iconBg: "#E6DEDD",
    date: "June 2023- August 2023",
    points: [
      "Improved and developed key React-based web elements, focusing on elevating the MasterConnect sections functionality.",
      "Spear headed UI/UX improvements and executed strategies for optimizing website traffic, amplifying overall user experience.",
      "Demonstrated proficiency in front-end development and UI/UX design, collaborating effectively within agile environments.",
    ],
  },
  {
    title: "Full-Stack Developer Intern",
    company_name: "Omnifia",
    icon: omnifiaLogo,
    iconBg: "#383E56",
    date: "July 2023- January 2024",
    points: [
      "Developed a simulated house setup where appliances were controlled via smartphones, showcasing proficiency in IoT-based system development.",
      "Applied PHP for frontend and backend, utilized Kotlin in Android Studio for an Android app, and explored AWS microservices including an IoT simulator, DynamoDB integration, and an Android control app for a home simulation.",
      "Conducted unit tests and embraced continuous improvement practices, enhancing system reliability and performance, emphasizing a commitment to quality and robustness.",
    ],
  },
];

const projects = [
  {
    name: "HOME AUTOMATION SYSTEM",
    description:
      "The project is all about developing the simulated house environment with appliances controlled through smart phones.",
    tags: [
      {
        name: "Android",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: homeAutomation,
    source_code_link: "https://github.com/Akki226/Home_Automation_System",
  },
  {
    name: "WAREHOUSE AUTOMATION",
    description:
      "A simulation project for autonomous navigation of a forklift in a warehouse. The project is built using ROS packages and demonstrated via RVIZ software platform.",
    tags: [
      {
        name: "ROS NOETIC",
        color: "blue-text-gradient",
      },
      {
        name: "RVIZ",
        color: "green-text-gradient",
      },
    ],
    image: wareHouseAutomation,
    source_code_link: "https://github.com/Akki226/WarehouseAutomation_ROS",
  },
];

export { experiences, projects, services, technologies };

