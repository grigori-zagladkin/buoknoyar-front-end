import { Spinner, Stack, Text } from "@chakra-ui/react";
import { FC, useEffect } from "react";
import { useSelector } from "react-redux";

import { useAppDispatch } from "../../hooks/redux";
import { useGetAllItemsQuery } from "../../store/services/ItemsAPI";
import { selectItems, setItems } from "../../store/slices/ItemsSlice";
import ErrorBlock from "../ErrorBlock";
import Preloader from "../Preloader";
import ListItem from "./ListItem";

const List: FC = () => {
    const dispatch = useAppDispatch();
    const { data: _items, error, isLoading } = useGetAllItemsQuery();
    useEffect(() => {
        dispatch(setItems(_items));
    }, [_items]);
    const items = useSelector(selectItems);
    if (error) {
        return <ErrorBlock />;
    } else if (isLoading) {
        return <Preloader />;
    }
    return (
        <ul className="flex flex-wrap items-center">
            {items.map((item, index) => (
                <li key={index}>
                    <ListItem item={item} />
                </li>
            ))}
        </ul>
    );
};

export default List;
