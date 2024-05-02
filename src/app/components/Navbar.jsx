import React from 'react';
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link href='/'> <h4 className="text-2xl logo">iGuion</h4> </Link>
            <Link href='/create-quote' className="cta"> Create Quote </Link>
        </nav>
    );
};

export default Navbar;
