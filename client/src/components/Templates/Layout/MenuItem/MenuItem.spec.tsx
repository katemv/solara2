import { screen } from "@testing-library/react";

import { renderWithProviders } from "../../../../utils/tests/renderWithProviders";
import MenuItem, { MenuItemProps } from "./MenuItem.component";
import ROUTES from "../../../../providers/navigation/routes";

describe("MenuItem Component", () => {
    const DEFAULT_PROPS: MenuItemProps = {
        to: ROUTES.ORDERS,
        intlKey: "components.nav.orders",
        isActive: false
    };

    it("renders with correct link and text", () => {
        renderWithProviders(<MenuItem { ...DEFAULT_PROPS } />);

        const link = screen.getByRole("link");

        expect(link).toHaveAttribute("href", ROUTES.ORDERS);
        expect(screen.getByText("Orders")).toBeInTheDocument();
    });
});
