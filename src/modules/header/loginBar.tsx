import React from "react";
import { Link } from "react-router-dom";

import {IconProp} from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRightToBracket} from "@fortawesome/free-solid-svg-icons";
import {faUserPlus} from "@fortawesome/free-solid-svg-icons";


const faPIRightToBracket = faRightToBracket as IconProp;
const faPIUserPlus = faUserPlus as IconProp;
export default class LoginBar extends React.Component {
  render() {
    return (
      <div className="LoginBar w-2/12 flex items-center justify-end mr-2  ">
        <div className=" px-4  border border-solid border-gray-600 font-thin rounded-full mr-2">
        <Link className=" w-14 text-sm text-gray-300" to="/login">
            <FontAwesomeIcon className="text-gray-400 pl-2 pr-4" icon={faPIRightToBracket} fade  
            />Sign In</Link>
        </div>
     
        <div className="px-4  border border-solid border-gray-600 font-thin rounded-full text-gray-300 bg-black">
        <Link className="text-sm" to="/register">
            <FontAwesomeIcon className="pr-1" size="sm" icon={faPIUserPlus} fade 
            /> Sign Up</Link>
        </div>
          
      </div>
    );
  }
}