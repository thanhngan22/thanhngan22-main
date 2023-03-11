import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBookOpen, faBlog, faPen, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';

export default class Navbar extends React.Component {
    render () {
    return (
        <div className = "Home-navbar bg-black h-12 w-4/12 rounded-full border-white border">
            <ul className = "justify-around flex w-full h-full">
                <li className=" py-3    ">
                    <Link className="nav-item text-white py-3.5 px-3.5 hover:text-black hover:bg-white active:text-blue-400 hover:py-2"  to = "/"
                        ><FontAwesomeIcon className="nav-fav pr-2" icon={faHome} 
                            /> Home
                    </Link> 
                </li>
                <li className=" py-3    ">
                    <Link className="nav-item text-white py-3.5 px-3.5 hover:text-black hover:bg-white active:text-blue-400 hover:py-2"  to = "/docs"
                        ><FontAwesomeIcon className="nav-fav pr-2 " icon={faBookOpen} 
                            /> Docs
                    </Link> 
                    </li>
                <li className=" py-3    ">
                    <Link className="nav-item text-white py-3.5 px-3.5 hover:text-black hover:bg-white active:text-blue-400 hover:py-2"  to = "/blog"
                        ><FontAwesomeIcon className="nav-fav pr-2 " icon={faBlog} 
                            /> Blog
                    </Link> 
                    </li>
                <li className=" py-3    ">
                    <Link className="nav-item text-white py-3.5 px-3.5 hover:text-black hover:bg-white active:text-blue-400 hover:py-2"  to = "/writing"
                        ><FontAwesomeIcon className="nav-fav pr-2" icon={faPen} 
                            /> Writing
                    </Link>
                    </li>

                <li className=" py-3    ">
                    <Link className="nav-item text-white py-3.5 px-3.5 hover:text-black hover:bg-white active:text-blue-400 hover:py-2"  to = "/about"
                        ><FontAwesomeIcon className="nav-fav pr-2" icon={faUserAstronaut} 
                            /> Study
                    </Link> 
                    </li>
            </ul>
        </div>
    )
    }
};