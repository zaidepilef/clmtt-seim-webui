// Paginas/NotFound/index.js
import React from 'react';
import styles from './errorpage.module.css';

function ErrorPage(props) {
    return (
        <div className={styles.container}>
            <h1>Solicitud erronea</h1>
        </div>
    );
}

export default ErrorPage;