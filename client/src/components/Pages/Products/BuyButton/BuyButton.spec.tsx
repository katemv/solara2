import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";

import { renderWithProviders } from "../../../../utils/test-setup/renderWithProviders";
import BuyButton, { BuyButtonProps } from "./BuyButton.component";

describe("BuyButton", () => {
    const DEFAULT_PROPS: BuyButtonProps = {
        price: 1000,
        onClick: jest.fn()
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("renders correctly with default props", () => {
        renderWithProviders(<BuyButton {...DEFAULT_PROPS} />);

        expect(screen.getByText("$10,00")).toBeInTheDocument();
        expect(screen.getByText("Unit price")).toBeInTheDocument();
        expect(screen.getByText("Buy now")).toBeInTheDocument();
    });

    it("calls onClick when button is clicked", () => {
        renderWithProviders(<BuyButton {...DEFAULT_PROPS} />);

        userEvent.click(screen.getByText("Buy now"));
        expect(DEFAULT_PROPS.onClick).toHaveBeenCalledTimes(1);
    });

    it("displays loading state correctly", () => {
        renderWithProviders(
            <BuyButton
                {...DEFAULT_PROPS}
                loading={true}
            />
        );

        expect(screen.getByTestId("spinner")).toBeInTheDocument();
        expect(screen.getByText("Loading...")).toBeInTheDocument();
    });

    it("handles disabled state correctly", () => {
        renderWithProviders(<BuyButton {...DEFAULT_PROPS} disabled={true} />);

        userEvent.click(screen.getByText("Buy now"));
        expect(DEFAULT_PROPS.onClick).not.toHaveBeenCalled();
    });
});
