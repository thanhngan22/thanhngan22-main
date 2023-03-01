import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar () {
    return (
        <div className = "navbar bg-gray-200 h-12 w-3/12 rounded-full m-2">
            <ul className = "justify-around flex w-full h-full">
                <li className="hover:bg-green-200 py-3 px-4 border-b-2 border  hover:border-pink-300 "><Link to = "/">Home</Link> </li>
                <li className="hover:bg-green-200 py-3 px-4 border-b-2  hover:border-pink-300 "><Link to = "/blog">Blog</Link> </li>
                <li className="hover:bg-green-200 py-3 px-4 border-b-2  hover:border-pink-300 "><Link to = "/docs">Docs</Link> </li>
                <li className="hover:bg-green-200 py-3 px-4 border-b-2  hover:border-pink-300"><Link to = "/about">About</Link> </li>
            </ul>
        </div>
    )
};