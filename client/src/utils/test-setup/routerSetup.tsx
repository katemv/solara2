import { BrowserRouter as Router, Routes } from "react-router-dom";
import { ReactElement } from "react";

const MockRouter = ({ children }: { children: ReactElement}) => (
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
