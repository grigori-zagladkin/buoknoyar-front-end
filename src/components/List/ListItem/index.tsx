import { FC, MouseEvent } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { useSelector } from "react-redux";

import { IItem } from "../../../Models/IItems";
import { useAppDispatch } from "../../../hooks/redux";
import { addItemToBasket, removeItemFromBasket, selectItemsInBasket } from "../../../store/slices/BasketSlice";
import { LOCAL_STORAGE_TITLE } from "../../../utils";
import CustomImage from "../../UI/CustomImage";

export interface IListItemProps {
    item: IItem;
}

const ListItem: FC<IListItemProps> = ({ item }) => {
    const dispatch = useAppDispatch();
    const items = useSelector(selectItemsInBasket);
    const handleAddBasket = (e: MouseEvent<HTMLButtonElement>) => {
        dispatch(addItemToBasket(item));
        localStorage.setItem(LOCAL_STORAGE_TITLE, JSON.stringify(items));
    };
    const handleRemoveBasket = (e: MouseEvent<HTMLButtonElement>) => {
        dispatch(removeItemFromBasket(item.id));
        localStorage.setItem(LOCAL_STORAGE_TITLE, JSON.stringify(items));
    };
    return (
        <Grid>
            <GridItem>
                <CustomImage alt="Изображение товара" src={item.image} height="height-20" />
            </GridItem>
            <GridItem>
                <h3>{item.title}</h3>
                <h4>{item.price}</h4>
            </GridItem>
        </Grid>
    );
};

export default ListItem;
