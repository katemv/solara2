import { render, screen } from "@testing-library/react";

describe("Button Component", () => {
    describe("Rendering", () => {
        it("renders button with correct label", () => {
            render(
                <div>Click Me</div>
            );

            const buttonElement = screen.getByText("Click Me");

            expect(buttonElement).toBeInTheDocument();
        });
    });
});
