import React from "react";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRightToBracket} from "@fortawesome/free-solid-svg-icons";
import {faUserPlus} from "@fortawesome/free-solid-svg-icons";

const faPIRightToBracket = faRightToBracket as IconProp;
const faPIUserPlus = faUserPlus as IconProp;
export default class LoginBar extends React.Component {
  render() {
    return (
      <div className="LoginBar w-2/12 flex items-center justify-end  ">
        <div className=" px-4 py-1 border border-solid border-black rounded-full mr-2">
        <a className=" w-14 text-sm " href="/login">
            <FontAwesomeIcon className="text-gray-700 pl-2 pr-4" icon={faPIRightToBracket} fade  
            />Login</a>
        </div>
     
        <div className="px-5 py-1 border border-solid border-white rounded-full text-white bg-black">
        <a className="text-sm" href="/signup">
            <FontAwesomeIcon className="pr-1" icon={faPIUserPlus} 
            /> Sign Up</a>
        </div>
          
      </div>
    );
  }
}