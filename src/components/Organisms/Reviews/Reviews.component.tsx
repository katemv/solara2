import { FC } from "react";

import Flex, { FlexProps } from "../../Atoms/Flex/Flex.component";
import Text from "../../Atoms/Text/Text.component";
import Icon from "../../Atoms/Icon/Icon.component";

import { Container, ProgressBar, ProgressContainer } from "./styles";
import { Product } from "../../../generated/graphql";

export interface ReviewsProps extends Pick<FlexProps, "marginBottom" | "fullWidth"> {
    reviews: Product["reviews"],
}

const Reviews: FC<ReviewsProps> = ({ reviews, marginBottom, fullWidth }) => {
    const itemsReversed = [...reviews.scoreDistribution].sort((a, b) => b.score - a.score);

    return (
        <Container gap="spacing6" marginBottom={marginBottom} fullWidth={fullWidth}>
            <Flex direction="column" align="start">
                <Flex align="end" gap="spacing1" marginBottom="spacing1">
                    <Text plainText={String(reviews.rating)} appearance="headline1" />
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
                    values={{ reviewCount: reviews.totalCount }}
                    style={{ minWidth: "130px" }}
                />
                <Flex gap="spacing1">
                    {reviews.scoreDistribution.map((rating) => (
                        <Icon
                            testId="star-icon"
                            key={rating?.score}
                            type="star"
                            color={rating.score <= Math.floor(reviews.rating) ? "warning" : "dark60"}
                            $filled
                        />
                    )
                    )}
                </Flex>
            </Flex>
            <Flex direction="column" justify="space-between" fullWidth>
                {itemsReversed.map((element) => (
                    <Flex key={element.score} align="baseline" gap="spacing2" fullWidth>
                        <Text
                            color="dark80"
                            appearance="headline6"
                            intlKey="pages.shop.star_count"
                            values={{ starCount: element.score }}
                            style={{ width: "65px" }}
                        />
                        <ProgressContainer data-testid="progress-bar">
                            <ProgressBar $percent={element.count / reviews.totalCount * 100} />
                        </ProgressContainer>
                    </Flex>
                ))}
            </Flex>
        </Container>
    );
};

export default Reviews;
