
import React, { Component } from 'react';

class MastHead extends Component {
    render() {
        return (
            <header className="masthead clearfix">
              <div className="clearfix">
                <div className="sm-col sm-col-4 "><img alt="" className="fit m2" src="../../public/github.svg"/></div>
                <div className="sm-col sm-col-8 "><h3>User Repo Finder</h3></div>
              </div>     
            </header>
        );
    }
}

export default MastHead;
