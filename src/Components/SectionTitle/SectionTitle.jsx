import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='mx-auto mb-10 md:w-3/12 text-center'>
            <p className='text-yellow-600 mb-2'>-----{subHeading}-----</p>
            <h3 className='text-3xl uppercase border-y-4 py-4 text-black'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;