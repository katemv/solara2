import { screen, fireEvent } from "@testing-library/react";

import { renderWithProviders } from "../../../../utils/tests/renderWithProviders";
import { productListMock } from "../../../../utils/mocks";

import ProductCategory, { ProductCategoryProps } from "./ProductCategory.component";

describe("ProductCategory", () => {
    const DEFAULT_PROPS: ProductCategoryProps = {
        category: "categories.tech",
        products: productListMock,
        onProductSelected: jest.fn()
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("renders category title when category is provided", () => {
        renderWithProviders(<ProductCategory {...DEFAULT_PROPS} />);

        expect(screen.getByTestId("title")).toHaveTextContent("Tech");
    });

    it("renders \"all products\" when category is null", () => {
        renderWithProviders(<ProductCategory {...DEFAULT_PROPS} category={null} />);

        expect(screen.getByTestId("title")).toHaveTextContent("All products");
    });

    it("renders all products in the list", () => {
        renderWithProviders(<ProductCategory {...DEFAULT_PROPS} />);

        productListMock.forEach((product) => {
            expect(screen.getByTestId(`product-item-${product.id}`)).toBeInTheDocument();
        });
    });

    it("calls onProductSelected with correct product id when product is clicked", () => {
        renderWithProviders(<ProductCategory {...DEFAULT_PROPS} />);

        productListMock.forEach((product) => {
            fireEvent.click(screen.getByTestId(`product-item-${product.id}`));
            expect(DEFAULT_PROPS.onProductSelected).toHaveBeenCalledWith(product.id);
        });

        expect(DEFAULT_PROPS.onProductSelected).toHaveBeenCalledTimes(productListMock.length);
    });
});
