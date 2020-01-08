import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div className="home">
            <h3>Welcome to Making Gainz!</h3>
            <Link to='/login'>
                <h4>Login</h4>
            </Link>
            <Link to='/register'>
                <h4>Register</h4>
            </Link>
        </div>
    )
}
export default Home;