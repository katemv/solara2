import { Outlet, useNavigate } from "react-router-dom";

import ROUTES from "../../providers/navigation/routes";
import MenuItem from "./MenuItem/MenuItem.component";
import Button from "../Button/Button.component";
import { useAuth } from "../../hooks/useAuth";
import Logo from "../Logo/Logo.component";
import { Header, HeaderContainer, Menu, Nav } from "./styles";

const Layout = () => {
    const { isAuthorized } = useAuth();
    const navigate = useNavigate();

    return (
        <>
            <Header>
                <HeaderContainer
                    fullWidth
                    fullHeight
                    justify="space-between"
                    align="center"
                >
                    <Logo />
                    <Nav>
                        {isAuthorized ? (
                            <>
                                <Menu>
                                    <>
                                        <MenuItem
                                            to={ROUTES.SHOP}
                                            intlKey="components.nav.shop"
                                        />
                                        <MenuItem
                                            to={ROUTES.SHOP}
                                            intlKey="components.nav.cart"
                                        />
                                        <MenuItem
                                            to={ROUTES.SHOP}
                                            intlKey="components.nav.orders"
                                        />
                                        <MenuItem
                                            to={ROUTES.SHOP}
                                            intlKey="components.nav.profile"
                                        />
                                    </>
                                </Menu>
                                <Button
                                    label="components.nav.dashboard"
                                    // onClick={() => {}}
                                    type="ghost"
                                />
                            </>
                        ) : (
                            <Button
                                label="components.nav.login"
                                onClick={() => navigate(ROUTES.LOGIN)}
                                type="ghost"
                            />
                        )}
                    </Nav>
                </HeaderContainer>
            </Header>
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default Layout;
