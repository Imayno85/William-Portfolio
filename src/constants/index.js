import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  // figma,
  // docker,
  edmark,
  rwamps,
  // carrent,
  kavali,
  jobit,
  tripguide,
  threejs,
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
    title: "Content Creator",
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
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Software Developer | Graphics Editor",
    company_name: "Rwamps Youth Farmers Group",
    icon: rwamps,
    iconBg: "#383E56",
    date: "October 2022 - Present",
    points: [
      "Design, code, test, and maintain software applications to meet organizational needs.",
      "Collaborate with cross-functional teams to analyze requirements and develop efficient solutions.",
      "Apply software engineering principles to ensure high-quality code and software reliability.",
      "Utilize Adobe Creative Cloud tools to create visually engaging graphics and videos for effective communication.",
      "Collaborate with marketing teams to optimize visual elements for marketing campaigns and initiatives.",
      "Manage multimedia projects from conceptualization to delivery, meeting deadlines and quality standards.",
    ],
  },
  {
    title: "IT Systems Admin | Graphics Editor",
    company_name: "Edmark Group of Companies",
    icon: edmark,
    iconBg: "#E6DEDD",
    date: "Jan. 2013 - Sep. 2022",
    points: [
      "Managed critical servers, ensuring the reliable and efficient operation of IT infrastructure.",
      "Configured network resources and provided on-call support to end-users, resolving technical issues promptly.",
      "Implemented robust security measures to safeguard sensitive information and ensure the privacy of networks and computer systems.",
      "Conducted regular backups and disaster recovery planning to safeguard critical data and ensure business continuity.",
      "Managed user accounts, permissions, and access rights, maintaining data security and integrity.",
      "Collaborated with cross-functional teams to identify technology needs and provide effective IT solutions aligned with organizational goals.",
      "Documented system configurations, upgrades, and troubleshooting procedures to ensure a comprehensive knowledge base for future reference and training.",
      "Utilized Adobe Creative Cloud tools to create captivating graphics and videos, contributing to impactful visual communication.",
      "Collaborated with cross-functional teams to optimize content for various platforms, ensuring consistency and alignment with organizational objectives.",
      "Managed project timelines, delivering high-quality multimedia assets within stipulated deadlines.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "It was a pleasure working with William on our website development. He was prompt, offered suggestions and we are very happy with the results. We'd highly recommend him to anyone that's looking for the same services.",
    name: "Yusuf Sserunkuma",
    designation: "Founder & Managing Director",
    company: "Kavali Capital",
    image: "https://www.kavalicapital.com/assets/people01-4cd2e767.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Wills does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Wills optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Kavali Capital",
    description:
      "Kavali Capital Limited offers a range of exceptional products and services, providing quality, value and convenience. From consumer electronics, phones and tablets to financial services, shipping, repairs and real estate solutions, experience satisfaction redefined.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "html/javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: kavali,
    source_code_link: "https://github.com/Imayno85/kavali-capital.git",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
