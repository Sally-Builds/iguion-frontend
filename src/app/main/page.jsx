'use client'
import React from 'react';
import styles from './styles.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Page(props) {
    const  pathname = usePathname()
    return (
        <>
            <nav className={styles.main_nav}>
                <div className={styles.logo}>iGuion</div>
                <ul className={styles.links_section}>
                    <li>
                        <Link className={pathname === '/main' ? styles.link_item_active : styles.link_item}
                              href='/'>Home</Link>
                    </li>
                    <li>
                        <Link className={pathname === '/main/create-quote' ? styles.link_item_active : styles.link_item}
                              href='/main/create-quote'>View Quotes</Link>
                    </li>
                    <li>Create Quotes</li>
                    <li>Contact Us</li>
                </ul>
            </nav>
            <div className={styles.page_layout}>
                <div className={styles.hero_section}>
                    <div className={styles.hero_image}>
                        <img src={'https://wallpapercave.com/wp/wp1814934.jpg'} alt={'guardian of the galaxy'}/>
                    </div>
                    <div className={styles.hero_description}>
                        <h3>Guardians of the Galaxy</h3>
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
