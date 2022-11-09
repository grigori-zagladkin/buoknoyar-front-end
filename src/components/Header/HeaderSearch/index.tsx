import { Button, FormLabel, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { ChangeEvent, FC, Fragment, MouseEvent, useCallback, useState } from "react";
import { useAppDispatch } from "../../../hooks/redux";
import { selectSearchTitle, setTitle } from "../../../store/slices/ItemsSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HeaderSearch: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [_title, set_Title] = useState<string>();
    const handleChangeSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        set_Title(e.target.value);
    }, []);
    const handleClickSearch = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(setTitle(_title));
        navigate("/search");
    };
    return (
        <Fragment>
            <InputGroup>
                <Input onChange={handleChangeSearch} value={_title} placeholder="Название товара" />
                <InputRightElement>
                    <Button onClick={handleClickSearch}>
                        <SearchIcon />
                    </Button>
                </InputRightElement>
            </InputGroup>
        </Fragment>
    );
};

export default HeaderSearch;
