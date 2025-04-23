import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "../active-link/ActiveLink";


const navItems = [
    { path: '/about', text: 'About' },
    { path: '/pricing', text: 'Pricing' },
    { path: '/contact', text: 'Contact' },
]


export const Navbar = () => {

    return (
        <nav className="flex justify-between items-center bg-blue-800 opacity-30 p-4 m-2 rounded-xl">

            <Link href={'/'} className="flex items-center">
                <HomeIcon className="mr-2" />
                <span className="text-white">Home</span>
            </Link>

            <div className="flex space-x-4">
                {
                    navItems.map(navItem => (
                        <ActiveLink key={navItem.path} path={navItem.path} text={navItem.text}></ActiveLink>
                    ))
                }


            </div>

        </nav>
    );
}
