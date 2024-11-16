"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Web Development Intern at CODESOFT",
    description1:
      "Working on Personal Portfolio: Designed and developed a personal portfolio website to showcase projects and skills.",
    description2:
      "Calculator Application: Developed a calculator application with advanced functionalities using JavaScript.",
    description3:
      "Landing Page: Created a captivating landing page with smooth animations and interactive elements.",
    techstack: "HTML, CSS, JavaScript, React, Node.js, Next.js",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Web Development Intern at CODESOFT
        <br /> Apr 2024 - Present
      </div>
    ),
  },
  {
    title: "Fullstack Developer, Prodigy",
    description1:
      "Responsive Landing Page: Developed a responsive landing page with modern design and smooth animations.",
    description2:
      "Stopwatch Application: Created a stopwatch application with precise timing functionalities using JavaScript.",
    description3:
      "Weather App: Built a weather application that displays current weather conditions using API integration.",
    techstack: "HTML, CSS, React.js, Node.js, Vercel",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        Fullstack Developer, Prodigy
        <br /> Apr 15, 2024 - May 15, 2024
      </div>
    ),
  },
  {
    title: "Cyber Security Intern, ShadowFox",
    description1:
      "Currently taking a course on cybersecurity offered by Google, covering basic to advanced topics.",
    description2:
      "Learning about various types of cyber attacks and how to prevent them.",
    description3:
      "Waiting for confirmation from ShadowFox.",
    techstack: "Python, Kali Linux, OpenVPN, Nmap, CompTIA A+",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Cyber Security Intern, ShadowFox
        <br /> Apr 14, 2024
      </div>
    ),
  },
  {
    title: "Campus Ambassador, IIT Kharagpur",
    description1:
      "Managed workshops, events, and hackathons in the college.",
    description2: "Managed social events and social media activities.",
    description3:
      "Established connections with various investors and companies.",
    techstack: "Event management, marketing",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Campus Ambassador, IIT Kharagpur
        <br /> Nov 2023 - Dec 2023
      </div>
    ),
  },
];

function WorkEx() {
  return (
    <div className="p-10">
      <h1 className="mt-20 md:mt-0 text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
        Work Experience
      </h1>
      <StickyScroll content={content} />
    </div>
  );
}

export default WorkEx;
