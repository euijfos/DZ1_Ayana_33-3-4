import React from 'react';

function Photo(props) {
    return (
        <>
            <h2>{props.header}</h2>
            <img src={props.link} alt={props.header}/>
        </>
    );
}

export default Photo;