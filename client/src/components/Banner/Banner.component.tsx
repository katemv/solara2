import { FC } from "react";

import { Flex } from "../Flex/Flex.component";
import Text from "../Text/Text.component";
import {
    BannerOverlay,
    BannerOverlayWrap,
    StyledBanner,
    Container,
} from "./styles";

interface BannerProps {
    heading: string;
    subheading: string;
}

const Banner: FC<BannerProps> = ({ heading, subheading }) => {
    return (
        <Container justify="center" align="center" direction="column">
            <Flex>
                <StyledBanner color="pink" />
                <StyledBanner color="blue" />
            </Flex>
            <BannerOverlayWrap>
                <BannerOverlay
                    justify="center"
                    align="start"
                    direction="column"
                    gap="spacing5"
                >
                    <Text
                        as="h1"
                        intlKey={heading}
                        appearance="headline1"
                        textAlign="left"
                    />
                    <Text
                        as="p"
                        intlKey={subheading}
                        appearance="paragraph"
                        textAlign="left"
                    />
                </BannerOverlay>
            </BannerOverlayWrap>
        </Container>
    );
};

export default Banner;
