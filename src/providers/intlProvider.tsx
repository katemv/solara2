import { IntlProvider } from "react-intl";
import React, { FC } from "react";
import { flatten } from "flat";

import * as messages from "../lang/en.json";

interface ProviderProps {
    children: React.ReactElement | null;
}

const CustomIntlProvider: FC<ProviderProps> = ({ children }) => (
    <IntlProvider messages={flatten(messages)} locale="en" defaultLocale="en">
        {children}
    </IntlProvider>
);

export default CustomIntlProvider;
