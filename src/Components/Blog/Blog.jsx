import React from 'react';
import PageBanner from '../PageBanner/PageBanner';
import Footer from '../Footer/Footer';
import { useLoaderData } from 'react-router-dom';
import SingleBlog from '../SingleBlog/SingleBlog';
import { key } from 'localforage';

const Blog = () => {
    const pageName = 'Blogs'
    const blogs = useLoaderData();
    // console.log(blogs);
    return (
        <div>
           <PageBanner
           pageName={pageName}
           ></PageBanner>
           <section className='container mx-auto mt-2 rounded-3xl bg-blue-200 px-32'>
            {
                blogs.map(blog=> <SingleBlog
                key={blog.id}
                blog={blog}
                ></SingleBlog>)
            }
           </section>
           <Footer></Footer>
        </div>
    );
};

export default Blog;