import { Link } from "react-router-dom";
import { FC } from "react";

import ROUTES from "../../../providers/navigation/routes";
import Text from "../../Text/Text.component";
import { StyledMenuItem } from "./styles";

export interface MenuItemProps {
    to: ROUTES;
    intlKey: string;
    isActive: boolean;
}

const MenuItem: FC<MenuItemProps> = ({ to, intlKey, isActive }) => {
    return (
        <StyledMenuItem isActive={isActive}>
            <Link to={to}>
                <Text as="span" intlKey={intlKey} />
            </Link>
        </StyledMenuItem>
    );
};

export default MenuItem;
