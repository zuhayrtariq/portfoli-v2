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
  figma,
  docker,
  luckycement,
  tfmdigital,
  prime,
  ezsolvers,
  threejs,
  uniboard,
  airbnb,
  cinemate,
  nikelanding,
  fitnessapp,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Web Designer',
    icon: mobile,
  },
  {
    title: 'Backend Engineer',
    icon: backend,
  },
  {
    title: 'Content Creator',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Information Technology Intern',
    company_name: 'Lucky Cement Ltd.',
    icon: luckycement,
    iconBg: 'white',
    date: 'November 2021 - January 2022',
    points: [
      'Worked on SAP ABAP',
      'Writing queries in ABAP to perform CRUD Operations on the database',
      `Worked on generating reports, building report interfaces and modularizing programs with 'Includes', 'Forms' and 'Function Modules'`,
    ],
  },
  {
    title: 'Full Stack Developer',
    company_name: 'TFM Digital',
    icon: tfmdigital,
    iconBg: '#E6DEDD',
    date: 'Aug 2022 - Jan 2023',
    points: [
      'Worked remotely for TFM Digital',
      'Performing duties of both front end and back end developer.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Web Developer',
    company_name: 'EZ Solvers',
    icon: ezsolvers,
    iconBg: 'white',
    date: 'Feb 2023 - June 2023',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Graduate Trainee Officer',
    company_name: 'Prime Pakistan',
    icon: prime,
    iconBg: '#E6DEDD',
    date: 'July 2023 - Present',
    points: [
      'Working at a GTO',
      'Looking after day to day activities in the IT Department',
      'Dealing with technical support, providing aid to members of the team and managers as required.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'Zuhayr was exceptional to work with. The communication was great and he helped me navigate web development with my limited experience.',
    name: 'Taylor Fielding',
    designation: 'CEO',
    company: 'TFM Digital',
    image:
      'https://www.mediaweek.com.au/wp-content/uploads/2023/06/Taylor-Fielding-tfm.digital-.jpg',
  },
  {
    testimonial:
      'He is a hard worker who is extremely dedicated towards the task and is an excellent problem solver.',
    name: 'Salman Agha',
    designation: 'Employee',
    company: 'Lucky Cement',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      'A skilled web developer, who helped us in developing our website. Very cooperative and great problem solving skills',
    name: 'Hammad Siddiqui',
    designation: 'Founder',
    company: 'EZ Solvers',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFJ-V68JYIToXOlu9PuG3W0NtA3L0KzWdrJzgMjExJVA&s',
  },
];

const projects = [
  {
    name: 'Uniboard (UMS)',
    description:
      'A University Management System that deals with all the routine tasks performed by Students, Faculty, Administrators and Head of Departments. Main technologies used were NodeJS, ExpressJS, EJS, MySQL',
    tags: [
      {
        name: 'NodeJS',
        color: 'green-text-gradient',
      },
      {
        name: 'MySQL',
        color: 'blue-text-gradient',
      },
      {
        name: 'EJS',
        color: 'pink-text-gradient',
      },
    ],
    image: uniboard,
    url:'https://uniboard.cyclic.app/',source_code_link: 'https://github.com/zuhayrtariq/FYP',
  },
  {
    name: 'AirBnb - Booking App',
    description:
      'A Full-Stack booking app built using MERN(Mongo, Express, React, Node). The design and the idea was inspired by AirBnb. Front-end built using React and Tailwindcss. Bakcend based on Node.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'RESTAPI',
        color: 'green-text-gradient',
      },
      {
        name: 'TailwindCSS',
        color: 'pink-text-gradient',
      },
      {
        name: 'MongoDB',
        color: 'green-text-gradient',
      },
    ],
    image: airbnb,
    url:'https://zuhayr-booking-app.vercel.app/',source_code_link: 'https://github.com/zuhayrtariq/airbnb-clone',
  },
  {
    name: 'Cinemate Movie App',
    description:
      'A React Application built with the help of TMDB API. The App allows you to search for a movie and check the rating and the details. Allows user to toggle dark and light mode as well.',
    tags: [
      {
        name: 'ReactJS',
        color: 'blue-text-gradient',
      },
      {
        name: 'API',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: cinemate,
    url:'https://cinemate-f2ojoomp8-zuhayrtariq.vercel.app/',source_code_link: 'https://github.com/zuhayrtariq/cinemate-app',
  },
  {
    name: 'Nike Landing Page',
    description:
      'Nike Landing Page built using TailwindCSS.The design and the idea was inspired by Nike. Front-end built using React and Tailwindcss.',
    tags: [
      {
        name: 'ReactJS',
        color: 'blue-text-gradient',
      },
      {
        name: 'TailwindCSS',
        color: 'pink-text-gradient',
      },
     
    ],
    image: nikelanding,
    url:'https://nike-z.vercel.app/',source_code_link: 'https://github.com/zuhayrtariq/nike-landing-page',
  },
  {
    name: 'Fitness App',
    description:
      'A Fitness App that tells you different exercises for different parts of the body. This was built using ReactJS, TailwindCSS and ExerciseDB API.',
    tags: [
      {
        name: 'ReactJS',
        color: 'blue-text-gradient',
      },
      {
        name: 'TailwindCSS',
        color: 'pink-text-gradient',
      },
      {
        name: 'RapidAPI',
        color: 'text-white',
      },
    ],
    image: fitnessapp,
    url:'https://fitness-app-z.vercel.app/',source_code_link: 'https://github.com/zuhayrtariq/Fitness-App',
    
  },
];

export { services, technologies, experiences, testimonials, projects };
