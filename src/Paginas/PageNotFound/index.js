// Paginas/NotFound/index.js
import React from 'react';
import styles from './notfound.module.css';

function NotFound(props) {
    return (
        <div className={styles.container}>
            <h1>404 pagina no encontrada</h1>
        </div>
    );
}

export default NotFound;