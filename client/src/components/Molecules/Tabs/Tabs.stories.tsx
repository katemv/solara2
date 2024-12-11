import type { Meta, StoryObj } from "@storybook/react";

import Tabs from "./Tabs.component";
import Text from "../../Atoms/Text/Text.component";

const meta = {
    title: "Molecules/Tabs",
    component: Tabs,
    args: {
        tabs: [{
            label: "One",
            content: <Text plainText="This is the content for tab one." />
        },
        {
            label: "Two",
            content: <Text plainText="This is the content for tab two." />
        },
        {
            label: "Three",
            content: <Text plainText="This is the content for tab three." />
        }]
    }
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TabsStory: Story = {};
