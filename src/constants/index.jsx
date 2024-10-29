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
import projectLustrum from "../assets/project-lustrum.png";
import projectDataEngineeringKafka from "../assets/project-data-engineering-kafka.png";
import projectErikaElia from "../assets/project-erika-elia.png";
import projectCharminal from "../assets/project-charminal.png";
import projectESPotify32 from "../assets/project-espotify32.png";
import projectHandTrackingDino from "../assets/project-hand-tracking-dino.png";

import { SiGmail } from "react-icons/si";
import { FcLinux } from "react-icons/fc";
import 'devicon/devicon.min.css';


export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experiences" },
  { label: "Educations", href: "#educations" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "Sulaiman Fawwaz",
  greet: "Hello there! 👋🏻",
  description:
    "I am an Information Engineering undergraduate at Universitas Gadjah Mada with an interest in Computer Vision, Data Engineering, IoT, Cybersecurity, and Software Engineering"
};

export const PROJECTS = [
  {
    id: 1,
    name: "DTETI's XII Lustrum",
    description:
      "Website for my deparment's XII lustrum that involves many events, including independence day celebration, art performance, and competitions.",
    // image: projectImage1,
    image: projectLustrum,
    githubLink: "https://lustrumdteti.id/",
  },
  {
    id: 2,
    name: "Charminal Python Library",
    description:
      "My first ever Python library, with a goal to enhance the terminal output from a Python script. It offers colors and emojis to display the informations more interactive and charming!",
    image: projectCharminal,
    githubLink: "https://github.com/sulaimanfawwazak/Charminal",
  },
  {
    id: 3,
    name: "ESP(otify)32: Spotify Controller with ESP32",
    description:
      "A Spotify Controller using TFT touch screen and ESP32, utilizing the Spotify's API. Made the UI using SquareLine Studio.",
    image: projectESPotify32,
    githubLink: "https://github.com/sulaimanfawwazak/SBM-Final-Project-ESP32-Based-Spotify-Playback-Controller",
  },
  {
    id: 4,
    name: "Data Engineering Pipeline with Kafka and AWS",
    description:
      "Data pipeline of a simulated real-world market data, built using Kafka and AWS services, such as EC2, S3, Glue Crawler, and Athena.",
    image: projectDataEngineeringKafka,
    githubLink: "https://github.com/sulaimanfawwazak/Data-Engineering-Kafka",
  },
  {
    id: 5,
    name: "ERIKA and ELIA Chatbot",
    description:
      "Discord bots act like a customer service for Edus, an education startup in Indonesia. ERIKA is the predecessor of ELIA, where it's still uses regex, while ELIA is more advanced by using RAG.",
    image: projectErikaElia,
    githubLink: "https://github.com/sulaimanfawwazak/ELIA",
  },
  {
    id: 6,
    name: "Hand Tracking Dino Game",
    description:
      "Script written in Python with the help of MediaPipe and OpenCV to enable players to play Dino Game with their hand gestures. Make a pinching gesture to make the Dino jump!",
    image: projectHandTrackingDino,
    githubLink: "https://github.com/sulaimanfawwazak/Hand-Gesture-Control-Dino-Game",
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
      "Took part in several campus's events, such as FindIT! and Lustrum, and joined a student-led UAV research team, GAMAFORCE (Gadjah Mada Flying Object Research Center). Had experiences on data engineering, web development, cybersecurity, etc.",
  },
  {
    degree: "Natural Sciences Major - Acceleration Class",
    institution: "SMAN 1 Balikpapan",
    duration: "August 2020 - June 2022",
    description:
      "Part of acceleration student, where I completed high school in just 2 years. Participated in competitions, ranging from chemistry to informatics olympiad.",
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
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=sulaimanfawwazak@gmail.com&su=ChangeThis&body=ChangeThisToo",
    icon: <SiGmail fontSize={25} className="hover:opacity-80" />,
  },
];
