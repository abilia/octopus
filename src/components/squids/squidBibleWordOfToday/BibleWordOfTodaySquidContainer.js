import React, { Component } from 'react'
import { BibleWordOfTodaySquid } from './BibleWordOfTodaySquid'
import { ONE_DAY } from '../../../common/constants'
import { LoadingSpinner } from '../../loadingSpinner/LoadingSpinner'
import { extractTextFromHtml } from '../../../common/utils'
import { fetchXml } from '../../../common/http'

class BibleWordOfTodaySquidContainer extends Component {
  updateInterval
  bibleWordUrl = 'https://cors-anywhere.herokuapp.com/http://www.bibeln.se/rss/dagens-bibelord.xml'

  constructor(props) {
    super(props)

    this.state = {
      bibleWord: undefined
    }
  }

  async componentDidMount() {
    this.loadFeed().then(() => {
      this.updateInterval = setInterval(this.loadFeed, ONE_DAY)
    })
  }

  componentWillUnmount() {
    clearInterval(this.updateInterval)
  }

  async loadFeed() {
    await fetchXml(this.bibleWordUrl, this.bibleWordExtractor)
  }

  bibleWordExtractor = (bibleWord) => {
    const bibleWordData = bibleWord.rss.channel[0].item[0]

    const extractedBibleWord = {
      title: bibleWordData.title[0],
      description: extractTextFromHtml(bibleWordData.description[0])
    }

    this.setState({
      bibleWord: extractedBibleWord
    })
  }

  render() {
    const { bibleWord } = this.state

    return (
      bibleWord ? (
        <BibleWordOfTodaySquid
          title={bibleWord.title}
          text={bibleWord.description}
        />
      ) : <LoadingSpinner/>
    )
  }
}

export { BibleWordOfTodaySquidContainer as BibleWordSquid}
