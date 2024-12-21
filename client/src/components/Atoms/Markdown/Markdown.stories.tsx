import type { Meta, StoryObj } from "@storybook/react";

import { colors } from "../../../providers/theme/defaults/colors";

import Markdown from "./Markdown.component";

const meta = {
    title: "Atoms/Markdown",
    component: Markdown,
    argTypes: {
        color: {
            control: "select",
            options: Object.keys(colors)
        }
    }
} satisfies Meta<typeof Markdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MarkdownStories: Story = {
    args: {
        color: "purple80",
        children: "## Hello, **Mark**!"
    }
};
