import {
    Breadcrumb,
    BreadcrumbItem,
    Heading,
    Table,
    TableCaption,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react";
import { FC } from "react";
import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";

const ContactPage: FC = () => {
    const leftAside: string[] = [
        "Наш адрес",
        "Номер телефона",
        "Время работы",
        "Дни работы",
        "Мы в whatsapp",
        "Оплата",
    ];
    const rightAside: string[] = [
        "Россия, Ярославль, Гагарина, 65",
        "+79959864777",
        "08:00-20:00",
        "Без обеда и выходных",
        "+79959864777",
        "Оплата производится на наличному расчёту на территории склада, либо переводом на карту банка Tinkoff",
    ];
    let tableContactItems = [];
    for (let i = 0; i < rightAside.length; i++) {
        tableContactItems.push(
            <Tr key={i}>
                <Th>{leftAside[i]}</Th>
                <Td>{rightAside[i]}</Td>
            </Tr>
        );
    }
    return (
        <>
            <Helmet>
                <title>Контакты/Как добраться?</title>
                <meta
                    name="keywords"
                    content="бу окна Ярославль, купить бу пвх дверь в Ярославле, купить новое пвх окно в Ярославле, Ярославль бу окна, Ярославль бу двери, бу двери"
                />
                <meta name="description" content="Купить бу пвх окно или дверь в Ярославле" />
            </Helmet>
            <div className="mb-10">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <NavLink to="/">
                            <b className="hover:bg-slate-300 rounded-lg px-3 py-1.5">Главная</b>
                        </NavLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem isCurrentPage>
                        <span>Контакты/Как добраться?</span>
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="mb-5">
                <h2 className="text-2xl font-bold">Мы на карте</h2>
                <div className="mt-5 border border- rounded-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2139.2741166744554!2d39.82244241600211!3d57.57580168107998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9cd7b092b9ff02fe!2zNTfCsDM0JzMyLjkiTiAzOcKwNDknMjguNyJF!5e0!3m2!1sru!2sru!4v1663342049657!5m2!1sru!2sru"
                        width="600"
                        height="450"
                        loading="lazy"
                        className="w-full"
                        title="Склад на карте"
                    />
                </div>
            </div>
            <div className="border rounded-lg text-xl">
                <TableContainer>
                    <Table variant={"simple"}>
                        <TableCaption>Контактные данные</TableCaption>
                        <Tbody>{tableContactItems}</Tbody>
                    </Table>
                </TableContainer>
            </div>
        </>
    );
};

export default ContactPage;
