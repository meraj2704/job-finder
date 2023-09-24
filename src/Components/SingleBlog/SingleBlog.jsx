import React from 'react';

const SingleBlog = ({ blog }) => {
    const { id, question, answer } = blog;
    return (
        <div className='container mx-auto  p-6 w-full
          mb-6'>
            <h1 className='text-2xl font-extrabold mb-4'>Blog {id}: {question}</h1>
            <p>{answer}</p>
        </div>
    );
};

export default SingleBlog;