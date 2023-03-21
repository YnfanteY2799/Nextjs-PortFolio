import type { NextApiRequest, NextApiResponse } from "next";
import type { data } from "../../../types/BackEnd";

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: "",
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: "",
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: "",
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: "",
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];
const aboutText =
  "I'm a Fullstack software developer with experience and preference for Javascript and Typescript, and expertise in frameworks like NextJs, Express, NodeJs and Many Others. I'm a quick learner and use to collaborate closely with clients to create the solution they need,so if you're interested in working with me you can contact me, otherwise if you are interested in me or want to know a little bit more about me click the arrow at the beggining of this section";

const aboutCards = [
  {
    title: "Web Developer",
    icon: "web",
  },
  {
    title: "React Native Developer",
    icon: "mobile",
  },
  {
    title: "Backend Developer",
    icon: "backend",
  },
  {
    title: "Content Creator",
    icon: "creator",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "BLUE",
      },
      {
        name: "mongodb",
        color: "GREEN",
      },
      {
        name: "tailwind",
        color: "PINK",
      },
    ],
    image: "",
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "BLUE",
      },
      {
        name: "restapi",
        color: "GREEN",
      },
      {
        name: "scss",
        color: "PINK",
      },
    ],
    image: "",
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "BLUE",
      },
      {
        name: "supabase",
        color: "GREEN",
      },
      {
        name: "css",
        color: "PINK",
      },
    ],
    image: "",
    source_code_link: "https://github.com/",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse<data>) {
  res.status(200).json({
    name: "Yassett",
    charge: "A FullStack Javascript Developer",
    about: aboutText,
    experiences,
    aboutCards,
    projects,
  });
}
