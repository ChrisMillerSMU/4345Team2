import React from 'react';
import styles from '../styles/Home.module.css'
import accountLogo from '../images/account_icon.png'

export default function homePage() {
    return (
    
    <div className={styles.homeHeader}>
        <h1>SMU TA Portal</h1>

        <body>
        <img src='images/account_icon.png'
        alt="Account Icon" width="400" height="400" />  
        </body>  
    </div>

    );
  }
  