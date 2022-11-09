import { WarningIcon } from "@chakra-ui/icons";
import { FC, Fragment } from "react";

const NotFoundPage: FC = () => {
    return (
        <Fragment>
            <title>buoknoyar</title>
            <meta
                name="keywords"
                content="бу окна Ярославль, купить бу пвх дверь в Ярославле, купить новое пвх окно в Ярославле, Ярославль бу окна, Ярославль бу двери, бу двери"
            />
            <meta name="description" content="Купить бу пвх окно или дверь в Ярославле" />
            <div className="w-full h-full flex items-center justify-center">
                <div>
                    <h1 className="text-center text-5xl font-bold flex items-center gap-2">
                        <WarningIcon className="text-4xl" /> 404 not found
                    </h1>
                    <h2 className="text-xl">Упс.. По данному адресу ничего не найдено</h2>
                </div>
            </div>
        </Fragment>
    );
};

export default NotFoundPage;
