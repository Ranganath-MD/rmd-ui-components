// App.test.tsx
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("App", () => {
	it("should render the title", () => {
		// Arrange : render the component under test
		render(<App />);

		// Act : get the element to test

		// Assert
		expect(screen.getByText("Hello, world!")).toBeInTheDocument();
		expect(screen.getByTestId("app-wrapper")).toBeInTheDocument();
	});
});
