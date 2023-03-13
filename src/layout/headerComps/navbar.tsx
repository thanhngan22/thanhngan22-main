import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBookOpen, faBlog, faPen, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';

import handleChangePath from './handleComps/handleChangePath'

export default class Navbar extends React.Component {
    constructor(props: any) {
        super(props);
     
    }

    componentDidMount(): void {
        // get all the links in the navbar
        let navbar = document.querySelector(".Home-navbar");
        let nav_links = Array.from(navbar?.querySelectorAll("a") as NodeListOf<HTMLAnchorElement>) ;

        // get the current path
        let path = window.location.pathname;
        // console.log(path)

        if (nav_links && path) {
            handleChangePath(path, nav_links);
        }
    }

    handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        // get href of the link
        let href = e.currentTarget.getAttribute("href");
        console.log(href);

        // get all the links in the navbar
        let navbar = document.querySelector(".Home-navbar");
        let nav_links = Array.from(navbar?.querySelectorAll("a") as NodeListOf<HTMLAnchorElement>) ;

        handleChangePath(href as string, nav_links)
    }    


    render () {
    return (
        <div className = "Home-navbar h-9 w-4/12 ">
            <ul className = "justify-around flex w-full ">
                <li   className="nav__home py-1 self-center mt-1 -ml-5 " >
                    <Link onClick={this.handleClick}  className="px-1.5 py-2 text-gray-300 font-thin hover:bg-gray-700 hover:opacity-50 border border-black hover:border-gray-600   hover:rounded-sm"  to = "/"
                        ><FontAwesomeIcon className=" pr-2" icon={faHome} 
                            /> Home
                    </Link> 
                </li>
                <li  className="nav__docs py-1 self-center mt-1    ">
                    <Link onClick={this.handleClick} className="px-1.5 py-2 text-gray-300 font-thin hover:bg-gray-700 hover:opacity-50 border border-black hover:border-gray-600   hover:rounded-sm"  to = "/docs"
                        ><FontAwesomeIcon className=" pr-2 " icon={faBookOpen} 
                            /> Docs
                    </Link> 
                    </li>
                <li  className="nav__blog py-1 self-center mt-1    ">
                    <Link onClick={this.handleClick} className="px-1.5 py-2 text-gray-300 font-thin hover:bg-gray-700 hover:opacity-50 border border-black hover:border-gray-600   hover:rounded-sm"  to = "/blog"
                        ><FontAwesomeIcon className=" pr-3 " icon={faBlog} 
                            /> Blog
                    </Link> 
                    </li>
                <li  className="nav__writing py-1 self-center mt-1    ">
                    <Link onClick={this.handleClick} className="px-1.5 py-2 text-gray-300 font-thin hover:bg-gray-700 hover:opacity-50 border border-black hover:border-gray-600   hover:rounded-sm"  to = "/writing"
                        ><FontAwesomeIcon className=" pr-1" icon={faPen} 
                            /> Writing
                    </Link>
                    </li>

                <li  className="nav__study py-1 self-center mt-1    ">
                    <Link onClick={this.handleClick} className="px-1.5 py-2 text-gray-300 font-thin hover:bg-gray-700 hover:opacity-50 border border-black hover:border-gray-600   hover:rounded-sm"  to = "/study"
                        ><FontAwesomeIcon className=" pr-2" icon={faChalkboardTeacher} 
                            /> Study
                    </Link> 
                    </li>
            </ul>
        </div>
    )
    }
};