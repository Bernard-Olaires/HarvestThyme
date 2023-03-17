import React from 'react';
import { useNavigate } from 'react-router-dom';

const Unauthorized = () => {
    const navigate = useNavigate()

    const goBack = () => navigate(-1)
    return (
        <div className='container'>
            <h2>You are not authorized for this page</h2>
            <button onClick={goBack}>Go Back</button>
        </div>
    );
}

export default Unauthorized;
