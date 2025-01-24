import type { Meta, StoryObj } from "@storybook/react";

import { Icons } from "../../../providers/theme/defaults/icons";

import IconButton from "./IconButton.component";

const meta = {
    title: "Atoms/IconButton",
    component: IconButton,
    argTypes: {
        iconType: {
            control: "select",
            options: Icons
        }
    },
    args: {
        iconType: "cancel"
    }
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const IconStory: Story = {};
