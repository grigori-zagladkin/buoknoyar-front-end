import {
    Breadcrumb,
    BreadcrumbItem,
    Grid,
    GridItem,
    Stack,
    Table,
    TableCaption,
    TableContainer,
    Tbody,
    Text,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react";
import { FC, Fragment } from "react";
import { NavLink, useParams } from "react-router-dom";

import ErrorBlock from "../../components/ErrorBlock";
import CustomImage from "../../components/UI/CustomImage";
import { useGetItemByIdQuery } from "../../store/services/ItemsAPI";
import ItemPagePreloader from "./ItemPagePreloader";

type IItemParams = {
    id: string;
};

const ItemPage: FC = () => {
    const { id } = useParams<keyof IItemParams>() as IItemParams;
    const { data: item, error, isLoading } = useGetItemByIdQuery(+id);
    if (error) return <ErrorBlock />;
    else if (isLoading) return <ItemPagePreloader />;
    return (
        <Fragment>
            <title>{item?.title}</title>
            <meta
                name="keywords"
                content="бу окна Ярославль, купить бу пвх дверь в Ярославле, купить новое пвх окно в Ярославле, Ярославль бу окна, Ярославль бу двери, бу двери"
            />
            <meta name="description" content="Купить бу пвх окно или дверь в Ярославле" />
            <Stack>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <NavLink to="/">
                            <b className="hover:bg-slate-300 rounded-lg px-3 py-1.5">Главная</b>
                        </NavLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <NavLink to={`/category/${item?.categoryId}`}>
                            <b className="hover:bg-slate-300 rounded-lg px-3 py-1.5">{item?.category}</b>
                        </NavLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <span>{item?.title}</span>
                    </BreadcrumbItem>
                </Breadcrumb>
                <Grid>
                    <GridItem>
                        <CustomImage alt={item!.title} src={item!.image} height="height-44" />
                    </GridItem>
                    <GridItem>
                        <Stack>
                            <h3>{item!.title}</h3>
                            <h4>{item!.price}</h4>
                            <h4>{item!.count}</h4>
                            {item?.description && <Text>{item.description}</Text>}
                        </Stack>
                    </GridItem>
                    <GridItem>
                        <TableContainer>
                            <Table variant={"striped"}>
                                <TableCaption>Характеристики товара</TableCaption>
                                <Thead>
                                    <Tr>
                                        <Th>Атрибут</Th>
                                        <Th>Значение</Th>
                                    </Tr>
                                </Thead>
                                <Tbody></Tbody>
                            </Table>
                        </TableContainer>
                    </GridItem>
                </Grid>
            </Stack>
        </Fragment>
    );
};

export default ItemPage;
