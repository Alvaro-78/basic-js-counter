import React from 'react';
import PropTypes from 'prop-types';


const FirstApp = ({ greeting, subtitle }) => {


    return (
        <>
            <h1> { greeting } </h1>
            {/* <pre>{ JSON.stringify( greeting, null, 3) }</pre> */}
            <h3> { subtitle } </h3>
        </>
    )
}

FirstApp.propTypes = {
    greeting: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    subtitle: "Soy un Subtítulo"
}

export default FirstApp;
