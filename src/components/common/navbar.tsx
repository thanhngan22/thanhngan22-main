import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBookOpen, faBlog, faPen, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';

interface Props {
    name: string;
    path: string;
}

export default class Navbar extends React.Component {
    constructor(props: Props ) {
        super(props);
    }

    


    render () {
    return (
        <div className = "Home-navbar h-9 w-4/12 ">
            <ul className = "justify-around flex w-full ">
                <li className="py-1 self-center   ">
                    <Link aria-current="page"  className="px-1.5 py-px text-gray-300 font-thin hover:bg-gray-700 hover:opacity-50 border border-black hover:border-gray-600   hover:rounded-sm"  to = "/"
                        ><FontAwesomeIcon className="nav-fav pr-2" icon={faHome} 
                            /> Home
                    </Link> 
                </li>
                <li className="py-1 self-center    ">
                    <Link className="px-1.5 py-px text-gray-300 font-thin hover:bg-gray-700 hover:opacity-50 border border-black hover:border-gray-600   hover:rounded-sm"  to = "/docs"
                        ><FontAwesomeIcon className="nav-fav pr-2 " icon={faBookOpen} 
                            /> Docs
                    </Link> 
                    </li>
                <li className="py-1 self-center    ">
                    <Link className="px-1.5 py-px text-gray-300 font-thin hover:bg-gray-700 hover:opacity-50 border border-black hover:border-gray-600   hover:rounded-sm"  to = "/blog"
                        ><FontAwesomeIcon className="nav-fav pr-3 " icon={faBlog} 
                            /> Blog
                    </Link> 
                    </li>
                <li className="py-1 self-center    ">
                    <Link className="px-1.5 py-px text-gray-300 font-thin hover:bg-gray-700 hover:opacity-50 border border-black hover:border-gray-600   hover:rounded-sm"  to = "/writing"
                        ><FontAwesomeIcon className="nav-fav pr-1" icon={faPen} 
                            /> Writing
                    </Link>
                    </li>

                <li className="py-1 self-center    ">
                    <Link className="px-1.5 py-px text-gray-300 font-thin hover:bg-gray-700 hover:opacity-50 border border-black hover:border-gray-600   hover:rounded-sm"  to = "/about"
                        ><FontAwesomeIcon className="nav-fav pr-2" icon={faUserAstronaut} 
                            /> Study
                    </Link> 
                    </li>
            </ul>
        </div>
    )
    }
};