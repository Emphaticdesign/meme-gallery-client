import React from 'react';
import { Link } from 'react-router-dom';
import './Status.css';

const Status = () => {
    return (
        <div className="container">
            <Link to="/"><h1>MEME GALL3RY</h1></Link>
            <h3>See Status</h3>
        </div>
    );
};

export default Status;