import React from 'react';
import PageBanner from '../PageBanner/PageBanner';
import Footer from '../Footer/Footer';

const Statistics = () => {
    const pageName = 'Chart';
    return (
        <div>
            <PageBanner
            pageName={pageName}
            ></PageBanner>
           
            <Footer></Footer>
        </div>
    );
};

export default Statistics;