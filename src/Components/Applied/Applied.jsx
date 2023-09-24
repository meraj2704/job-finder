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
             <section>
                <h2>Applied Jobs : </h2>
                <details className='dropdown mb-32'>
                    <summary className='m-1 btn'>Filter By</summary>
                    <ul className='p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52'>
                        <li><a href="/">All</a></li>
                        <li><a href="/">Remote</a></li>
                        <li><a href="/">Onsite</a></li>
                    </ul>
                </details>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Applied;