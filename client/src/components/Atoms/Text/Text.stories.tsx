import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { typography } from "../../../providers/theme/defaults/typography";
import { colors } from "../../../providers/theme/defaults/colors";
import Flex from "../Flex/Flex.component";
import Text from "./Text.component";

const SampleText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

const meta = {
    title: "Atoms/Text",
    component: Text,
    argTypes: {
        intlKey: { control: "text" },
        plainText: { control: "text" },
        fontWeight: { control: "number" },
        appearance: {
            control: "select",
            options: [
                "headline1",
                "headline2",
                "headline3",
                "headline4",
                "headline5",
                "headline6",
                "paragraph",
                "small",
                "tiny",
                "logo",
            ],
        },
        color: {
            control: "select",
            options: Object.keys(colors),
        },
        textAlign: {
            control: "select",
            options: Object.keys(colors),
        },
        textTransform: {
            control: "select",
            options: ["none", "uppercase"],
        },
        marginBottom: {
            control: "select",
            options: []
        },

    },
    args: {
        onClick: fn(),
        color: "black80",
    },
    render: (args) => (
        <Flex gap="spacing6" marginBottom="spacing6">
            <Text
                color="black80"
                appearance={args.appearance}
                plainText={args.appearance} textTransform="capitalize"
                textAlign="left"
                customStyles={{minWidth: "180px"}}
            />

            <Flex direction="column" align="start" gap="spacing2">
                <Text
                    color="black80"
                    appearance={args.appearance}
                    plainText={SampleText}
                    textAlign="left"
                />
                <Text
                    color="black60"
                    plainText={`
                        ${args.appearance ? typography[args.appearance]?.fontWeight : "500"} / 
                        ${args.appearance ? typography[args.appearance]?.fontSize : "14"} / 
                        ${args.appearance ? typography[args.appearance]?.lineHeight : "140"}
                    `}
                />
            </Flex>
        </Flex>
    ),
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Headline1: Story = {
    args: {
        appearance: "headline1",
        color: "black80",
    },
};

export const Headline2: Story = {
    args: {
        appearance: "headline2",
        color: "black80",
    },
};

export const Headline3: Story = {
    args: {
        appearance: "headline3",
        color: "black80",
    },
};

export const Headline4: Story = {
    args: {
        appearance: "headline4",
        color: "black80",
    },
};

export const Headline5: Story = {
    args: {
        appearance: "headline5",
        color: "black80",
    },
};

export const Headline6: Story = {
    args: {
        appearance: "headline6",
        color: "black80",
    },
};

export const Paragraph: Story = {
    args: {
        appearance: "paragraph",
        color: "black80",
    },
};

export const Small: Story = {
    args: {
        appearance: "small",
        color: "black80",
    },
};

export const Tiny: Story = {
    args: {
        appearance: "tiny",
        color: "black80",
    },
};
