import { Breadcrumb, BreadcrumbItem, Grid, GridItem, Skeleton, SkeletonText } from "@chakra-ui/react";
import { FC } from "react";

const ServicePreloader: FC = () => {
    return (
        <>
            <Breadcrumb>
                <BreadcrumbItem>
                    <Skeleton>главная</Skeleton>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <Skeleton>услуги</Skeleton>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <Skeleton>услуга 1</Skeleton>
                </BreadcrumbItem>
            </Breadcrumb>
            <Grid templateAreas={"repeat(2, 1fr)"} gap={5}>
                <GridItem>
                    <Skeleton>
                        <div className="h-44"></div>
                    </Skeleton>
                </GridItem>
                <GridItem>
                    <Skeleton>Название услуги</Skeleton>
                    <SkeletonText mt="4" spacing={"4"} noOfLines={3} />
                </GridItem>
            </Grid>
        </>
    );
};

export default ServicePreloader;
