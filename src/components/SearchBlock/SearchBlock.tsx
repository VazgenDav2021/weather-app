import React from 'react';
import TemperatureSwitcher from '../SwithcerOfMeasure/SwithcerOfMeasure';
import useSearchBlock from './useSearchBlock';
import './SearchBlock.scss';

function SearchBlock() {
    
    const {inputRef, handleSearchName} = useSearchBlock();

    return (
        <div className='search_block'>
            <input ref={inputRef} />
            <button onClick={handleSearchName}>Search City</button>
            <TemperatureSwitcher />
        </div>
    );
};

export default SearchBlock;
