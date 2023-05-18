import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBookOpen, faBlog, faPen, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';

import handleChangePath from './handleChangePath'

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
        // console.log(href);

        // get all the links in the navbar
        let navbar = document.querySelector(".Home-navbar");
        let nav_links = Array.from(navbar?.querySelectorAll("a") as NodeListOf<HTMLAnchorElement>) ;

        handleChangePath(href as string, nav_links)
    }    


    render () {
    return (
        <div className = "Home-navbar h-9 w-4/12 ">
            <ul className = "justify-around flex w-full ">
                <li   className="nav__item self-center mt-1 -ml-5 " >
                    <Link onClick={this.handleClick}  className="px-1.5 py-2 text-gray-700 font-thin border  hover:border-gray-600   hover:rounded-sm"  to = "/"
                        ><FontAwesomeIcon className=" pr-2" icon={faHome} 
                            /> Home
                    </Link> 
                </li>
                {/* <li  className="nav__docs py-1 self-center mt-1    ">
                    <Link onClick={this.handleClick} className="px-1.5 py-2 text-gray-300 font-thin border  hover:border-gray-600   hover:rounded-sm"  to = "/docs"
                        ><FontAwesomeIcon className=" pr-2 " icon={faBookOpen} 
                            /> Docs
                    </Link> 
                    </li> */}
                <li  className="nav__item py-1 self-center mt-1    ">
                    <Link onClick={this.handleClick} className="px-4 py-2 text-gray-700 font-thin border  hover:border-gray-600   hover:rounded-sm"  to = "/blog"
                        > Blog
                    </Link> 
                    </li>
                <li  className="nav__item py-1 self-center mt-1    ">
                    <Link onClick={this.handleClick} className="px-3 py-2 text-gray-700 font-thin border  hover:border-gray-600   hover:rounded-sm"  to = "/writing"
                        > Writing
                    </Link>
                    </li>

                <li  className="nav__study py-1 self-center mt-1    ">
                    <Link onClick={this.handleClick} className="px-1.5 py-2 text-gray-700 font-thin border  hover:border-gray-600   hover:rounded-sm"  to = "/collections"
                        > Collections
                    </Link> 
                    </li>
            </ul>
        </div>
    )
    }
};