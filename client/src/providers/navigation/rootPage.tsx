import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";

import LoginPage from "../../pages/login/login.page";
import ShopPage from "../../pages/shop/shop.page";
import ROUTES from "./routes";

const RootPage = () => (
    <Routes>
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route path={ROUTES.SHOP} element={<ShopPage />} />
        <Route path="*" element={<Navigate to={ROUTES.SHOP} replace />} />
    </Routes>
);

export default RootPage;
