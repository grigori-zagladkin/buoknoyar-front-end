import { Grid, GridItem } from "@chakra-ui/react";
import { HamburgerIcon, StarIcon } from "@chakra-ui/icons";
import { FC, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import HeaderSearch from "./HeaderSearch";
import { useGetAllServiceQuery } from "../../store/services/ServiceAPI";
import { useAppDispatch } from "../../hooks/redux";
import { setServices } from "../../store/slices/ServiceSlice";
import { selectItemsInBasket } from "../../store/slices/BasketSlice";

const Header: FC = () => {
    const dispatch = useAppDispatch();
    const isMounted = useRef<boolean>(false);
    const items = useSelector(selectItemsInBasket);
    useEffect(() => {
        if (isMounted.current) {
            localStorage.setItem("items", JSON.stringify(items));
        }
        isMounted.current = true;
    }, []);
    const { data: services, error, isLoading } = useGetAllServiceQuery();
    if (services) {
        dispatch(setServices(services));
    }
    return (
        <div>
            <Grid templateColumns={"repeat(3, 1fr)"} gap={4}>
                <GridItem className="">
                    <div className="mb-10 md:my-0 flex items-center gap-5">
                        <NavLink className="block" to="/">
                            <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
                                <span className="text-blue-700">Bu</span>
                                <span className="italic">OKNA</span>
                                <span className="text-blue-700">Yar</span>
                            </h1>
                        </NavLink>
                        <div className="flex items-center gap-1 bg-slate-200 py-2.5 px-4 font-bold cursor-pointer hover:bg-slate-300">
                            <HamburgerIcon /> <div>Каталог</div>
                        </div>
                    </div>
                    <nav className="block mt-2">
                        <ul className="flex gap-4">
                            <li className="cursor-pointer font-medium hover:bg-slate-100 rounded-lg px-2 py-2">
                                <NavLink to="/contact">Контакты/Как добраться?</NavLink>
                            </li>
                            <li className="cursor-pointer font-medium hover:bg-slate-100 rounded-lg px-2 py-2">
                                <NavLink to="/deliverypayment">Доставка/Оплата</NavLink>
                            </li>
                        </ul>
                    </nav>
                </GridItem>
                <GridItem>
                    <HeaderSearch />
                </GridItem>
                <GridItem>
                    <div className="flex gap-3">
                        <NavLink to="/basket">
                            <div className="flex items-center gap-1 bg-slate-200 py-2.5 px-4 font-bold cursor-pointer hover:bg-slate-300">
                                <StarIcon /> <div>Избранное</div>
                            </div>
                        </NavLink>
                        {services && (
                            <div className="flex items-center gap-1 bg-slate-200 py-2.5 px-4 font-bold cursor-pointer hover:bg-slate-300">
                                Услуги
                            </div>
                        )}
                    </div>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                </GridItem>
            </Grid>
        </div>
    );
};

export default Header;
