import React from 'react';

const Icon = ({icon}) => {
    return (
        <div>
            <img className='max-w-12' src={icon} alt="" />
        </div>
    );
};

export default Icon;