import { Navigate, Outlet } from "react-router-dom";
import { FC } from "react";

import { useAuth } from "../auth/authProvider";
import ROUTES from "./routes";

/**
 * Usage:
 *  <Route element={<PrivateOutlet />}>
 *      <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
 *  </Route>
 **/

const PrivateOutlet: FC = () => {
    const { isAuthorized } = useAuth();

    return isAuthorized ? <Outlet /> : <Navigate to={ROUTES.LOGIN} />;
};

export default PrivateOutlet;
