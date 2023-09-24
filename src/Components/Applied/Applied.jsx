import React from 'react';
import Header from '../Header/Header';
import PageBanner from '../PageBanner/PageBanner';
import Footer from '../Footer/Footer';

const Applied = () => {
    const pageName = 'Applied Jobs'
    return (
        <div>
            <PageBanner
            pageName={pageName}
            ></PageBanner>
            <Footer></Footer>
        </div>
    );
};

export default Applied;