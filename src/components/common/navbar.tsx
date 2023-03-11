import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBookOpen, faBlog, faPen, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';

export default class Navbar extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render () {
    return (
        <div className = "Home-navbar bg-black h-12 w-4/12 rounded-full border-white border">
            <ul className = "justify-around flex w-full h-full">
                <li className=" py-1 self-center    ">
                    <Link className="nav-item hover:border hover:rounded hover:border-red-400 text-white py-1 pl-3 pr-3 ml-2 hover:text-black hover:bg-gray-400 active:text-blue-400 hover:py-1"  to = "/"
                        ><FontAwesomeIcon className="nav-fav pr-2" icon={faHome} 
                            /> Home
                    </Link> 
                </li>
                <li className=" py-1 self-center    ">
                    <Link className="nav-item hover:border hover:rounded hover:border-red-400 text-white py-1 px-3.5 hover:text-black hover:bg-gray-400 active:text-blue-400 hover:py-1"  to = "/docs"
                        ><FontAwesomeIcon className="nav-fav pr-2 " icon={faBookOpen} 
                            /> Docs
                    </Link> 
                    </li>
                <li className=" py-1 self-center    ">
                    <Link className="nav-item hover:border hover:rounded hover:border-red-400 text-white py-1 px-3.5 hover:text-black hover:bg-gray-400 active:text-blue-400 hover:py-1"  to = "/blog"
                        ><FontAwesomeIcon className="nav-fav pr-3 " icon={faBlog} 
                            /> Blog
                    </Link> 
                    </li>
                <li className=" py-1 self-center    ">
                    <Link className="nav-item hover:border hover:rounded hover:border-red-400 text-white py-1 px-2.5 hover:text-black hover:bg-gray-400 active:text-blue-400 hover:py-1"  to = "/writing"
                        ><FontAwesomeIcon className="nav-fav pr-1" icon={faPen} 
                            /> Writing
                    </Link>
                    </li>

                <li className=" py-1 self-center    ">
                    <Link className="nav-item hover:border hover:rounded hover:border-red-400 text-white py-1 px-3.5 mr-2 hover:text-black hover:bg-gray-400 active:text-blue-400 hover:py-1"  to = "/about"
                        ><FontAwesomeIcon className="nav-fav pr-2" icon={faUserAstronaut} 
                            /> Study
                    </Link> 
                    </li>
            </ul>
        </div>
    )
    }
};