import React from 'react';
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="flex flex-row p-4">
            <h4 className="text-2xl">iGuion</h4>
            <Link href='/create-quote'> Create Quote </Link>
        </nav>
    );
};

export default Navbar;
