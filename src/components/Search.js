import React, { Component } from 'react';

class Search extends Component {
    state = {
        searchTerm: ''
    }

    handleChange = (evt) => {
        const term = evt.target.value;
        this.setState({searchTerm: term});

        if (term.length > 2) {
            // Search
        }
    }

    
    handleKeyUp = (evt) => {
        const ENTER_KEY_CODE = 13;
        if(evt.keyCode === 13) this.emitSearch();
    }
    
    render() {
        return <input
        type="text"
        className="search-box mt3 mb3"
        onChange={this.handleChange}
        onKeyUp={this.handleKeyUp}
        placeholder="Type a module name"
        value={this.state.searchTerm}
            />
    }
}

export default Search;
