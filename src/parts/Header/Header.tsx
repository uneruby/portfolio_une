import Link from "next/link";
import React from "react";
import styles from './Header.module.scss';

export const Header:React.FC = () => {
    return(
        <div className={styles.Header}>
            <div className = {styles.Header_title}>
                <Link href="/">
                    UNE's<br/>
                    Portfolio
                </Link>  
            </div>
            <div className= {styles.Header_News}>
                <Link href="/News">News</Link>
            </div>
            <div className= {styles.Header_About}>
            <Link href="/About">About</Link>
            </div>
            <div className= {styles.Header_Works}>
            <Link href="/Works">Works</Link>
            </div>
        </div>
    )
}