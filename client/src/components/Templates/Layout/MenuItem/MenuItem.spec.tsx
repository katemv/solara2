import { screen } from "@testing-library/react";
import { Route } from "react-router-dom";

import { renderWithProviders } from "../../../../utils/test-setup/renderWithProviders";
import MockRouter from "../../../../utils/test-setup/routerSetup";
import MenuItem, { MenuItemProps } from "./MenuItem.component";
import ROUTES from "../../../../providers/navigation/routes";

describe("MenuItem Component", () => {
    const DEFAULT_PROPS: MenuItemProps = {
        to: ROUTES.ORDERS,
        intlKey: "components.nav.orders",
        isActive: false
    };

    it("renders with correct link and text", () => {
        renderWithProviders(
            <MockRouter>
                <Route path="/" element={<MenuItem { ...DEFAULT_PROPS } />} />
            </MockRouter>
        );

        const link = screen.getByRole("link");

        expect(link).toHaveAttribute("href", ROUTES.ORDERS);
        expect(screen.getByText("Orders")).toBeInTheDocument();
    });
});
