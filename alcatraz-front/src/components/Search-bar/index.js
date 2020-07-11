import React from 'react';
import './styles.css'
import './responsive.css'

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const SearchBar = () => (
    <div className='search-box'>

        <div class="searchinput">
                <input type="text" name="q" placeholder="Search for a Movie" class="text" required />
                <button type="submit" class="submit"><FontAwesomeIcon icon={faSearch} /></button>
        </div>

    </div>
);

export default SearchBar;