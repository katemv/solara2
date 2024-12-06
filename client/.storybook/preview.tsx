import type { Preview } from "@storybook/react";
import ThemeProvider from "../src/providers/theme/ThemeProvider";
import IntlProvider from "../src/providers/intlProvider";

const preview: Preview = {
    tags: ['autodocs'],
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        docs: {
            toc: true,
        },
    },

    decorators: [
        (Story) => (
            <IntlProvider>
                <ThemeProvider>
                    <div style={{ background: "#16161E", padding: "5rem", borderRadius: "10px" }}>
                        <Story />
                    </div>
                </ThemeProvider>
            </IntlProvider>
        ),
    ],
};

export default preview;
