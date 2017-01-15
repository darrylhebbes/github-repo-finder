import React, { Component } from 'react';
import reqwest from 'reqwest';
import emitter from '../emitter';

class ResultContainer extends Component {

    constructor(props) {
        super(props);
        this.state = { type: 'start',
                       searchTerm: ''
                     };
    }

    componentDidMount() {
        emitter.on('search', ({ searchTerm }) => {
            this.setState({ type: 'searching' });
            reqwest({
                url: `https://api.github.com/users/${searchTerm}/repos`,
                type: 'GET',
                crossOrigin: true
            })
                .then(response => {
                    this.setState({ response: {
                        results: JSON.parse(response.response), 
                        resultCount: JSON.parse(response.response).length}, 
                        type: JSON.parse(response.response).length || 'noRepositories' });
                })
                .fail(err => this.setState({ type: 'noResponse' }));
        });

        emitter.emit('search', this.state);
    }

    componentWillUnmount() { 
        emitter.removeListener('search');
    }

    mainRender = () => {
        const { type, response } = this.state;

        console.log('response', response);

        const msgMap = {
            start: {
                headerMsg: 'Welcome',
                bodyMsg: 'Please enter a username to start searching for Github repos!'
            },
            loading: {
                headerMsg: 'Just one second',
                bodyMsg: 'Finding the user...'
            },
            noRepositories: {
                headerMsg: 'Github user has no repos',
                bodyMsg: 'User has perhaps not created any public repositories'
            },
            noResponse: {
                headerMsg: 'Github API does not respond',
                bodyMsg: 'We\'re sorry please try again later.'
            }
        };

        const msg = msgMap[type];

        if (msg) {
            return (<Message {...msg} />);
        }
        return (<List {...response} />);
    };

    render() {
        return (
                <div>{this.mainRender()}</div>
        );
    }
}

export default ResultContainer;
