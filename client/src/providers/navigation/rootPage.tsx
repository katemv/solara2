import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";

import Layout from "../../components/Organisms/Layout/Layout.component";
import AddProductPage from "../../pages/add-product/AddProduct.page";
import DashboardPage from "../../pages/dashboard/Dashboard.page";
import ProfilePage from "../../pages/profile/Profile.page";
import SignupPage from "../../pages/signup/Signup.page";
import VerifyPage from "../../pages/verify/Verify.page";
import OrdersPage from "../../pages/orders/Orders.page";
import LoginPage from "../../pages/login/Login.page";
import ShopPage from "../../pages/shop/Shop.page";
import CartPage from "../../pages/cart/Cart.page";
import PrivateOutlet from "./PrivateOutlet";
import ROUTES from "./routes";

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
                <Route path={ROUTES.ADD_PRODUCT} element={<AddProductPage />} />
            </Route>
        </Route>
        <Route path="*" element={<Navigate to={ROUTES.SHOP} replace />} />
    </Routes>
);

export default RootPage;
