import { FC, HTMLAttributes } from "react";

import { SpacingKeys } from "../../../providers/theme/types/types";
import { StyledFlex } from "./styles";

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
    justify?: "start" | "end" | "center" | "space-between" | "space-around";
    align?: "start" | "end" | "center" | "space-between" | "space-around" | "baseline";
    alignSelf?: "start" | "end" | "center";
    direction?: "row" | "column";
    wrap?: boolean;
    gap?: SpacingKeys;
    marginBottom?: SpacingKeys;
    fullWidth?: boolean;
    fullHeight?: boolean;
    testId?: string;
    onClick?: () => void;
}

const Flex: FC<FlexProps> = ({
    justify,
    align,
    alignSelf,
    direction,
    wrap,
    gap,
    marginBottom,
    fullWidth,
    fullHeight,
    children,
    onClick,
    className,
    style,
    testId = "flex"
}) => (
    <StyledFlex
        $justify={justify}
        $align={align}
        $alignSelf={alignSelf}
        direction={direction}
        $wrap={wrap}
        $gap={gap}
        $marginBottom={marginBottom}
        $fullWidth={fullWidth}
        $fullHeight={fullHeight}
        data-testid={testId}
        className={className}
        onClick={onClick}
        style={style}
    >
        {children}
    </StyledFlex>
);

export default Flex;
