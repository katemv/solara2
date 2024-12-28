import { BrowserRouter as Router, Routes } from "react-router-dom";
import { ReactNode } from "react";

const MockRouter = ({ children }: { children?: ReactNode }) => (
    <Router
        future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true
        }}
    >
        <Routes>
            {children}
        </Routes>
    </Router>
);

export default MockRouter;
