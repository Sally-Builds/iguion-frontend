'use client'
import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";
import styles from './styles-nav.module.css'

const Navbar = () => {
    const pathname = usePathname()
    return (
        <nav className={styles.main_nav}>
            <div className={styles.logo}>iGuion</div>
            <ul className={styles.links_section}>
                <li>
                    <Link className={pathname === '/' ? styles.link_item_active : styles.link_item}
                          href='/'>Home</Link>
                </li>
                <li>
                    <Link className={pathname === '/create-quote' ? styles.link_item_active : styles.link_item}
                          href='/create-quote'>Add Quotes</Link>
                </li>
                <li>View Quotes</li>
                <li>Contact Us</li>
            </ul>
        </nav>
    );
};

export default Navbar;
