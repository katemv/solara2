import { screen, fireEvent } from "@testing-library/react";

import { renderWithProviders } from "../../../utils/renderWithProviders";
import Button from "./Button.component";


describe("Button Component", () => {
    describe("Rendering", () => {
        it("renders button with correct label", () => {
            renderWithProviders(
                <Button
                    label="messages.continue"
                    onClick={() => {}}
                />
            );

            const buttonElement = screen.getByText("Continue1");

            expect(buttonElement).toBeInTheDocument();
        });
    });

    describe("Interactions", () => {
        it("calls onClick handler when clicked", () => {
            const mockOnClick = jest.fn();

            renderWithProviders(
                <Button
                    label="messages.continue"
                    onClick={mockOnClick}
                />
            );

            const buttonElement = screen.getByText("Continue");

            fireEvent.click(buttonElement);

            expect(mockOnClick).toHaveBeenCalledTimes(1);
        });

        it("disables button when disabled prop is true", () => {
            const mockOnClick = jest.fn();

            renderWithProviders(
                <Button
                    label="test.button.label"
                    onClick={mockOnClick}
                    disabled
                />
            );

            const buttonElement = screen.getByRole("button");

            fireEvent.click(buttonElement);

            expect(buttonElement).toBeDisabled();
            expect(mockOnClick).toHaveBeenCalledTimes(0);
        });
    });

    describe("Loading State", () => {
        it("shows loading state when loading is true", () => {
            renderWithProviders(
                <Button
                    label="test.button.label"
                    onClick={() => {}}
                    loading
                />
            );

            const loadingText = screen.getByText("Loading...");

            expect(loadingText).toBeInTheDocument();

            const buttonElement = screen.getByRole("button");

            expect(buttonElement).toBeDisabled();
        });
    });
});
