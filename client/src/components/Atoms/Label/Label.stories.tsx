import type { Meta, StoryObj } from "@storybook/react";

import { colors } from "../../../providers/theme/defaults/colors";

import Label from "./Label.component";

const meta = {
    title: "Atoms/Label",
    component: Label,
    argTypes: {
        intlKey: {
            control: "text"
        },
        color: {
            control: "select",
            options: Object.keys(colors)
        }
    }
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LabelStories: Story = {
    args: {
        intlKey: "pages.shop.available",
        color: "purple80"
    }
};
