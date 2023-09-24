import React from 'react';
import PageBanner from '../PageBanner/PageBanner';
import Footer from '../Footer/Footer';
import { useLoaderData } from 'react-router-dom';

const Blog = () => {
    const pageName = 'Blogs'
    const blogs = useLoaderData();
    conso
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