import { Link } from "react-router-dom";
import { FC } from "react";

import ROUTES from "../../../providers/navigation/routes";
import Text from "../../Text/Text.component";
import { StyledMenuItem } from "./styles";

interface MenuItemProps {
    to: ROUTES;
    intlKey: string;
}

const MenuItem: FC<MenuItemProps> = ({ to, intlKey }) => {
    return (
        <StyledMenuItem>
            <Link to={to}>
                <Text as="span" intlKey={intlKey} />
            </Link>
        </StyledMenuItem>
    );
};

export default MenuItem;
