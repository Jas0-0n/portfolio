import { describe, expect, it } from "vitest";
import type { Education, HeroMeta, NavLink, SocialLink, TimelineItem, Work } from "./index";

describe("Shared TypeScript types", () => {
    it("TimelineItem has required fields", () => {
        const item: TimelineItem = {
            date: "Oct 2024 — Present",
            company: "YOHO",
            role: "APM",
            desc: "desc",
            skills: ["APM"],
            active: true,
        };
        expect(item.date).toBe("Oct 2024 — Present");
        expect(item.active).toBe(true);
    });

    it("Education has required fields", () => {
        const edu: Education = {
            degree: "MSc",
            school: "HKBU",
            year: "2020 — 2021",
        };
        expect(edu.school).toBe("HKBU");
    });

    it("Work has required fields", () => {
        const work: Work = {
            icon: "🔍",
            title: "Search",
            description: "desc",
            tags: ["React"],
        };
        expect(work.tags).toHaveLength(1);
    });

    it("SocialLink has required fields", () => {
        const link: SocialLink = {
            href: "https://github.com",
            label: "GH",
            title: "GitHub",
        };
        expect(link.label).toBe("GH");
    });

    it("NavLink has required fields", () => {
        const nav: NavLink = {
            href: "#about",
            label: "About",
        };
        expect(nav.href).toBe("#about");
    });

    it("HeroMeta has required fields", () => {
        const meta: HeroMeta = {
            status: "AVAILABLE",
            name: "JASON",
            location: "HONG KONG",
        };
        expect(meta.status).toBe("AVAILABLE");
    });
});
