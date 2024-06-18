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
    python,
    figma,
    docker,
    portfolio,
    VIT,
    NRS,
    news,
    youtube,
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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Version Control",
      icon: backend,
    },
    {
      title: "Content Writer",
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Navyuga Radiance Senior Secondary School",
      company_name: "NRS",
      icon:NRS ,
      iconBg: "#383E56",
      date: "March 2006 - July 2021",
      points: [
        "10th Boards: 96.2% ",
        "12th Boards 97.2% - Science Stream",
        "3rd Topper in AISSE",
        "2nd Topper in AISSCE",
      ],
    },
    {
      title: "Vellore Institute of Technology",
      company_name: "VIT",
      icon: VIT,
      iconBg: "#E6DEDD",
      date: "September 2022 - July 2026",
      points: [
        "B.Tech in Computer Science",
        "CGPA-9.28",
      ],
    },
  ];
  
 
  
  const projects = [
    {
      name: "Portfolio site",
      description:
        "Explore a stunning portfolio site featuring 3D visuals crafted with ReactJs and ThreeJs and styled using Tailwind CSS. Immerse yourself in a dynamic showcase of projects, leveraging the power of interactive 3D graphics for an engaging user experience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/",
    },
    {
      name: "Daily Digest",
      description:
        "Discover the latest updates on a cutting-edge news website built with HTML, CSS, and JavaScript, featuring real-time data from various APIs. Enjoy a seamless and responsive design, ensuring optimal viewing on any device. Stay informed with up-to-the-minute news in a sleek, user-friendly interface.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: news,
      source_code_link: "https://github.com/tanutripathi1810/Website-News",
    },
    {
      name: "Youtube",
      description:
        "A basic responsive Youtube Landing page clone by using HTML and CSS. ",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        
      ],
      image: youtube,
      source_code_link: "https://github.com/tanutripathi1810/Landing-Youtube-Page",
    },
  ];
  
  export { services, technologies, experiences,projects };