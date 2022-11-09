import { Breadcrumb, BreadcrumbItem, Heading, ListItem, OrderedList, Text } from "@chakra-ui/react";
import { FC } from "react";
import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";

const DeliveryPaymentPage: FC = () => (
    <>
        <Helmet>
            <title>Доставка</title>
            <meta
                name="keywords"
                content="бу окна Ярославль, купить бу пвх дверь в Ярославле, купить новое пвх окно в Ярославле, Ярославль бу окна, Ярославль бу двери, бу двери"
            />
            <meta name="description" content="Купить бу пвх окно или дверь в Ярославле" />
        </Helmet>
        <div>
            <div className="mb-10">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <NavLink to="/">
                            <b className="hover:bg-slate-300 rounded-lg px-3 py-1.5">Главная</b>
                        </NavLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem isCurrentPage>
                        <span>Доставка/Оплата</span>
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="mb-10">
                <Heading as="h2" className="mb-5">
                    Доставка
                </Heading>
                <Text className="text-xl">
                    Доставка товаров осуществляется в пределах области. Межгород по договорённости.
                </Text>
            </div>
            <div>
                <Heading as="h2" className="mb-5">
                    Оплата
                </Heading>
                <Text className="text-xl mb-3">Оплатить заказ вы можете:</Text>
                <OrderedList className="pl-3 text-xl">
                    <ListItem> по наличному расчёту на территории склада</ListItem>
                    <ListItem> безналичным переводом на карту банку по номеру телефона</ListItem>
                </OrderedList>
            </div>
        </div>
    </>
);

export default DeliveryPaymentPage;
