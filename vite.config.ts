import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		port: 3000,
	},
	test: {
		globals: true,
		setupFiles: ["./src/setupTests.ts"],
		environment: "jsdom",
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	plugins: [react()],
});
