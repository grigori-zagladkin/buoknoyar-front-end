import { Skeleton } from "@chakra-ui/react";
import { FC } from "react";

const ItemPagePreloader: FC = () => {
    return (
        <div>
            <Skeleton></Skeleton>
        </div>
    );
};

export default ItemPagePreloader;
