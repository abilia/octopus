import React, { Component } from 'react'
import { BibleWordOfTodaySquid } from './BibleWordOfTodaySquid'
import { parseString } from 'xml2js'
import { ONE_DAY } from '../../common/constants'
import { LoadingSpinner } from '../loadingSpinner/LoadingSpinner'
import { extractTextFromHtml } from '../../common/utils'

export class BibleWordOfTodaySquidContainer extends Component {
  updateInterval

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
    const response = await fetch('https://cors-anywhere.herokuapp.com/http://www.bibeln.se/rss/dagens-bibelord.xml')
    const responseXml = await response.text()

    parseString(responseXml, (err, result) => {
      const bibleWordInfo = result.rss.channel[ 0 ].item[ 0 ]

      const bibleWord = {
        title: bibleWordInfo.title[ 0 ],
        description: extractTextFromHtml(bibleWordInfo.description[ 0 ])
      }

      this.setState({
        bibleWord
      })
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
