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
                isHideForkedRepos: !isHideForkedRepos
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
    
    render() {
        const { isHideForkedRepos } = this.state;

        return <div className="p2 center bg-blue searchBar">
            <h2>User Repo Finder</h2>

            <input
        type="text"
        className="search-box mt1 p1"
        onChange={this.handleChange}
        onKeyUp={this.handleKeyUp}
        placeholder="Type a user name"
        value={this.state.searchTerm}
            /><br/>
            <div className="small">Press "Enter" key to search</div>
            <label><input
        type="checkbox"
        value={this.state.isHideForkedRepos}
        checked={isHideForkedRepos}
        onChange={this.toggleCheckboxChange}
            /> Hide forked repositories</label>
            </div>;
    }
}

export default Search;
