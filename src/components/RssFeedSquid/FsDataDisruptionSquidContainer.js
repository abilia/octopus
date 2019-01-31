import React, { Component } from 'react'
import { FsDataDisruptionSquid } from './FsDataDisruptionSquid'
import { formatDateTime } from '../../common/utils';
import { parseString } from 'xml2js'

export class FsDataDisruptionSquidContainer extends Component {
    constructor(props) {
        super(props);

        this.maxDisruptions = 5;
        this.reloadTime = 30 * 60 * 1000;

        this.state = {
            activeDisruptions: [],
            earlierDisruptions: []
        };
    }

    async loadFeed() {
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

    async componentDidMount() {
        this.loadFeed();
        this.interval = setInterval(() => this.loadFeed(), this.reloadTime);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
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
