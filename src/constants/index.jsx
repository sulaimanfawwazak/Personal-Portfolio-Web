import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

import { SiGmail } from "react-icons/si";
import { FcLinux } from "react-icons/fc";
import 'devicon/devicon.min.css';


export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#experiences" },
  { label: "Educations", href: "#educations" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "Sulaiman Fawwaz",
  greet: "Hello there! 👋🏻",
  description:
    "I am an undergraduate Information Engineering student interested in Computer Vision, Data Engineering, Cyber Security, and Softaware Engineering. I like to take on challenging tasks to sharpen my skills.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "https://github.com/user/personal-portfolio",
  },
  {
    id: 2,
    name: "E-Commerce Platform",
    description:
      "An e-commerce web application developed using Next.js and Stripe for payment integration, featuring a comprehensive product catalog, shopping cart, and checkout system.",
    image: projectImage2,
    githubLink: "https://github.com/user/ecommerce-platform",
  },
  {
    id: 3,
    name: "Task Management Tool",
    description:
      "A task management application built with React and Redux for efficient task tracking and team collaboration, including features like project boards, task assignment, and progress tracking.",
    image: projectImage3,
    githubLink: "https://github.com/user/task-management-tool",
  },
  {
    id: 4,
    name: "Weather App",
    description:
      "A weather application that uses the OpenWeatherMap API to fetch and display current weather data and forecasts for various locations, built with React and styled-components.",
    image: projectImage4,
    githubLink: "https://github.com/user/weather-app",
  },
  {
    id: 5,
    name: "Blog Platform",
    description:
      "A blogging platform developed with Next.js and Markdown for creating, editing, and publishing blog posts. It features a rich text editor, tag system, and user authentication.",
    image: projectImage5,
    githubLink: "https://github.com/user/blog-platform",
  },
  {
    id: 6,
    name: "Chat Application",
    description:
      "A real-time chat application using Firebase for backend services, including user authentication, chat rooms, and instant messaging features. Built with React and Firebase.",
    image: projectImage6,
    githubLink: "https://github.com/user/chat-application",
  },
];

export const BIO = [
  "Fawwaz is an Information Engineering undergraduate at Universitas Gadjah Mada, one of the most prestigious universities in Indonesia. He is passionate about diverse fields, such as Computer Vision, Data Engineering, Internet of Things (IoT), Cyber Security, and Software Engineering. He has many hands-on experiences regarding to those fields, such as being a Front-end Developer for his deparment's lustrum celebration, problem setter for Capture The Flag competitions, and many more.",
  "Beyond his technical expertise, Fawwaz has a strong interest in music. He plays guitar and several brass instruments, like the trumpet and mellophone, thanks to his involvemenet in his junior high school's marching band, Waditra Prima Sangatta (WPS), which led his team to victory in the Grand Prix Marching Band (GPMB) XXXV 2019.",
  "He's currently working as a Vision and Control Programmer at GAMAFORCE (Gadjah Mada Flying Object Research Center), a student-led research group focusing on Unmanned Aerial Vehicles (UAV). As a part of the Ground Control Station (GCS) sub-team, he focuses on research in Computer Vision and Artificial Intelligence.",
];

export const SKILLS = [
  {
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" className="w-9 lg:w-12"/>
    ,
    name: "Python",
    experience: "3+ year",
  },
  {
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" className="w-9 lg:w-12"/>,
    name: "C++",
    experience: "2+ years",
  },
  {
    icon: <FcLinux className="text-4xl lg:text-5xl" />,
    name: "Linux",
    experience: "2+ years",
  },
  {
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className="w-9 lg:w-12"/>,
    name: "JavaScript",
    experience: "1+ year",
  },
  {
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" className="w-9 lg:w-12"/>,
    name: "OpenCV",
    experience: "1+ year",
  },
  {
    icon: <i class="devicon-tensorflow-original colored text-4xl lg:text-5xl"></i>,
    name: "Tensorflow",
    experience: "1+ year",
  },
  {
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" className="w-9 lg:w-12"/>,
    name: "React",
    experience: "1+ year",
  },
  {
    icon: <i class="devicon-ros-original text-4xl lg:text-5xl"></i>,
    name: "ROS",
    experience: "1+ year",
  },

];

export const EXPERIENCES = [
  {
    title: "Vision and Control Programmer",
    company: "GAMAFORCE",
    duration: "December 2023 - Present",
    description:
      "As a Vision Control Programmer at GAMAFORCE, I am responsible for conducting research on Computer Vision and Artificial Intelligence, and their applications in Unmanned Aerial Vehicles (UAVs). This involves exploring foundational theories and developing algorithms for UAV systems. I also have experience working with Robot Operating System (ROS) and Gazebo to run simulations, helping integrate vision-based solutions into UAV control systems.",
  },
  {
    title: "Frontend Developer",
    company: "DTETI FT UGM",
    duration: "June 2023 - November 2023",
    description:
      "Developed the front-end sections of the Lustrum XII DTETI website using React and TailwindCSS. My work focused on delivering responsive and dynamic web interfaces to showcase the event and its activities.",
  },
  {
    title: "Tutor Assitant",
    company: "DTETI FT UGM",
    duration: "August 2023 - June 2024",
    description:
      "Served as a tutor for the Linear Algebra course, teaching key concepts such as eigenvalues, eigenvectors, diagonalization, and complex matrices. Additionally, I assisted in the Matrix and Vector Theories class, guiding students through topics like linear equations, singular and non-singular systems, Gauss-Jordan elimination, and orthogonality/orthonormality.",
  },
  {
    title: "Staff of Event Division",
    company: "FindIT! UGM",
    duration: "November 2022 - June 2023",
    description:
      "As a member of the Event Division for FindIT! UGM, an IT competition event, I was responsible for planning and organizing the overall event. My role included designing timelines, selecting themes, and coordinating competitions such as Capture The Flag (CTF), Competitive Programming, and Hackathons.",
  },

];

export const EDUCATIONS = [
  {
    degree: "Bachelor of Engineering in Information Engineering",
    institution: "Universitas Gadjah Mada",
    duration: "August 2022 - Present",
    description:
      "Specialized in Human-Computer Interaction and Software Engineering. Completed a thesis on enhancing user experience in web applications through advanced interactive techniques. Participated in various projects involving frontend development, algorithms, and data structures. Graduated with honors.",
  },
  {
    degree: "Natural Sciences Major",
    institution: "SMAN 1 Balikpapan",
    duration: "August 2020 - June 2022",
    description:
      "Focused on web development, programming languages, and database management. Actively involved in coding clubs and hackathons, where I developed several web applications using HTML, CSS, JavaScript, and PHP. Completed a senior project on developing an e-commerce platform. Graduated with a high GPA.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://instagram.com/sfawwazak",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/sulaimanfawwazak",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/sfawwazak/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=sulaimanfawwazak@gmail.com&su=SUBJECT&body=BODY",
    icon: <SiGmail fontSize={25} className="hover:opacity-80" />,
  },
];
