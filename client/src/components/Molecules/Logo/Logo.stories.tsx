import type { Meta, StoryObj } from "@storybook/react";

import { spacings } from "../../../providers/theme/defaults/spacings";
import { colors } from "../../../providers/theme/defaults/colors";
import Flex from "../../Atoms/Flex/Flex.component";
import Logo from "./Logo.component";

const meta = {
    title: "Molecules/Logo",
    component: Logo,
    argTypes: {
        mode: {
            control: "select",
            options: ["light", "dark"]
        },
        $marginBottom: {
            control: "select",
            options: Object.keys(spacings)
        }

    },
    decorators: (Story) => (
        <Flex style={{ padding: spacings.spacing3, paddingLeft: spacings.spacing5, backgroundColor: colors.dark100 }}>
            <Story />
        </Flex>
    )
} satisfies Meta<typeof Logo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LogoStory: Story = {};
