import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between'>
            <div>
                <h1 className='h1 font-bold'><span className='text-yellow-400'>Job</span><span className='text-green-400'>Finder</span></h1>
            </div>
            <div className='flex list-none justify-between gap-4'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to="/statistics">Statistics</Link>
                </li>
                <li>
                    <Link to="/applied">Applied</Link>
                </li>
                <li>
                    <Link to="blogs">Blogs</Link>
                </li>
            </div>
            <div>
                <button className='btn'>Apply Now</button>
            </div>
        </div>
    );
};

export default Header;