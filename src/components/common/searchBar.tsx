import react from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar () {
    return (
        <div className="search-bar flex">
            <FontAwesomeIcon icon={faSearch} size="lg" className="self-center" />
        </div>
    );
}