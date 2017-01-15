import React, { Component } from 'react';
import emitter from '../emitter';

class Search extends Component {
    state = {
        searchTerm: '',
        isHideForkedRepos: false
    }

    handleChange = (evt) => {
        const term = evt.target.value;
        this.setState({searchTerm: term});
    }

    toggleCheckboxChange = () => {
        this.setState(({ isHideForkedRepos }) => (
            {
                isHideForkedRepos: !isHideForkedRepos,
            }
        ));

    }

    emitSearch = () => {
        emitter.emit('search', this.state);
    }

    handleKeyUp = (evt) => {
        const ENTER_KEY_CODE = 13;
        if(evt.keyCode === ENTER_KEY_CODE) this.emitSearch();
    }
    
    handleClick = (evt) => {
        this.emitSearch();
    }
    
    render() {
        const { isHideForkedRepos } = this.state;

        return <span><input
        type="text"
        className="search-box mt3 mb3"
        onChange={this.handleChange}
        onKeyUp={this.handleKeyUp}
        placeholder="Type a user name"
        value={this.state.searchTerm}
            />
            <button onClick={this.handleClick}>Search</button>
            <label>   <input
                       type="checkbox"
                       value={this.state.isHideForkedRepos}
                       checked={isHideForkedRepos}
                       onChange={this.toggleCheckboxChange}
            /> Exclude repositories the user has forked</label>
            </span>
    }
}

export default Search;
