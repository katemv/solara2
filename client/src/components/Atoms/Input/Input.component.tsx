import { FieldValues, useController, UseControllerProps } from "react-hook-form";
import { useIntl } from "react-intl";

import { StyledInput } from "./styles";

export interface InputProps {
    fullWidth?: boolean;
    placeholderIntlKey?: string;
    type?: string;
}

function Input <T extends FieldValues>({
    fullWidth,
    placeholderIntlKey,
    control,
    type,
    name
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
        <StyledInput
            type={type}
            fullWidth={fullWidth}
            placeholder={placeholderIntlKey && formatMessage({ id: placeholderIntlKey })}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            name={name}
            ref={ref}
        />
    );
}

export default Input;
