import type { Work } from "../types";

export const work: Work[] = [
    {
        icon: "🔍",
        title: "Product Search Engine",
        description:
            "High-performance search with faceted filtering, autocomplete suggestions, and ML-powered ranking. Serves millions of product queries daily with sub-second latency.",
        tags: ["React", "Elasticsearch", "Redis", "Node.js"],
    },
    {
        icon: "📊",
        title: "Recommendation System",
        description:
            "Personalized product recommendation engine driving cross-sell and upsell. Implemented A/B testing framework to optimize conversion lift across user segments.",
        tags: ["Python", "Redis", "React", "A/B Testing"],
    },
    {
        icon: "📡",
        title: "Advertising System",
        description:
            "In-house ad serving platform with real-time bidding, campaign lifecycle management, and comprehensive performance analytics dashboard for advertisers.",
        tags: ["React", "Redux", "Node.js", "System Design"],
    },
    {
        icon: "⚡",
        title: "Flash Delivery",
        description:
            "High-throughput flash sale delivery system handling traffic spikes with real-time inventory management, distributed queue orchestration, and failure recovery.",
        tags: ["Node.js", "Redis", "Queue", "Performance"],
    },
];
