import { SearchIcon } from "@chakra-ui/icons";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { ChangeEvent, FC, useCallback, useState, MouseEvent, Fragment } from "react";

import { setTitle } from "../../store/slices/ItemsSlice";
import { useAppDispatch } from "../../hooks/redux";

const SearchInput: FC = () => {
    const dispatch = useAppDispatch();
    const [value, setValue] = useState<string>("");
    const handleChangeValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }, []);
    const handleClickSearch = (e: MouseEvent<HTMLButtonElement>) => {
        dispatch(setTitle(value));
    };
    return (
        <Fragment>
            <InputGroup>
                <InputRightElement>
                    <Button onClick={handleClickSearch}>
                        <SearchIcon />
                    </Button>
                </InputRightElement>
                <Input value={value} placeholder="Название товара" onChange={handleChangeValue} />
            </InputGroup>
        </Fragment>
    );
};

export default SearchInput;
