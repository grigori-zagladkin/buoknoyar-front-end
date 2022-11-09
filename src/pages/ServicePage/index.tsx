import { FC, Fragment } from "react";
import { Helmet } from "react-helmet-async";
import { NavLink, useParams } from "react-router-dom";
import { Box, Breadcrumb, BreadcrumbItem, Grid, GridItem, Image, Skeleton, Spinner, Text } from "@chakra-ui/react";

import { useGetServiceByIdQuery } from "../../store/services/ServiceAPI";
import CustomImage from "../../components/UI/CustomImage";
import ServicePreloader from "./ServicePreloader";
import ErrorBlock from "../../components/ErrorBlock";

type IServiceParams = {
    id: string;
};

const ServicePage: FC = () => {
    const { id } = useParams<keyof IServiceParams>() as IServiceParams;
    const { data: service, error, isLoading } = useGetServiceByIdQuery(+id);
    if (error) return <ErrorBlock />;
    else if (isLoading) return <ServicePreloader />;
    return (
        <>
            <Helmet>
                <title>Услуга</title>
                <meta
                    name="keywords"
                    content="бу окна Ярославль, купить бу пвх дверь в Ярославле, купить новое пвх окно в Ярославле, Ярославль бу окна, Ярославль бу двери, бу двери"
                />
                <meta name="description" content="Купить бу пвх окно или дверь в Ярославле" />
            </Helmet>
            <Fragment>
                <Breadcrumb className="mb-10">
                    <BreadcrumbItem>
                        <NavLink to="/">
                            <b className="hover:bg-slate-300 rounded-lg px-3 py-1.5">Главная</b>
                        </NavLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <span>Услуги</span>
                    </BreadcrumbItem>
                    <BreadcrumbItem isCurrentPage>
                        <span>{service!.title}</span>
                    </BreadcrumbItem>
                </Breadcrumb>
                <Grid templateColumns={"repeat(2, 1fr)"} gap={4}>
                    <GridItem>
                        <CustomImage alt="Изображение услуги" src={service!.image} height={"height-10"} />
                    </GridItem>
                    <GridItem>
                        <h2 className="text-2xl font-bold mb-5">{service!.title}</h2>
                        <Text className="text-xl">{service!.description}</Text>
                    </GridItem>
                </Grid>
            </Fragment>
        </>
    );
};

export default ServicePage;
