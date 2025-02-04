import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ProductDetailsModal, { ProductDetailsModalProps } from "./ProductDetailsModal.component";
import { renderWithProviders } from "../../../../utils/tests/renderWithProviders";
import { productMock } from "../../../../utils/mocks";

import { defaultMock } from "./mocks";

describe("ProductDetailsModal", () => {
    const DEFAULT_PROPS: ProductDetailsModalProps = {
        visible: true,
        onClose: jest.fn(),
        productId: productMock.id
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("renders product details correctly", async () => {
        renderWithProviders(<ProductDetailsModal {...DEFAULT_PROPS} />, { mocks: defaultMock });

        await waitFor(() => {
            expect(screen.getByText("CosMoss Explorer")).toBeInTheDocument();
        });

        expect(screen.getByText("Luna")).toBeInTheDocument();
        expect(screen.getByText(productMock.description, { trim: false, collapseWhitespace: false }))
            .toBeInTheDocument();
        expect(screen.getByText("$80,00")).toBeInTheDocument();
        expect(screen.getByText("4.6")).toBeInTheDocument();
        expect(screen.getByText("(120 Reviews)")).toBeInTheDocument();
    });

    it("calls onClose when back button is clicked", () => {
        renderWithProviders(<ProductDetailsModal {...DEFAULT_PROPS} />, { mocks: defaultMock });

        userEvent.click(screen.getByTestId("close-modal"));
        expect(DEFAULT_PROPS.onClose).toHaveBeenCalledTimes(1);
    });

    it("opens product details drawer", async () => {
        renderWithProviders(<ProductDetailsModal {...DEFAULT_PROPS} />, { mocks: defaultMock });

        await waitFor(() => {
            expect(screen.getByTestId("open-product-details")).toBeInTheDocument();
        });

        userEvent.click(screen.getByTestId("open-product-details"));

        expect(screen.getByTestId("product-details-drawer")).toHaveStyle({ transform: "translateX(0%)" });
        expect(screen.getByTestId("markdown")).toBeInTheDocument();
    });

    it("opens and closes different drawer states", async () => {
        renderWithProviders(<ProductDetailsModal {...DEFAULT_PROPS} />, { mocks: defaultMock });

        await waitFor(() => {
            expect(screen.getByTestId("open-shipping-information")).toBeInTheDocument();
        });

        userEvent.click(screen.getByTestId("open-shipping-information"));

        const drawer = screen.getByTestId("product-details-drawer");
        const backButton = screen.getByTestId("close-drawer");
        const textContent = screen.getByTestId("markdown");

        expect(drawer).toHaveStyle({ transform: "translateX(0%)" });
        expect(textContent).toBeInTheDocument();

        userEvent.click(backButton);

        await waitFor(() => {
            expect(drawer).toHaveStyle({ transform: "translateX(100%)" });
            expect(textContent).not.toBeInTheDocument();
        });
    });
});
