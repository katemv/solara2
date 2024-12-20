import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Flex from "../Flex/Flex.component";
import Text from "../Text/Text.component";

import DoubleButton from "./DoubleButton.component";

const meta = {
    title: "Atoms/DoubleButton",
    component: DoubleButton,
    args: {
        onClick: fn(),
        fullWidth: false,
        disabled: false,
        loading: false,
        loadingLabel: "Work in progress..",
        type: "button",
        leftContent: (
            <Flex direction="column">
                <Text
                    as="span"
                    plainText="$120"
                    textAlign="left"
                    fontWeight={600}
                />
                <Text
                    as="span"
                    plainText="Unit price"
                    textAlign="left"
                    appearance="small"
                    color="dark10"
                />
            </Flex>
        ),
        label: "messages.buy_now"
    }
} satisfies Meta<typeof DoubleButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DoubleButtonStories: Story = {};
