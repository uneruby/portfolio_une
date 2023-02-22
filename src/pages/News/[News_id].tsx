import router from "next/router";
import React from "react";
import { Header } from "../../parts/Header/Header";
import { myNews } from "@/parts/mock/mockNews";
import styles from "@/parts/News/News.module.scss"

export default function NewsPage() {
    const NewsId:number = parseInt(router.query.News_id)
    return(
        <div>
            <Header />
            <div className={styles.News}>
                <div className={styles.News_contents1}>
                    <img className={styles.contents_img} src={myNews[NewsId].imageUrl}></img>
                    <div className={styles.text}>
                    <h1 className={styles.contents_title}>{myNews[NewsId].title}</h1>
                    <div className={styles.contents_border}>
                        <p className={styles.contents_discription}>
                        {myNews[NewsId].text}
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}