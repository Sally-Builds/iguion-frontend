'use client'
import React from 'react';
import styles from './styles-home.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Page(props) {
    const  pathname = usePathname()
    return (
        <>
            <div className={styles.page_layout}>
                <div className={styles.hero_section}>
                    <div className={styles.hero_image}>
                        <img src={'https://wallpapercave.com/wp/wp1814934.jpg'} alt={'guardian of the galaxy'}/>
                    </div>
                    <div className={styles.hero_description}>
                        <h3>Quote Your Favourite Character</h3>
                        <p>Still reeling from the loss of Gamora, Peter Quill must rally<br/> his team to defend the
                            universe
                            and
                            protect one of their own</p>
                        <div className={"hero_cta"}>
                            <button><i className="fa-solid fa-play"></i> Watch</button>
                            <button><i className="fa-solid fa-quote-left"></i> Add Quote</button>
                        </div>
                    </div>
                </div>
                <div className={styles.side_nav}>
                    <div className={styles.side_nav_heading}>
                        <h4>Trending Now</h4>
                        <a>See All</a>
                    </div>
                    <div className={styles.cards_section}>
                        <div className={styles.side_nav_card}>
                            <div className={styles.card_title}>Action / Adventure</div>
                        </div>
                        <div className={styles.side_nav_card}>
                            <div className={styles.card_title}>Action / Adventure</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page;
