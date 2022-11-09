import { Breadcrumb, BreadcrumbItem, Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { ChangeEvent, FC, Fragment, MouseEvent, useCallback, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";

import { selectSearchTitle, setTitle } from "../../store/slices/ItemsSlice";
import { useAppDispatch } from "../../hooks/redux";
import SearchInput from "../../components/SearchInput";
import List from "../../components/List";

const SearchPage: FC = () => {
    const title = useSelector(selectSearchTitle);
    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta
                    name="keywords"
                    content="бу окна Ярославль, купить бу пвх дверь в Ярославле, купить новое пвх окно в Ярославле, Ярославль бу окна, Ярославль бу двери, бу двери"
                />
                <meta name="description" content="Купить бу пвх окно или дверь в Ярославле" />
            </Helmet>
            <Breadcrumb>
                <BreadcrumbItem>
                    <NavLink to="/">
                        <b className="hover:bg-slate-300 rounded-lg px-3 py-1.5">Главная</b>
                    </NavLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <span>Поиск</span>
                </BreadcrumbItem>
            </Breadcrumb>
            <h2>Результаты запроса по {title}</h2>
            <SearchInput />
            <List />
        </>
    );
};

export default SearchPage;
