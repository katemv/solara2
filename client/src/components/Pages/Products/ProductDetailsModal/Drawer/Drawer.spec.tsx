import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";

import { renderWithProviders } from "../../../../../utils/test-setup/renderWithProviders";
import Drawer, { DrawerProps, DrawerState } from "./Drawer.component";
import { productDetailsDrawerText } from "../../../../../utils/mocks";

describe("Drawer", () => {
    const DEFAULT_PROPS: DrawerProps = {
        isOpen: true,
        onClose: jest.fn(),
        drawerState: DrawerState.Details
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("renders correctly when open", () => {
        renderWithProviders(<Drawer {...DEFAULT_PROPS} />);

        expect(screen.getByTestId("drawer")).toHaveStyle({
            transform: "translateX(0%)"
        });
        expect(screen.getByTestId("drawer-heading").textContent).toContain("Product details");
        expect(screen.getByTestId("markdown")).toBeInTheDocument();
    });

    it("calls onClose when back button is clicked", () => {
        renderWithProviders(<Drawer {...DEFAULT_PROPS} />);

        userEvent.click(screen.getByRole("button", { name: /arrow_back/i }));
        expect(DEFAULT_PROPS.onClose).toHaveBeenCalledTimes(1);
    });

    it("renders correct content for different drawer states", () => {
        const states = [
            DrawerState.Details,
            DrawerState.Shipping,
            DrawerState.Returns
        ];

        states.forEach((state: DrawerState) => {
            const { unmount } = renderWithProviders(
                <Drawer {...DEFAULT_PROPS} drawerState={state} />
            );

            const container = screen.getByTestId("markdown");

            expect(container.textContent).toContain(productDetailsDrawerText[state]);
            unmount();
        });
    });

    it("handles reviews drawer state", () => {
        renderWithProviders(
            <Drawer {...DEFAULT_PROPS} drawerState={DrawerState.Shipping} />
        );
        expect(screen.getByTestId("drawer-heading").textContent).toContain("Shipping information");
        expect(screen.getByTestId("markdown")).toBeInTheDocument();
    });
});
