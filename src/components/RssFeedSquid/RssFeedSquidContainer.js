import React, { Component } from 'react'

import { RssFeedSquid } from './RssFeedSquid'

export class RssFeedSquidContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feed: []
        };
    }

    async componentDidMount() {

        const res = await fetch("https://cors-anywhere.herokuapp.com/https://status.fsdata.se/feed/");
        const something = await res.text()

        this.setState({
            feed: ['hej']
        });
    }

    render() {

        const {
            feed
        } = this.state;

        return (
            <RssFeedSquid
                feedList={feed}
            />
        )
    }
}