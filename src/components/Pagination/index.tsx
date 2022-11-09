import { ArrowLeftIcon, ChevronLeftIcon, ChevronRightIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { FC, MouseEvent, useState } from "react";

interface IPaginationProps {
    limit: number;
    itemsCount: number;
}

const normalStyle: string = "";
const activeStyle: string = "";

const Pagination: FC<IPaginationProps> = ({ limit, itemsCount }) => {
    const [pageCount, setPageCount] = useState<number>(Math.ceil(itemsCount / limit));
    const [currentPage, setCurrentPage] = useState<number>(1);
    const handleChangeCurrentPage = (e: MouseEvent<HTMLButtonElement>, page: number) => {
        setCurrentPage(page);
    };
    let arr: number[] = [];
    for (let i = 1; i <= pageCount; i++) {
        arr.push(i);
    }
    return (
        <div className="flex items-center">
            <div>
                <Button className={normalStyle} onClick={(e) => handleChangeCurrentPage(e, 1)}>
                    <ArrowLeftIcon />
                </Button>
            </div>
            <div>
                <Button
                    className={normalStyle}
                    onClick={(e) => handleChangeCurrentPage(e, currentPage === 1 ? 1 : pageCount - 1)}
                >
                    <ChevronLeftIcon />
                </Button>
            </div>
            <ul>
                {arr.map((item, index) => (
                    <li key={index}>
                        <Button
                            className={currentPage === item ? activeStyle : normalStyle}
                            onClick={(e) => handleChangeCurrentPage(e, item)}
                        >
                            {item}
                        </Button>
                    </li>
                ))}
            </ul>
            <div>
                <Button
                    className={normalStyle}
                    onClick={(e) => handleChangeCurrentPage(e, currentPage === pageCount ? pageCount : pageCount + 1)}
                >
                    <ChevronRightIcon />
                </Button>
            </div>
            <div>
                <Button className={normalStyle} onClick={(e) => handleChangeCurrentPage(e, pageCount)}>
                    <ArrowRightIcon />
                </Button>
            </div>
        </div>
    );
};

export default Pagination;
