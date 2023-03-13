import react from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar () {
    return (
        <div className="search-bar  ">
            <input type="text" className="border border-black w-2/3 rounded-sm relative"/>
                <FontAwesomeIcon icon={faSearch} size="lg" className="absolute -ml-7 my-1 " />
        </div>
    );
}