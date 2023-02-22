import Link from "next/link";
import React from "react";
import styles from './Header.module.scss';

export const Header:React.FC = () => {
    return(
        <div className={styles.Header}>
            <div className = {styles.Header_title}>
                <Link style={{ textDecoration: 'none', color: 'white' }} href="/">
                    UNE's<br/>
                    Portfolio
                </Link>  
            </div>
            <div className={styles.Contents}>
                <div className= {styles.Header_News}>
                    <Link style={{ textDecoration: 'none', color: 'white' }} href="/News">News</Link>
                </div>
                <div className= {styles.Header_About}>
                    <Link style={{ textDecoration: 'none', color: 'white' }} href="/About">About</Link>
                </div>
                <div className= {styles.Header_Works}>
                    <Link style={{ textDecoration: 'none', color: 'white' }} href="/Works">Works</Link>
            </div>
            </div>
        </div>
    )
}