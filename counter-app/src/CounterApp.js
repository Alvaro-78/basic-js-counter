import React, { useState } from 'react';
import PropTypes from 'prop-types';


const CounterApp = ({ value }) => {

    

    const [number, setNumber] = useState(value);

    const handleIncrement = () => setNumber( number + 1 )
    

    const handleReset = () => setNumber( value  )
    

    const handleDecrement = () => {
        if( number === 0 ) { return '' }
        setNumber( number - 1 )
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { number } </h2>

            <button type="submit" onClick={ handleIncrement }>+ 1</button>
            <button type="submit" onClick={ handleReset }>Reset</button>
            <button type="submit" onClick={ handleDecrement }>- 1</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;
