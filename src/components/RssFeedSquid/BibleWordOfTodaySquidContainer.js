import React, { Component } from 'react'
import { BibleWordOfTodaySquid } from './BibleWordOfTodaySquid'
import { formatDateTime } from '../../common/utils';

var parseString = require('react-native-xml2js').parseString;

export class BibleWordOfTodaySquidContainer extends Component {
    constructor(props) {
        super(props);

        this.reloadTime = 24 * 60 * 60 * 1000;

        this.state = {
            bibleWordOfToday: null
        };
    }

    async loadFeed() {
        const res = await fetch("https://cors-anywhere.herokuapp.com/http://www.bibeln.se/rss/dagens-bibelord.xml");
        const resAsXml = await res.text();

        parseString(resAsXml, (err, result) => {
            const item = result.rss.channel[0].item[0];
            const bibleWordOfToday = {
                id: Math.random(),
                date: formatDateTime(new Date(item.pubDate[0]).toISOString()),
                title: item.title[0],
                description: item.description
            };

            this.setState({
                bibleWordOfToday
            });
        });
    }

    async componentDidMount() {
        this.loadFeed();
        this.interval = setInterval(() => this.loadFeed(), this.reloadTime);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {

        const {
            bibleWordOfToday
        } = this.state;

        return (
            <BibleWordOfTodaySquid
                bibleWordOfToday={bibleWordOfToday}
            />
        )
    }
}