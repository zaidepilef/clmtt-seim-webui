// Pages/Dashboard/index.js
import React from 'react'
import styles from './dashboard.module.css'

function Dashboard(props) {

    return (
        <div style={{ padding: 10 }}>
            <div className={styles.dashboardPage} >
                <h1>
                    Dashboard
                </h1>

            </div>
            <p>Dentro</p>
        </div>
    )
}

export default Dashboard