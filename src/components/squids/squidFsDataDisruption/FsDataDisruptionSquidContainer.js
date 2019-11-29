import React, { Component } from 'react'
import { FsDataDisruptionSquid } from './FsDataDisruptionSquid'
import { formatDateTime } from '../../../common/utils'
import { LoadingSpinner } from '../../loadingSpinner/LoadingSpinner'
import { fetchXml } from '../../../common/http'
import { FIVE_MINUTES } from '../../../common/constants'

class FsDataDisruptionSquidContainer extends Component {
  disruptionsUrl = 'https://cors-anywhere.herokuapp.com/https://status.fsdata.se/feed/'
  //disruptionsUrl = '/fsdata';

  constructor(props) {
    super(props)

    this.maxDisruptions = 5

    this.state = {
      activeDisruptions: [],
      earlierDisruptions: []
    }
  }

  async componentDidMount() {
    this.loadFeed().then(() => {
      this.interval = setInterval(() => this.loadFeed(), FIVE_MINUTES)
    })
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  extractDisruptions = (disruptions) => {
    const extractedDisruptions = disruptions.rss.channel[0].item.map(disruption => {
        return {
          id: Math.random(),
          date: formatDateTime(disruption.pubDate[0]),
          title: disruption.title[0],
          link: disruption.link[0],
          active: disruption.active
        }
      }
    )

    const activeDisruptions = extractedDisruptions.filter(it => !it.active)
    const earlierDisruptions = extractedDisruptions
      .filter(it => it.active)
      .slice(0, this.maxDisruptions)

    this.setState({
      activeDisruptions,
      earlierDisruptions
    })
  }

  async loadFeed() {
    //TODO: SSL certificate..?
    await fetchXml(this.disruptionsUrl, this.extractDisruptions)
  }

  render() {
    const {
      activeDisruptions,
      earlierDisruptions
    } = this.state

    return (
      activeDisruptions.length > 0 || earlierDisruptions.length > 0 ? (
        <FsDataDisruptionSquid
          activeDisruptions={activeDisruptions}
          earlierDisruptions={earlierDisruptions}
        />
      ) : <LoadingSpinner/>
    )
  }
}

export { FsDataDisruptionSquidContainer as DataDisruptionSquid }
