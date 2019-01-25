import React, { Component } from 'react'
import { FsDataDisruptionSquid } from './FsDataDisruptionSquid'
import { formatDateTime } from '../../common/utils';

var parseString = require('react-native-xml2js').parseString;

export class FsDataDisruptionSquidContainer extends Component {
    constructor(props) {
        super(props);

        this.maxDisruptions = 5;

        this.state = {
            activeDisruptions: [],
            earlierDisruptions: []
        };
    }

    async componentDidMount() {

        const res = await fetch("https://cors-anywhere.herokuapp.com/https://status.fsdata.se/feed/");
        const resAsXml = await res.text();

        parseString(resAsXml, (err, result) => {
            const disruptions = result.rss.channel[0].item.map(
                it => {
                    return {
                        id: Math.random(),
                        date: formatDateTime(new Date(it.pubDate[0]).toISOString()),
                        title: it.title[0],
                        link: it.link[0],
                        active: it.active
                    }
                }
            );
            const activeDisruptions =  disruptions.filter(it => !it.active);
            const earlierDisruptions = disruptions.filter(it => it.active).slice(0, this.maxDisruptions);

            this.setState({
                activeDisruptions,
                earlierDisruptions
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