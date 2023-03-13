import react from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar () {
    return (
        <div className="search-bar flex w-60   ">
            <input type="text" className="border border-gray-600 rounded-sm bg-black w-full self-center pl-2 text-sm font-thin" placeholder="search...                              ctrl + /"/>
                <FontAwesomeIcon icon={faSearch} size="sm" className="text-gray-400 font-thin self-center -ml-5" />
        </div>
    );
}