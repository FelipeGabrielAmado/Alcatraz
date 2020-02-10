import React, { Component } from 'react';

import './styles.css'

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default class Search extends Component {
    state = {
         isOpen: false

    };

    openMenu(){
        console.log('chegou');
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <div className={'search-bar' + (!this.state.isOpen) ? "menu-item" : ""}>
                <form>
                    <input></input> 
                </form>
                <a onClick={() => this.openMenu()}><div className='search-icon'><FontAwesomeIcon icon={faSearch} /></div></a>
            </div>
        );
    }
}