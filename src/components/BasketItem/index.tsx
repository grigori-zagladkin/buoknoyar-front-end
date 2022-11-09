import { Button } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { FC, MouseEvent } from "react";
import { useSelector } from "react-redux";

import { useAppDispatch } from "../../hooks/redux";
import { IItem } from "../../Models/IItems";
import { removeItemFromBasket, selectItemsInBasket } from "../../store/slices/BasketSlice";

interface IBasketItemProps {
    item: IItem;
}

const BasketItem: FC<IBasketItemProps> = ({ item }) => {
    const dispatch = useAppDispatch();
    const handleRemoveItem = (e: MouseEvent<HTMLButtonElement>) => {
        dispatch(removeItemFromBasket(item.id));
    };
    return (
        <div>
            <h3>{item.title}</h3>
            <Button onClick={handleRemoveItem}>
                <DeleteIcon />
            </Button>
        </div>
    );
};

export default BasketItem;
