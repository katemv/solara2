import { renderWithProviders } from "../../../utils/renderWithProviders";
import { fireEvent, screen } from "@testing-library/react";
import Tabs from "./Tabs.component";

describe("Tabs Component", () => {
    const mockTabs = [
        { label: "categories.tech", content: <div>Content Tech</div> },
        { label: "categories.fashion", content: <div>Content Fashion</div> }
    ];

    it("renders all tab labels", () => {
        renderWithProviders(<Tabs tabs={mockTabs} />);

        expect(screen.getByText("Tech")).toBeInTheDocument();
        expect(screen.getByText("Fashion")).toBeInTheDocument();
    });

    it("shows correct content for active tab when provided", () => {
        renderWithProviders(<Tabs tabs={mockTabs} activeTab={1} />);

        expect(screen.queryByText("Content Tech")).not.toBeInTheDocument();
        expect(screen.getByText("Content Fashion")).toBeInTheDocument();
    });

    it("switches content when clicking different tab", () => {
        renderWithProviders(<Tabs tabs={mockTabs} />);

        expect(screen.getByText("Content Tech")).toBeInTheDocument();
        expect(screen.queryByText("Content Fashion")).not.toBeInTheDocument();

        fireEvent.click(screen.getByText("Fashion"));

        expect(screen.queryByText("Content Tech")).not.toBeInTheDocument();
        expect(screen.getByText("Content Fashion")).toBeInTheDocument();
    });

    it("maintains active state on clicked tab", () => {
        renderWithProviders(<Tabs tabs={mockTabs} />);

        fireEvent.click(screen.getByText("Tech"));
        expect(screen.getByText("Content Tech")).toBeInTheDocument();
    });
});
