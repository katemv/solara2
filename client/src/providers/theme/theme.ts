import { DefaultTheme } from "styled-components";
import { typography } from "./defaults/typography";
import { spacings } from "./defaults/spacings";
import { shadows } from "./defaults/shadows";
import { colors } from "./defaults/colors";

const customTheme: DefaultTheme = {
    colors,
    spacings,
    shadows,
    typography,
};

export default customTheme;
