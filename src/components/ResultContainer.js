import React, { Component } from 'react';
import reqwest from 'reqwest';
import emitter from '../emitter';
import Message from './Message';
import List from './List';

class ResultContainer extends Component {

    constructor(props) {
        super(props);
        this.state = { type: 'start',
                       searchTerm: ''
                     };
    }

    componentDidMount() {
        emitter.on('search', ({ searchTerm, isHideForkedRepos }) => {
            this.setState({ type: 'searching' });
            reqwest({
                url: `https://api.github.com/users/${searchTerm}/repos`,
                type: 'GET',
                crossOrigin: true
            })
                .then(response => {
                    let data = JSON.parse(response.response);
                    let responseData = {};
                    if (isHideForkedRepos){
                        responseData = data.filter(function(d) { return d.fork === false; });
                    } else {
                        responseData = data;
                    }

                    this.setState({ response: {
                        results: responseData, 
                        resultCount: responseData.length}, 
                        type: responseData.length || 'noRepositories' });
                })
                .fail(err => {
                    console.log('err', err);
                    this.setState({ type: 'noResponse' })
                    }
                );
        });
    }

    componentWillUnmount() { 
        emitter.removeListener('search');
    }

    mainRender = () => {
        const { type, response } = this.state;
        const msgMap = {
            start: {
                headerMsg: 'Welcome',
                bodyMsg: 'Please enter a username to start searching for Github repos!',
                msgColor:''
            },
            searching: {
                headerMsg: 'Just one second',
                bodyMsg: 'Looking for the username...',
                msgColor:'loading'
            },
            noRepositories: {
                headerMsg: 'Github user has no repos',
                bodyMsg: 'User has perhaps not created any public repositories',
                msgColor:'warn'
            },
            noResponse: {
                headerMsg: 'Github API does not respond',
                bodyMsg: 'We\'re sorry please try again later.',
                msgColor:'warn'
            }
        };

        const msg = msgMap[type];

        if (msg) {
            return (<Message {...msg} />);
        }

        return (<List {...response} />);
    };

    render() {
        return (<div>{this.mainRender()}</div>);
    }
}

export default ResultContainer;
