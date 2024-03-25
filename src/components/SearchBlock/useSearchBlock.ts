import React, { useRef } from 'react'
import { useAppDispatch } from '../../store/store';
import { useNavigate } from 'react-router-dom';
import { changeCityName } from '../../store/features/weatherReducer';

const useSearchBlock = () => {
    const dispatch = useAppDispatch();
    const inputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    const handleSearchName = () => {
        if (inputRef.current) {
            const inputValue = inputRef.current?.value ?? '';
            navigate(inputValue);
            dispatch(changeCityName({ name: inputValue }));
            inputRef.current.value = '';
        };
    };

    return { handleSearchName, inputRef };
}

export default useSearchBlock;