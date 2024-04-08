import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Button } from ".";

describe("Button Component", () => {
  // Button component renders with default variant and size
  it("should render Button component with default variant and size", () => {
    // Arrange
    const { getByRole } = render(<Button />);

    // Act
    const button = getByRole("button");

    // Assert
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-primary");
    expect(button).toHaveClass("text-primary-foreground");
    expect(button).toHaveClass("h-9");
    expect(button).toHaveClass("px-4");
    expect(button).toHaveClass("py-2");
  });

  it("should render Button component with specified variant and size", () => {
    // Arrange
    const { getByRole } = render(<Button variant="secondary" size="sm" />);

    // Act
    const button = getByRole("button");

    // Assert
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-secondary");
    expect(button).toHaveClass("text-secondary-foreground");
    expect(button).toHaveClass("h-8");
    expect(button).toHaveClass("rounded-md");
    expect(button).toHaveClass("px-3");
    expect(button).toHaveClass("text-xs");
  });

  it("should render Button component as a child component", () => {
    // Arrange
    const { getByRole } = render(<Button asChild />);

    // Act
    const slot = getByRole("slot");

    // Assert
    expect(slot).toBeInTheDocument();
  });
})