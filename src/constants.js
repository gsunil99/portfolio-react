// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import jestLogo from './assets/tech_logo/jest.svg';
import nestjsLogo from './assets/tech_logo/nestjs.png';
import opensearchLogo from './assets/tech_logo/opensearch.svg';
import graphqlLogo from './assets/tech_logo/graphql.svg';
import intellijLogo from './assets/tech_logo/intellij.svg';
import sqliteLogo from './assets/tech_logo/sqlite.svg';
import awsLogo from './assets/tech_logo/aws.svg';
import googleCloudLogo from './assets/tech_logo/googlecloud.svg';
import jiraLogo from './assets/tech_logo/jira.svg';
import gitlabLogo from './assets/tech_logo/gitlab.svg';
import zustandLogo from './assets/tech_logo/zustand-logo.svg';
import shadcnLogo from './assets/tech_logo/shadcn.png';
import djangoLogo from './assets/tech_logo/django.svg';
import graphdbLogo from './assets/tech_logo/graphdb.webp';
import swaggerLogo from './assets/tech_logo/swagger.svg';
import dockerLogo from './assets/tech_logo/docker.svg';
// Experience Section Logo's 
import peiLogo from './assets/company_logo/pei_logo.jpeg';
import ccdLogo from './assets/company_logo/ccd_logo.jpeg';
import ltiLogo from './assets/company_logo/lti_logo.png';
// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import iidealsLogo from './assets/project_logo/iideals.png';
import peredealsLogo from './assets/project_logo/peredeals.png';
import membershipLogo from './assets/project_logo/membership.png';
export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'Zustand', logo: zustandLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Shadcn UI', logo: shadcnLogo},
      { name: 'Django',logo:djangoLogo},
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend & Database',
    skills: [
      { name: 'Nest JS', logo: nestjsLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Jest', logo: jestLogo },
      { name: 'GraphQL', logo: graphqlLogo },
      { name: 'OpenSearch', logo: opensearchLogo },
      { name: 'GraphDB', logo: graphdbLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages & Cloud',
    skills: [
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C', logo: cLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'GitLab', logo: gitlabLogo },
      { name: 'AWS', logo: awsLogo },
      { name: 'GCP', logo: googleCloudLogo },
      { name: 'Vercel', logo: vercelLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'IntelliJ', logo: intellijLogo },
      { name: 'Docker', logo: dockerLogo },
      { name: 'Jira', logo: jiraLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Figma', logo: figmaLogo },
      { name: 'SQLite', logo: sqliteLogo },
      { name: 'Swagger', logo: swaggerLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: peiLogo,
      role: "Sofware Engineer II - Fullstack",
      company: "Private Equity Investment",
      date: "April 2024 - Present",
      desc: "Designed and developed full-stack web applications for PEI’s Peredeals and IIdeals platforms using React.js, Next.js, Nest.js, and Node.js. Improved search functionality and performance with OpenSearch and GraphDB. Built reusable frontend components, enhanced data handling with React Query and Zustand, and implemented feature flags using Split.io. Contributed to faster feature rollouts, better user experience, and improved code quality through increased test coverage",
      skills: [
        "JavaScript",
        "TypeScript",
        "Nest JS",
        "Next JS",
        "React JS",
        "Node JS",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "Zustand",
        "OpenSearch",
        "GraphDB",
        "Wordpress",
        "CMR",
        "Split.io", 
        "Git",
        "GitLab",
        "Docker",
        "AWS",
        "PostgreSQL",
      ],
    },
    {
      id: 1,
      img: ccdLogo,
      role: "Fullstack Developer",
      company: "Climate Connect Digital",
      date: "October 2022 - March 2024",
      desc: "Designed and implemented RESTful APIs and end-to-end features for the Carbonshop platform using a diverse technology stack including Node.js, React.js, Java (Spring Boot), Google Cloud Platform, MongoDB, PostgreSQL, and Firebase Firestore. Developed scalable onboarding and data services following Test-Driven Development (TDD) practices. Built user-facing functionalities such as Add to Basket using React.js, Next.js, Express.js, and Node.js, along with dynamic data tables for efficient project information display. Additionally, engineered a serverless application for carbon project management using AWS Chalice, Python, GraphQL, and MongoDB",
      skills: [
        "React JS",
        "JavaScript",
        "Node JS",
        "Next JS",
        "Express JS",
        "Redux",
        "GCP",
        "Firebase & Firestore",
        "GraphQL",
        "AWS-Chalice",
        "MongoDB",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      id: 2,
      img: ltiLogo,
      role: "Software Engineer",
      company: "Larsen & Toubro Infotech",
      date: "August 2021 - September 2022",
      desc: "At Larsen & Toubro Infotech, I developed scalable RESTful microservices for MSCI’s ESG application using Java, Spring Boot, Maven, and PostgreSQL. I collaborated with cross-functional teams to ensure seamless data integration, reliability, and performance. Additionally, I built a cloud-based Python utility to automate file comparisons, saving 3–4 hours of manual effort and reducing errors. My contributions enhanced data workflows and supported efficient feature rollouts across the ESG platform.",
      skills: [
        "Java",
        "SpringBoot",
        "Javascript",
        "Python",
        "Django",
        "PostgreSQL",
        "HTML",
        "CSS",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "GLA University, Mathura",
      date: "Sept 2022 - July 2024",
      grade: "7.81 CGPA",
      desc: "I have completed my Master's degree (MCA) in Computer Applications from GLA University, Mathura. During my time at GLA, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GLA University has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Master of Computer Applications - MCA",
    },
    {
      id: 1,
      img: bsaLogo,
      school: "BSA College, Mathura",
      date: "Sept 2018 - Aug 2021",
      grade: "73.2%",
      desc: "I completed my Bachelor's degree in Computer Science (B.Sc.) from BSA College, Mathura. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Science - BSC (Computer Science)",
    },
    {
      id: 2,
      img: vpsLogo,
      school: "Vatsalya Public School Govardhan, Mathura",
      date: "Apr 2017 - March 2018",
      grade: "78%",
      desc: "I completed my class 12 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 3,
      img: vpsLogo,
      school: "Vatsalya Public School Govardhan, Mathura",
      date: "Apr 2015 - March 2016",
      grade: "87.5%",
      desc: "I completed my class 10 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Peredeals - PEI",
      description:
        "Designed and developed the PEI Peredeals website using a full-stack architecture. Built a high-performance search and data retrieval system by leveraging React.js and Next.js (utilizing both SSR and CSR) for the frontend, and Nest.js, Node.js, OpenSearch, and GraphDB for the backend. Implemented advanced table functionalities including server-side pagination, dynamic filters, and sorting to efficiently manage and explore large volumes of deal data.",
      image: peredealsLogo,
      tags: ["Javascript", "TypeScript", "React JS", "Next JS", "Nest JS","Node JS","Tailwind CSS",'Zustand', "CSR", "SSR", "OpenSearch", "GraphDB", "GitLab", "AWS"],
      webapp: "https://develop.peredeals.com",
    },
    {
      id: 1,
      title: "PEI Membership",
      description:
        "Designed and developed key features for the PEI Membership project using React.js, Next.js, PostgreSQL, and AWS. Implemented distinct user flows for membership registration and event sign-ups, ensuring a seamless and secure onboarding experience across different user types. Collaborated closely with product and design teams to streamline UX and integrated backend APIs for dynamic content delivery and user validation.",
      image: membershipLogo,
      tags: ["Javascript", "TypeScript", "React JS", "Next JS","PostgreSQL","Tailwind CSS","React Query","Zustand","GitLab", "AWS"],
      webapp: "https://stage.peimembership.com/",
    },
    {
      id: 2,
      title: "II deals - PEI",
      description:
        "Architected and implemented the PEI IIdeals platform, delivering comprehensive investor intelligence and institutional tracking. Developed a dynamic, SEO-optimized frontend using React.js and Next.js (leveraging both SSR and CSR), and built scalable backend services with Nest.js, Node.js, OpenSearch, and GraphDB, tailored to support complex search queries and relationship-driven data models.",
      image: iidealsLogo,
      tags: ['Wordpress','CMR',"Javascript", "TypeScript", "React JS", "Next JS", "Nest JS","Node JS","CSR", "SSR", "OpenSearch", "GraphDB", "GitLab", "Docker", "AWS","Tailwind CSS",'Zustand', ],
      webapp: "https://develop.infrastructureinvestordeals.com",
    },
    
    {
      id: 3,
      title: "Email Validator NPM Package",
      description:
        "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
      image: iidealsLogo,
      tags: ["React JS", "Node.js", "NPM", "Validation"],
      github: "https://github.com/codingmastr/cmtk-email-validator",
      webapp: "https://www.npmjs.com/package/cmtk-email-validator",
    },
    {
      id: 4,
      title: "Task Reminder Chrome Extension Tool",
      description:
        "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
      image: iidealsLogo,
      tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
      github: "https://github.com/codingmastr/Task-Reminder-Tool",
      webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
    },
    {
      id: 5,
      title: "Webverse Digital",
      description:
        "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
      image: iidealsLogo,
      tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
      github: "https://github.com/codingmastr/Webverse-Digital",
      webapp: "https://webversedigital.com/",
    },
    {
      id: 6,
      title: "Coding Master",
      description:
        "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
      image: iidealsLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
      github: "https://codingmasterweb.in/",
      webapp: "https://codingmasterweb.in/",
    },
    {
      id: 7,
      title: "Image Search App",
      description:
        "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
      image: iidealsLogo,
      tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
      github: "https://github.com/codingmastr/Image-Search-App",
      webapp: "https://imagsearch.netlify.app/",
    },
    {
      id: 8,
      title: "Image Background Remover",
      description:
        "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
      image: iidealsLogo,
      tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
      github: "https://github.com/codingmastr/Image-Background-Remover",
      webapp: "https://removeyourbg.netlify.app/",
    },
  ];  