import { screen, fireEvent } from "@testing-library/react";

import { renderWithProviders } from "../../../utils/renderWithProviders";
import { MenuItemProps } from "./MenuItem.component";
import MenuItem from "./MenuItem.component";

describe("MenuItem Component", () => {
    const DEFAULT_PROPS: MenuItemProps = {
        intlKey: "components.nav.profile",
        iconKey: "check",
        onClick: jest.fn()
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("renders with text and icons", () => {
        renderWithProviders(<MenuItem {...DEFAULT_PROPS} />);
        const menuItem = screen.getByText("Profile");
        const arrowIcon = screen.getByText("arrow_forward_ios");
        const defaultIcon = screen.getByText("check");

        expect(menuItem).toBeInTheDocument();
        expect(arrowIcon).toBeInTheDocument();
        expect(defaultIcon).toBeInTheDocument();
    });

    it("handles click events", () => {
        renderWithProviders(<MenuItem {...DEFAULT_PROPS} />);
        const container = screen.getByTestId("menu-item");

        fireEvent.click(container!);
        expect(DEFAULT_PROPS.onClick).toHaveBeenCalledTimes(1);
    });

    it("applies correct styles to text", () => {
        renderWithProviders(<MenuItem {...DEFAULT_PROPS} />);
        const text = screen.getByText("Profile");

        expect(text).toHaveStyle({ textTransform: "capitalize" });
    });
});
