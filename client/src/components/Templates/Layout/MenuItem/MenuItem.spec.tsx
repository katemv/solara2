import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { screen } from "@testing-library/react";
import { ReactElement } from "react";

import { renderWithProviders } from "../../../../utils/renderWithProviders";
import MenuItem, { MenuItemProps } from "./MenuItem.component";
import ROUTES from "../../../../providers/navigation/routes";

export const MockRouter = ({ element } : { element?: ReactElement}) => (
    <Router>
        <Routes>
            <Route path="/" element={element} />
        </Routes>
    </Router>
);

describe("MenuItem Component", () => {
    const DEFAULT_PROPS: MenuItemProps = {
        to: ROUTES.ORDERS,
        intlKey: "components.nav.orders",
        isActive: false
    };

    it("renders with correct link and text", () => {
        renderWithProviders(
            <MockRouter
                element={<MenuItem { ...DEFAULT_PROPS } />}
            />
        );

        const link = screen.getByRole("link");

        expect(link).toHaveAttribute("href", ROUTES.ORDERS);
        expect(screen.getByText("Orders")).toBeInTheDocument();
    });
});
