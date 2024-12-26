import AuthProvider from "./auth/authProvider";
import RootPage from "./navigation/rootPage";
import { BrowserRouter as Router } from "react-router-dom";

import ThemeProvider from "./theme/ThemeProvider";
import IntlProvider from "./intlProvider";

const RootProvider = () => {
    return (
        <IntlProvider>
            <ThemeProvider>
                <Router
                    future={{
                        v7_startTransition: true,
                        v7_relativeSplatPath: true
                    }}
                >
                    <AuthProvider>
                        <RootPage />
                    </AuthProvider>
                </Router>
            </ThemeProvider>
        </IntlProvider>
    );
};

export default RootProvider;
