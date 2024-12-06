import { FieldValues, useController, UseControllerProps } from "react-hook-form";
import { useIntl } from "react-intl";

import { Container, StyledIcon, StyledInput } from "./styles";
import { IconProps } from "../Icon/Icon.component";

export interface InputProps {
    fullWidth?: boolean;
    placeholderIntlKey?: string;
    type?: string;
    iconType?: IconProps["type"];
}

function Input <T extends FieldValues>({
    fullWidth,
    placeholderIntlKey,
    control,
    type,
    name,
    iconType
}: InputProps & UseControllerProps<T>) {
    const { formatMessage } = useIntl();
    const {
        field: { onChange, onBlur, value, ref },
        fieldState: { invalid, isTouched, isDirty },
        formState: { touchedFields, dirtyFields }
    } = useController({
        name,
        control,
    });

    return (
        <Container fullWidth={fullWidth} align="center">
            {iconType && <StyledIcon type={iconType} />}
            <StyledInput
                type={type}
                iconType={iconType}
                placeholder={placeholderIntlKey && formatMessage({ id: placeholderIntlKey })}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                name={name}
                ref={ref}
            />
        </Container>
    );
}

export default Input;
