import type { Meta, StoryObj } from "@storybook/react";

import Icon from "./Icon.component";
import { iconTypes } from "./config";
import { colors } from "../../../providers/theme/defaults/colors";

const meta = {
    title: "Atoms/Icon",
    component: Icon,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        type: {
            control: "select",
            options: iconTypes,
        },
        color: {
            control: "select",
            options: Object.keys(colors)
        }
    },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const IconStory: Story = {
    args: {
        type: "cancel",
        color: "purple80"
    },
};
