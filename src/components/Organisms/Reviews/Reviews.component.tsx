import { FC } from "react";

import Flex, { FlexProps } from "../../Atoms/Flex/Flex.component";
import Text from "../../Atoms/Text/Text.component";
import Icon from "../../Atoms/Icon/Icon.component";

import { Container, ProgressBar, ProgressContainer } from "./styles";
import { IProduct } from "../../../types";

export interface ReviewsProps extends Pick<FlexProps, "marginBottom" | "fullWidth"> {
    rating: number,
    reviews: IProduct["reviews"],
}

const ratings = [1, 2, 3, 4, 5];
const ratingsReversed = [5, 4, 3, 2, 1];

const Reviews: FC<ReviewsProps> = ({ rating, reviews, marginBottom, fullWidth }) => {
    const totalReviews = Object.values(reviews).reduce((value, acc) => acc + value, 0);

    return (
        <Container gap="spacing6" marginBottom={marginBottom} fullWidth={fullWidth}>
            <Flex direction="column" align="start">
                <Flex align="end" gap="spacing1" marginBottom="spacing1">
                    <Text plainText={String(rating)} appearance="headline1" />
                    <Text
                        plainText="/5"
                        appearance="headline5"
                        fontWeight={500}
                        style={{ lineHeight: 1.7 }}
                        color="dark20"
                    />
                </Flex>
                <Text
                    appearance="headline6"
                    intlKey="pages.shop.based_on_reviews"
                    color="dark60"
                    fontWeight={500}
                    marginBottom="spacing3"
                    values={{ reviewCount: totalReviews }}
                    style={{ minWidth: "130px" }}
                />
                <Flex gap="spacing1">
                    {ratings.map((element) => (
                        <Icon
                            testId="star-icon"
                            key={element}
                            type="star"
                            color={element <= Math.floor(rating) ? "warning" : "dark60"}
                            $filled
                        />
                    ))}
                </Flex>
            </Flex>
            <Flex direction="column" justify="space-between" fullWidth>
                {ratingsReversed.map((element) => (
                    <Flex key={element} align="baseline" gap="spacing2" fullWidth>
                        <Text
                            color="dark80"
                            appearance="headline6"
                            intlKey="pages.shop.star_count"
                            values={{ starCount: element }}
                            style={{ width: "65px" }}
                        />
                        <ProgressContainer data-testid="progress-bar">
                            <ProgressBar $percent={reviews[element] / totalReviews * 100} />
                        </ProgressContainer>
                    </Flex>
                ))}
            </Flex>
        </Container>
    );
};

export default Reviews;
