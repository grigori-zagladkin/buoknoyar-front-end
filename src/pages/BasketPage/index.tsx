import { Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";
import { FC, Fragment } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import BasketItem from "../../components/BasketItem";
import { selectItemsInBasket } from "../../store/slices/BasketSlice";

const BasketPage: FC = () => {
    const basketItems = useSelector(selectItemsInBasket);
    return (
        <Fragment>
            <title>Избранное</title>
            <meta
                name="keywords"
                content="бу окна Ярославль, купить бу пвх дверь в Ярославле, купить новое пвх окно в Ярославле, Ярославль бу окна, Ярославль бу двери, бу двери"
            />
            <meta name="description" content="Купить бу пвх окно или дверь в Ярославле" />
            <Breadcrumb className="mb-10">
                <BreadcrumbItem>
                    <NavLink to="/">
                        <b className="hover:bg-slate-300 rounded-lg px-3 py-1.5">Главная</b>
                    </NavLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                    <span>Избранное</span>
                </BreadcrumbItem>
            </Breadcrumb>
            <h2 className="text-2xl font-bold mb-10">Избранное</h2>
            {basketItems.length >= 1 ? (
                <ul>
                    {basketItems.map((item, index) => (
                        <li key={index}>
                            <NavLink to={`/item/${item.id}`}>
                                <BasketItem item={item} />
                            </NavLink>
                        </li>
                    ))}
                </ul>
            ) : (
                <h3 className="text-2xl">Тут пока пусто. Добавляйте в этот раздел понравившиеся товары.</h3>
            )}
        </Fragment>
    );
};

export default BasketPage;
