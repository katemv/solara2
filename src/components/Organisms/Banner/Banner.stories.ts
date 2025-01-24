import type { Meta, StoryObj } from "@storybook/react";

import Banner from "./Banner.component";

const meta = {
    title: "Organisms/Banner",
    component: Banner,
    argTypes: {
        headingIntlKey: { control: "text" },
        subheadingIntlKey: { control: "text" }
    },
    args: {
        headingIntlKey: "pages.shop.banner",
        subheadingIntlKey: "pages.shop.banner_description"
    }
} satisfies Meta<typeof Banner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BannerStory: Story = {};
