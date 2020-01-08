import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div className="home">
            <h1>Welcome to Making Gainz!</h1>
            <Link to='/login'>
                <h3>Login</h3>
            </Link>
            <Link to='/register'>
                <h3>Register</h3>
            </Link>
        </div>
    )
}
export default Home;