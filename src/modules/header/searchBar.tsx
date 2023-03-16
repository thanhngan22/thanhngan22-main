import react from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar () {
    return (
        <div className="search-bar flex w-60 -ml-7 ">
            <input type="text" className="h-6 border border-gray-800 rounded-sm bg-black w-full self-center pl-2 text-sm font-thin placeholder:text-gray-600" placeholder=" search...                                   ctrl + /"/>
                {/* <FontAwesomeIcon icon={faSearch} size="sm" className="text-gray-600 font-thin self-center -ml-5" /> */}
        </div>
    );
}