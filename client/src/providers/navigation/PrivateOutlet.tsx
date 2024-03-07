import React, { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
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
