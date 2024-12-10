import type { Meta, StoryObj } from "@storybook/react";

import { colors } from "../../../providers/theme/defaults/colors";
import Icon from "./Icon.component";
import { Icons } from "../../../providers/theme/defaults/icons";

const meta = {
    title: "Atoms/Icon",
    component: Icon,
    argTypes: {
        type: {
            control: "select",
            options: Icons,
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
