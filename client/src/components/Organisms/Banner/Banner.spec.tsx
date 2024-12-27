import { screen } from "@testing-library/react";

import { renderWithProviders } from "../../../utils/test-setup/renderWithProviders";
import Banner, { BannerProps } from "./Banner.component";

describe("Banner Component", () => {
    const DEFAULT_PROPS: BannerProps = {
        headingIntlKey: "categories.tech",
        subheadingIntlKey: "categories.tech_description"
    };

    it("renders banner with text", () => {
        renderWithProviders(<Banner {...DEFAULT_PROPS} />);

        const heading = screen.getByText("Tech");
        const subheading = screen.getByText("Welcome to a space where you don't need a telescope or a spaceship to experience the future. Solara's Tech category is custom-designed to stimulate and satiate your thirst for innovation. Our curation of the most futuristic products doesn't just meet the standards of tomorrow; it sets them.");

        expect(heading).toBeInTheDocument();
        expect(subheading).toBeInTheDocument();
    });

    it("renders banner with gradient", () => {
        renderWithProviders(<Banner {...DEFAULT_PROPS} />);

        expect(screen.getByTestId("gradient-pink")).toBeInTheDocument();
        expect(screen.getByTestId("gradient-blue")).toBeInTheDocument();
    });
});
