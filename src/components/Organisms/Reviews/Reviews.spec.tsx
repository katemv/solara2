import { screen } from "@testing-library/react";

import { renderWithProviders } from "../../../utils/tests/renderWithProviders";
import { productMock } from "../../../utils/mocks";

import Reviews, { ReviewsProps } from "./Reviews.component";

describe("Reviews Component", () => {
    const DEFAULT_PROPS: ReviewsProps = {
        reviews: productMock.reviews
    };

    it("renders the rating correctly", () => {
        renderWithProviders(<Reviews { ...DEFAULT_PROPS } />);
        expect(screen.getByText("4.5")).toBeInTheDocument();
        expect(screen.getByText("/5")).toBeInTheDocument();
    });

    it("displays total review count", () => {
        renderWithProviders(<Reviews {...DEFAULT_PROPS} />);

        expect(screen.getByText("Based on 120 reviews")).toBeInTheDocument();
    });

    it("displays correct number of filled stars", () => {
        renderWithProviders(<Reviews {...DEFAULT_PROPS} />);
        const stars = screen.getAllByTestId("star-icon");

        expect(stars).toHaveLength(5);

        stars.slice(0, 4).forEach((star) => {
            expect(star).toHaveAttribute("color", "warning");
        });

        expect(stars[4]).toHaveAttribute("color", "dark60");
    });

    it("renders progress bars for all ratings", () => {
        renderWithProviders(<Reviews {...DEFAULT_PROPS} />);
        const progressBars = screen.getAllByTestId("progress-bar");

        expect(progressBars).toHaveLength(5);
    });
});
