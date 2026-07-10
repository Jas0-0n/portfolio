import type { Education, TimelineItem } from "../types";

export interface ExperienceData {
    timeline: TimelineItem[];
    education: Education[];
}

export const experience: ExperienceData = {
    timeline: [
        {
            date: "Oct 2024 — Present",
            company: "YOHO HONG KONG LTD (HKG:2347)",
            role: "Assistant Product Manager",
            desc: "Leading Agile project management for B2C/B2B ecommerce platform with expertise in rapid prototyping and MVP development. Coordinated UAT processes, gathered technical requirements, and facilitated cross-functional collaboration between engineering, design, and business teams to deliver user-centered solutions.",
            skills: ["APM", "Agile / Jira", "Figma", "System Design", "Cross-functional"],
            active: true,
        },
        {
            date: "Apr 2023 — Sep 2024",
            company: "YOHO HONG KONG LTD",
            role: "Senior Web Developer",
            desc: "Architected and optimized high-performance systems including search engines and recommendation platforms using Redux.js, Redis, and Node.js. Led infrastructure development serving millions of users, implemented advanced caching strategies, and established scalable backend solutions.",
            skills: ["React", "Redux", "Redux-Saga", "Node.js", "Redis"],
            active: false,
        },
        {
            date: "Sep 2021 — Mar 2023",
            company: "YOHO HONG KONG LTD",
            role: "Web Developer",
            desc: "Developed robust frontend applications using React.js, Node.js, and SQL while implementing responsive designs with HTML and CSS. Built scalable web solutions, optimized database interactions, and contributed to full-stack development projects for ecommerce platforms.",
            skills: ["TypeScript", "Python", "Elasticsearch", "Code Review", "Node.js"],
            active: false,
        },
    ],
    education: [
        {
            degree: "MSc Advanced Information Systems",
            school: "Hong Kong Baptist University",
            year: "2020 — 2021",
        },
        {
            degree: "BSc Computer Science",
            school: "Zhaoqing University",
            year: "2016 — 2020",
        },
    ],
};
