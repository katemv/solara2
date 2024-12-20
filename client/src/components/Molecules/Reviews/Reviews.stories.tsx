import type { Meta, StoryObj } from "@storybook/react";

import Reviews from "./Reviews.component";

const meta = {
    title: "Molecules/Reviews",
    component: Reviews,
    args: {
        rating: 4.6
    }
} satisfies Meta<typeof Reviews>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ReviewsStory: Story = {};
