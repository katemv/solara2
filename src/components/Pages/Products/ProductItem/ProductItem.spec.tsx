import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { renderWithProviders } from "../../../../utils/tests/renderWithProviders";
import { productMock } from "../../../../utils/mocks";

import ProductItem, { ProductItemProps } from "./ProductItem.component";

describe("ProductItem", () => {
    const DEFAULT_PROPS: ProductItemProps = {
        product: {
            ...productMock,
            imageUrl: "image-url"
        },
        onClick: jest.fn()
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("renders product information correctly", () => {
        renderWithProviders(<ProductItem {...DEFAULT_PROPS} />);

        expect(screen.getByText("CosMoss Explorer")).toBeInTheDocument();
        expect(screen.getByText("Luna")).toBeInTheDocument();
        expect(screen.getByText("$80,00")).toBeInTheDocument();
        expect(screen.getByRole("img")).toHaveAttribute("src", "image-url");
        expect(screen.getByRole("img")).toHaveAttribute("alt", "CosMoss Explorer");
    });

    it("calls onClick when clicked", () => {
        renderWithProviders(<ProductItem {...DEFAULT_PROPS} />);

        userEvent.click(screen.getByText("CosMoss Explorer"));
        expect(DEFAULT_PROPS.onClick).toHaveBeenCalledTimes(1);
    });

    it("applies horizontal styling when horizontal prop is true", () => {
        const { container } = renderWithProviders(
            <ProductItem {...DEFAULT_PROPS} horizontal={true} />
        );

        const productElement = container.firstChild;

        expect(productElement).toHaveStyle({ flexDirection: "row" });
    });
});
