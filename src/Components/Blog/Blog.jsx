import React from 'react';
import PageBanner from '../PageBanner/PageBanner';
import Footer from '../Footer/Footer';

const Blog = () => {
    const pageName = 'Blogs'
    return (
        <div>
           <PageBanner
           pageName={pageName}
           ></PageBanner>
           <Footer></Footer>
        </div>
    );
};

export default Blog;