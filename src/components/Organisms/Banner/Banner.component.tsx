import { FC } from "react";

import Flex from "../../Atoms/Flex/Flex.component";
import Text from "../../Atoms/Text/Text.component";
import { BannerOverlay, BannerOverlayWrap, StyledBanner, Container } from "./styles";

export interface BannerProps {
    headingIntlKey: string;
    subheadingIntlKey: string;
}

const Banner: FC<BannerProps> = ({ headingIntlKey, subheadingIntlKey }) => {
    return (
        <Container justify="center" align="center" direction="column">
            <Flex>
                <StyledBanner color="pink" data-testid="gradient-pink" />
                <StyledBanner color="blue" data-testid="gradient-blue" />
            </Flex>
            <BannerOverlayWrap>
                <BannerOverlay justify="center" align="start" direction="column" gap="spacing5">
                    <Text as="h1" intlKey={headingIntlKey} appearance="headline1" />
                    <Text as="p" intlKey={subheadingIntlKey} appearance="paragraph" />
                </BannerOverlay>
            </BannerOverlayWrap>
        </Container>
    );
};

export default Banner;
