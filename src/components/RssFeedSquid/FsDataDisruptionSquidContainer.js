import React, { Component } from 'react'
import { FsDataDisruptionSquid } from './FsDataDisruptionSquid'

var parseString = require('react-native-xml2js').parseString;

export class FsDataDisruptionSquidContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeDisruptions: [],
            earlierDisruptions: []
        };
    }

    async componentDidMount() {

        const res = await fetch("https://cors-anywhere.herokuapp.com/https://status.fsdata.se/feed/");
        const resAsXml = await res.text();

        parseString(resAsXml, (err, result) => {
            console.log(result.rss.channel[0].item);
            const disruptions = result.rss.channel[0].item.map(
                it => {
                    return {
                        date: new Date(it.pubDate[0]).toISOString(),
                        title: it.title[0],
                        link: it.link[0]
                    }
                }
            );

            console.log(disruptions);

            this.setState({
                activeDisruptions: ['hej'],
                earlierDisruptions: []
            });
        });
    }

    render() {

        const {
            activeDisruptions,
            earlierDisruptions
        } = this.state;

        return (
            <FsDataDisruptionSquid
                activeDisruptions={activeDisruptions}
                earlierDisruptions={earlierDisruptions}
            />
        )
    }
}