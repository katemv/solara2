import { screen, act, fireEvent } from "@testing-library/react";

import { renderWithProviders } from "../../../utils/tests/renderWithProviders";

import Modal, { ModalProps } from "./Modal.component";
import { animationDuration } from "./styles";

describe("Modal Component", () => {
    const DEFAULT_PROPS: ModalProps = {
        visible: true,
        onClose: jest.fn(),
        children: (
            <div>Modal Content</div>
        )
    };

    beforeEach(() => {
        const portalRoot = document.createElement("div");

        portalRoot.setAttribute("id", "portal-root");
        document.body.appendChild(portalRoot);
    });

    afterEach(() => {
        const portalRoot = document.getElementById("portal-root");

        if (portalRoot) {
            document.body.removeChild(portalRoot);
        }

        jest.clearAllMocks();
    });

    it("renders when visible", () => {
        renderWithProviders(<Modal {...DEFAULT_PROPS} />);

        expect(screen.getByText("Modal Content")).toBeInTheDocument();
    });

    it("calls onClose when clicking outside", () => {
        renderWithProviders(<Modal {...DEFAULT_PROPS} />);

        fireEvent.mouseDown(document.body);
        expect(DEFAULT_PROPS.onClose).toHaveBeenCalled();
    });

    it("renders fixed button when provided", () => {
        renderWithProviders(
            <Modal {...DEFAULT_PROPS} fixedButton={<button>Fixed Button</button>} />
        );

        expect(screen.getByText("Fixed Button")).toBeInTheDocument();
    });

    it("unmounts after animation on close", async () => {
        const { rerender } = renderWithProviders(<Modal {...DEFAULT_PROPS} />);

        expect(screen.getByText("Modal Content")).toBeInTheDocument();

        rerender(<Modal {...DEFAULT_PROPS} visible={false} />);

        await act(async () => {
            await new Promise((resolve) => setTimeout(resolve, animationDuration));
        });

        expect(screen.queryByText("Modal Content")).not.toBeInTheDocument();
    });
});
