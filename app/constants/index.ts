import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  threejs,
} from '../../public/assets';

const navigationItems = [
  {
    id: 0,
    title: 'Intro',
    href: '/',
  },
  {
    id: 1,
    title: 'Projects',
    href: '/#projects',
  },
  {
    id: 2,
    title: 'Contact',
    href: '/#contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: '',
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
];

export interface ExperienceType {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}

const experiences = [
  {
    title: 'UX Engineer - Web Experience Prototyping Team',
    company_name: 'Microsoft - Full-time',
    icon: 'assets/company/microsoft.png',
    iconBg: '#404040',
    date: 'December 2021 - November 2022',
    points: [
      'Collaborate with project managers and designers to build a prototype, based on the start.com website, used to assist in research, exploration, and iterating on the UI and UX design.',
    ],
  },
  {
    title: 'UX Engineer - WXC Web Platform',
    company_name: 'Microsoft - Full-time',
    icon: 'assets/company/microsoft.png',
    iconBg: '#404040',
    date: 'November 2017 - December 2022',
    points: [
      'As a collaborator on the FAST team, I contributed to developing and maintaining components using react and web component technology. I also collaborated with the design team to build internal web components for multiple experiences for Microsoft Edge, Edge Shopping, and Microsoft News. In addition, I helped support the engineering team to help adopt and integrate the FAST components.',
      'Focused on accessibility to make sure the components are aligned with the W3C ARIA standards. As part of making the components accessible, I addressed the high contrast styles for components in FAST, Fluent UI, Edge, and the Chromium developer tools',
    ],
  },
  {
    title: 'Design Developer',
    company_name: 'Microsoft - Full-time',
    icon: 'assets/company/microsoft.png',
    iconBg: '#404040',
    date: 'December 2012 - November 2017',
    points: [
      'Create, contribute and iterate in developing and polishing the UI and UX experience on the Xbox Dashboard, from the launch of the Xbox One to the release of the Xbox One S/X.',
      'Collaborated with the Xbox Console Design team and PMs to help them understand the product development capabilities and limits, to help generate a technically sound design. In addition, I collaborated with the Xbox Console Development team to convey the design vision.',
    ],
  },
  {
    title: 'Aquent at Microsoft = Design Integrator',
    company_name: 'Aquent - Contract',
    icon: 'assets/company/aquent.jpg',
    iconBg: '#404040',
    date: 'Jan 2023 - Present',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: '3D Environment Artist',
    company_name: 'Amaze Entertainment - Full-time',
    icon: 'assets/company/amaze.jpg',
    iconBg: '#404040',
    date: 'August 2002 - February 2011',
    points: [''],
  },
];

const projects = [
  {
    name: '',
    description: '.',
    tags: [
      {
        name: '',
        color: '',
      },
    ],
    image: '',
    source_code_link: 'https://github.com/',
  },
];

export { services, technologies, experiences, navigationItems, projects };
