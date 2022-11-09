import { List, ListItem, Stack } from "@chakra-ui/react";
import { FC, Fragment, useEffect } from "react";
import CategoryCarousel from "../../components/CategoryCarousel";
import ErrorBlock from "../../components/ErrorBlock";
import MainCategory from "../../components/MainCategory";
import Preloader from "../../components/Preloader";
import { useAppDispatch } from "../../hooks/redux";
import { useGetAllCategoriesQuery } from "../../store/services/CategoriesAPI";
import { setCategories } from "../../store/slices/CategorySlice";

interface MainListProps {
    category: string;
    categoryId: number;
}

const MainList: FC<MainListProps> = ({ category, categoryId }) => {
    return (
        <ListItem>
            <h2>{category}</h2>
        </ListItem>
    );
};

const MainLists: FC = () => {
    const dispatch = useAppDispatch();
    const { data: _categories, error, isLoading } = useGetAllCategoriesQuery();
    useEffect(() => {
        dispatch(setCategories(_categories));
    }, [_categories]);
    if (error) {
        return <ErrorBlock />;
    } else if (isLoading) {
        return <Preloader />;
    }
    return (
        <List>
            <ListItem>
                <Stack>
                    <h2>Последние товары</h2>
                    <List />
                </Stack>
            </ListItem>
            <ListItem>
                <Stack>
                    <h2></h2>
                </Stack>
            </ListItem>
        </List>
    );
};

const MainPage: FC = () => {
    return (
        <Fragment>
            <title>Главная</title>
            <meta
                name="keywords"
                content="бу окна Ярославль, купить бу пвх дверь в Ярославле, купить новое пвх окно в Ярославле, Ярославль бу окна, Ярославль бу двери, бу двери"
            />
            <meta name="description" content="Купить бу пвх окно или дверь в Ярославле" />
            <Stack gap={2}>
                <Stack>
                    <MainCategory />
                    <CategoryCarousel />
                </Stack>
                <MainLists />
            </Stack>
        </Fragment>
    );
};

export default MainPage;
