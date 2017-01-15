import React, { Component } from 'react';
import MastHead from './MastHead';
import Search from './Search';
import ResultContainer from './ResultContainer';

class App extends Component {
    
    render () {
        return (
                <div>
                <MastHead />
                <Search />
                <ResultContainer />
                </div>
        );
    }
};

export default App;
