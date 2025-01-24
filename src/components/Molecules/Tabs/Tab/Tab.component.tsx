import { FC } from "react";
import Text from "../../../Atoms/Text/Text.component";
import { StyledTab } from "./styles";

export interface TabProps {
    isActive: boolean;
    label: string;
    onClick: (value: string) => void;
}

const Tab: FC<TabProps> = ({ isActive, onClick, label }) => {
    return (
        <StyledTab align="center" $isActive={isActive} onClick={() => onClick(label)}>
            <Text as="p" intlKey={label} appearance="headline6" />
        </StyledTab>
    );
};

export default Tab;
