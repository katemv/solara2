import { css, styled } from "styled-components";
import { Flex } from "../Flex/Flex.component";

const blueGradient = css`
    background-image: linear-gradient(to right top, #6d327c, #485da6, #00a1ba, #00bf98, #36c486);
`;

const pinkGradient = css`
    background-image: linear-gradient(
        to right top,
        #38438b,
        #944b94,
        #d75a88,
        #ff7e71,
        #ffb25f,
        #ffeb68
    );
`;

interface BannerProps {
    color: "pink" | "blue";
}

export const StyledBanner = styled.div<BannerProps>(
    ({ theme, color }) => css`
        @keyframes flickerPink {
            0% {
                opacity: 1;
            }
            50% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }

        @keyframes flickerBlue {
            0% {
                opacity: 0;
            }
            50% {
                opacity: 1;
            }
            100% {
                opacity: 0;
            }
        }

        position: absolute;
        top: 0;
        left: 0;
        background-size: cover;
        width: 100%;
        height: 500px;
        animation-name: ${color === "pink" ? "flickerPink" : "flickerBlue"};
        animation-duration: 10s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
        ${color === "pink" ? pinkGradient : blueGradient}
    `
);

export const BannerOverlayWrap = styled(Flex)(
    ({ theme }) => css`
        z-index: 1;
        height: 500px;
        width: 100%;
        max-width: ${theme.maxContentWidth};
    `
);

export const BannerOverlay = styled(Flex)`
    width: 50%;
    height: 500px;
`;

export const Container = styled(Flex)`
    position: relative;
    padding: 0 40px;
`;
