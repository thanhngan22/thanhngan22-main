import React from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {
    render () {
    return (
        <div className = "Home-navbar bg-gray-200 h-12 w-4/12 rounded-full m-2">
            <ul className = "justify-around flex w-full h-full">
                <li className="hover:bg-green-200 py-3  border-b-2  hover:border-pink-300 active:border-pink-200">
                    <Link className="text-blue-500 py-3.5 px-3.5"  to = "/">Home</Link> 
                </li>
                <li className="hover:bg-green-200 py-3  border-b-2  hover:border-pink-300 active:border-pink-200">
                    <Link className="text-blue-500 py-3.5 px-3.5"  to = "/docs">Docs</Link> 
                    </li>
                <li className="hover:bg-green-200 py-3  border-b-2  hover:border-pink-300 active:border-pink-200">
                    <Link className="text-blue-500 py-3.5 px-3.5"  to = "/blog">Blog</Link> 
                    </li>
                <li className="hover:bg-green-200 py-3  border-b-2  hover:border-pink-300 active:border-pink-200">
                    <Link className="text-blue-500 py-3.5 px-3.5"  to = "/writing">Writing</Link>
                    </li>

                <li className="hover:bg-green-200 py-3  border-b-2  hover:border-pink-300 active:border-pink-200">
                    <Link className="text-blue-500 py-3.5 px-3.5"  to = "/about">Study</Link> 
                    </li>
            </ul>
        </div>
    )
    }
};