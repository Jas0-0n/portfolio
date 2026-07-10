import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import type { Work } from "../../../types";
import { WorkCard } from "./WorkCard";

describe("WorkCard", () => {
    const mockWork: Work = {
        icon: "🔍",
        title: "Product Search Engine",
        description: "A search engine",
        tags: ["React", "Elasticsearch", "Redis", "Node.js"],
    };

    it("renders icon, title, description, and tags", () => {
        render(<WorkCard work={mockWork} />);
        expect(screen.getByText("🔍")).toBeInTheDocument();
        expect(screen.getAllByText("Product Search Engine")).toHaveLength(2);
        expect(screen.getByText("A search engine")).toBeInTheDocument();
        expect(screen.getByText("React")).toBeInTheDocument();
    });
});
