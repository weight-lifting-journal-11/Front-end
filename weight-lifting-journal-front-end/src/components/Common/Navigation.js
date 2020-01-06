import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {

    return (
        // Link to dashboard
        <div>
            <ul>
                <Link to='/login'>
                    <li>Login</li>
                </Link>
                <Link to='/register'>
                    <li>Register</li>
                </Link>
            </ul>
        </div>
    )
}

export default Navigation;