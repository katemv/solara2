import AuthProvider from "./auth/authProvider";
import RootPage from "./navigation/rootPage";
import { BrowserRouter as Router } from "react-router-dom";
import ThemeProvider from "./theme/ThemeProvider";
import { IntlProvider } from "react-intl";
import * as messages from "../lang/en.json";
import { flatten } from "flat";

const RootProvider = () => {
    return (
        <IntlProvider
            messages={flatten(messages)}
            locale="en"
            defaultLocale="en"
        >
            <ThemeProvider>
                <Router>
                    <AuthProvider>
                        <RootPage />
                    </AuthProvider>
                </Router>
            </ThemeProvider>
        </IntlProvider>
    );
};

export default RootProvider;
