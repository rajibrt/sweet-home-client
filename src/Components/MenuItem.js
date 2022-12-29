import React from 'react';
import { Link } from 'react-router-dom';


const MenuItem = () => {
    return (
        <div>
            <ul className="menu menu-horizontal px-1">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/'>Blog</Link></li>
                <li><Link to='/'>Login</Link></li>
            </ul>
        </div>
    );
};

export default MenuItem;