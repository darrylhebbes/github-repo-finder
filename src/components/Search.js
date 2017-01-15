import React, { Component } from 'react';
import emitter from '../emitter';

class Search extends Component {
    state = {
        searchTerm: ''
    }

    handleChange = (evt) => {
        const term = evt.target.value;
        this.setState({searchTerm: term});
    }

    emitSearch = () => {
        emitter.emit('search', this.state);
    }
    
    handleClick = (evt) => {
        this.emitSearch();
    }
    
    render() {
        return <span><input
        type="text"
        className="search-box mt3 mb3"
        onChange={this.handleChange}
        placeholder="Type a user name"
        value={this.state.searchTerm}
            />
            <button onClick={this.handleClick}>Search</button> 
            </span>
    }
}

export default Search;
