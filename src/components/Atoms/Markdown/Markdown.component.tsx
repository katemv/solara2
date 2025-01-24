import { FC } from "react";

import { ColorsKeys } from "../../../providers/theme/types/types";

import { StyledMarkdown } from "./styles";

interface MarkdownProps {
    children: string | null | undefined;
    color?: ColorsKeys;
}

const Markdown: FC<MarkdownProps> = ({ children, color = "dark60" }) => (
    <StyledMarkdown color={color}>{children}</StyledMarkdown>
);

export default Markdown;
