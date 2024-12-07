import type { Meta, StoryObj } from "@storybook/react";
import { useForm } from "react-hook-form";

import { iconTypes } from "../Icon/config";
import Input from "./Input.component";

const meta = {
    title: "Atoms/Input",
    component: Input,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        fullWidth: { control: "boolean" },
        placeholderIntlKey: { control: "text" },
        type: {
            control: "select",
            options: ["password", "default"],
        },
        prefixIconType: {
            control: "select",
            options: [...iconTypes, undefined],
        },
        postfixIconType: {
            control: "select",
            options: [...iconTypes, undefined],
        },
    },
    args: {
        fullWidth: false,
        placeholderIntlKey: "forms.email_placeholder",
        name: "email",
        prefixIconType: "mail",
        postfixIconType: "check",
    },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputStory: Story = {
    render: function Render(args) {
        const { control } = useForm();

        return (
            <Input {...args} control={control} name="email" />
        );
    },
};
