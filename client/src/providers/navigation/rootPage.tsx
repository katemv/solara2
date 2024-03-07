import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";

import Layout from "../../components/Layout/Layout.component";
import SignupPage from "../../pages/signup/signup.page";
import VerifyPage from "../../pages/verify/verify.page";
import LoginPage from "../../pages/login/login.page";
import ShopPage from "../../pages/shop/shop.page";
import ROUTES from "./routes";
import ProfilePage from "../../pages/profile/Profile.page";
import OrdersPage from "../../pages/orders/Orders.page";
import CartPage from "../../pages/cart/Cart.page";
import PrivateOutlet from "./PrivateOutlet";
import DashboardPage from "../../pages/dashboard/Dashboard.page";

const RootPage = () => (
    <Routes>
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
        <Route path={ROUTES.VERIFY} element={<VerifyPage />} />
        <Route path={"/"} element={<Layout />}>
            <Route path={ROUTES.SHOP} element={<ShopPage />} />
            <Route path={ROUTES.ORDERS} element={<OrdersPage />} />
            <Route path={ROUTES.CART} element={<CartPage />} />
            <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
            <Route element={<PrivateOutlet />}>
                <Route path={ROUTES.ADMIN} element={<DashboardPage />} />
            </Route>
        </Route>
        <Route path="*" element={<Navigate to={ROUTES.SHOP} replace />} />
    </Routes>
);

export default RootPage;
