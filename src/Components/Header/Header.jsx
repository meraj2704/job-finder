import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between items-center bg px-4 py-5'>
            <div>
                <h1 className='h1 font-bold'><span className='text-yellow-400'>Job</span><span className='text-green-400'>Finder</span></h1>
            </div>
            <div className='flex list-none justify-between gap-4 font-bold'>
                <li className='hover:scale-110'>
                    <Link to='/' >Home</Link>
                </li>
                <li className='hover:scale-110'>
                    <Link to="/statistics">Statistics</Link>
                </li>
                <li className='hover:scale-110'>
                    <Link to="/applied">Applied</Link>
                </li>
                <li className='hover:scale-110'>
                    <Link to="blogs">Blogs</Link>
                </li>
            </div>
            <div>
                <a href="#job12"><button  className='btnn'>Apply Now</button></a>
            </div>
        </div>
    );
};

export default Header;