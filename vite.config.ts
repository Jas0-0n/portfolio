/// <reference types="vitest/config" />

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            output: {
                manualChunks: undefined,
            },
        },
    },
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: ["./src/tests/setup.ts"],
        css: true,
        exclude: ["node_modules", "tests/e2e"],
    },
});
