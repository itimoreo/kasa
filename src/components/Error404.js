import React from 'react';
import '../css/Error404.css';

const Error404 = () => {
    return (
        <div>
            <h1 className='error-Title'>404</h1>
            <p className='error-Txt'>Oups! La page que vous demandez n'existe pas.</p>
        </div>
    );
};

export default Error404;