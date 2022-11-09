import { FC, Fragment } from "react";
import { Route, Routes } from "react-router-dom";

import MainLayout from "./Layouts/MainLayout";
import BasketPage from "./pages/BasketPage";
import CategoryPage from "./pages/CategoryPage";
import ContactPage from "./pages/ContactPage";
import DeliveryPaymentPage from "./pages/DeliveryPaymentPage";
import ItemPage from "./pages/ItemPage";
import MainPage from "./pages/MainPage";
import NotFoundPage from "./pages/NotFoundPage";
import SearchPage from "./pages/SearchPage";
import ServicePage from "./pages/ServicePage";

const App: FC = () => {
    return (
        <Fragment>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<MainPage />} />
                    <Route path="contact" element={<ContactPage />} />
                    <Route path="basket" element={<BasketPage />} />
                    <Route path="search" element={<SearchPage />} />
                    <Route path="deliverypayment" element={<DeliveryPaymentPage />} />
                    <Route path="service/:id" element={<ServicePage />} />
                    <Route path="item/:id" element={<ItemPage />} />
                    <Route path="category/:id" element={<CategoryPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </Fragment>
    );
};

export default App;
