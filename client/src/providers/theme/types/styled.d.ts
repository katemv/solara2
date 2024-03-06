import "styled-components";
import {
    ColorsKeys,
    ShadowKeys,
    SpacingKeys,
    TypographyKeys,
    TypographyValues,
} from "./types";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: Record<ColorsKeys, string>;
        spacings: Record<SpacingKeys, string>;
        shadows: Record<ShadowKeys, string>;
        typography: Record<TypographyKeys, TypographyValues>;
    }
}
