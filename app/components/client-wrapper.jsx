"use client";

import dynamic from 'next/dynamic';

// Dynamically import all components with SSR: false

export const AboutSection = dynamic(() => import("./homepage/about"), { ssr: true });
export const Blog = dynamic(() => import("./homepage/blog"), { ssr: true });
export const ContactSection = dynamic(() => import("./homepage/contact"), { ssr: true });
export const Education = dynamic(() => import("./homepage/education"), { ssr: false });
export const Experience = dynamic(() => import("./homepage/experience"), { ssr: false });
export const HeroSection = dynamic(() => import("./homepage/hero-section"), { ssr: true });
export const Projects = dynamic(() => import("./homepage/projects"), { ssr: false });
export const Skills = dynamic(() => import("./homepage/skills"), { ssr: false });



