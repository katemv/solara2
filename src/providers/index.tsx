import AuthProvider from "./auth/authProvider";
import RootPage from "./navigation/rootPage";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";

import ThemeProvider from "./theme/ThemeProvider";
import IntlProvider from "./intlProvider";
import { client } from "../api/client";

const RootProvider = () => {
    return (
        <IntlProvider>
            <ThemeProvider>
                <ApolloProvider client={client}>
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
                </ApolloProvider>
            </ThemeProvider>
        </IntlProvider>
    );
};

export default RootProvider;
