import React from 'react';

const validation = props => {

    return (
        <div>
            {
                props.length > 5 ?
                <p>The text is too long</p> :
                <p>The text is too short</p>
            }
        </div>
    )
    
}

export default validation;