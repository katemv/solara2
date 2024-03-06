import { useIntl } from "react-intl";
import { FC } from "react";

import { StyledInput } from "./styles";

export interface InputProps {
    fullWidth?: boolean;
    placeholderIntlKey: string;
    value: string;
    type?: string;
    onChange: (value: string) => void;
}

const Input: FC<InputProps> = ({
    fullWidth,
    placeholderIntlKey,
    value,
    onChange,
    type,
}) => {
    const { formatMessage } = useIntl();

    return (
        <StyledInput
            fullWidth={fullWidth}
            placeholder={formatMessage({ id: placeholderIntlKey })}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            type={type}
        />
    );
};

export default Input;
