import type { Meta, StoryObj } from "@storybook/react";

import { productMock } from "../../../utils/mocks";
import Reviews from "./Reviews.component";

const meta = {
    title: "Organisms/Reviews",
    component: Reviews,
    args: {
        rating: 4.6,
        reviews: productMock.reviews
    }
} satisfies Meta<typeof Reviews>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ReviewsStory: Story = {};
