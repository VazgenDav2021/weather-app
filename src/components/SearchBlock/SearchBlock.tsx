import React, { useRef } from 'react';
import { useAppDispatch } from '../../store/store';
import './SearchBlock.scss'
import { changeCityName } from '../../store/features/weatherReducer';
import TemperatureSwitcher from '../SwithcerOfMeasure/SwithcerOfMeasure';
import { useNavigate } from 'react-router-dom';

function SearchBlock() {
    const dispatch = useAppDispatch();
    const inputRef = useRef<HTMLInputElement>(null); // Specify the type of ref
    const navigate = useNavigate()

    const handleSearchName = () => {
        if (inputRef.current) {
            const inputValue = inputRef.current?.value ?? '';
            navigate(inputValue);
            dispatch(changeCityName({ name: inputValue }))
            inputRef.current.value = ''
        }
    }

    return (
        <div className='search_block'>
            <input ref={inputRef} />
            <button onClick={handleSearchName}>Search City</button>
            <TemperatureSwitcher />
        </div>
    );
}

export default SearchBlock;
