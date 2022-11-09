import { Breadcrumb, BreadcrumbItem, Grid, List, Stack } from "@chakra-ui/react";
import { FC, Fragment } from "react";
import { Helmet } from "react-helmet-async";
import { NavLink, useParams } from "react-router-dom";

import CategoryFilter from "../../components/CategoryFilter";

type ICategoryParams = {
    id: string;
};

const CategoryPage: FC = () => {
    const { id } = useParams<keyof ICategoryParams>() as ICategoryParams;

    return (
        <Fragment>
            <Helmet></Helmet>
            <Stack>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <NavLink to={"/"}>
                            <b>Главная</b>
                        </NavLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <NavLink to={"/categories"}>
                            <b>Каталог</b>
                        </NavLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem></BreadcrumbItem>
                </Breadcrumb>
                <Grid>
                    <CategoryFilter />
                    <List />
                </Grid>
            </Stack>
        </Fragment>
    );
};

export default CategoryPage;
