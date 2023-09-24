import React from 'react';

const PageBanner = ({pageName}) => {
    return (
        <div className='h-[290px] bg'>
            <h1 className='h1 font-bold text-center m
            pt-[150px]'>{pageName}</h1>
        </div>
    );
};

export default PageBanner;