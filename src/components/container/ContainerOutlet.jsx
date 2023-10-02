import React from 'react';

const ContainerOutlet = ({children}) => {
    return (
        <div className='max-w-[1100px] mx-auto px-2 md:px-10 py-4 h-screen'>
            {children}
        </div>
    );
};

export default ContainerOutlet;