import React, { Component } from 'react'
import { AdventOfCodeSquid } from './AdventOfCodeSquid'
import { SIX_HOURS } from '../../../common/constants'
import { LoadingSpinner } from '../../loadingSpinner/LoadingSpinner'
import { fetchJson } from '../../../common/http'

class AdventOfCodeSquidContainer extends Component {
  updateInterval
  //adventOfCodeUrl = 'https://cors-anywhere.herokuapp.com/https://adventofcode.com/2019/leaderboard/private/view/629785.json'
  //adventOfCodeUrl = 'https://adventofcode.com/2019/leaderboard/private/view/629785.json'
  adventOfCodeUrl = '/adventofcode'

  constructor(props) {
    super(props)

    this.state = {
      leaderboard: undefined
    }
  }

  async componentDidMount() {
    this.getLeaderboard().then(() => {
      this.updateInterval = setInterval(this.getLeaderboard, SIX_HOURS)
    })
  }

  componentWillUnmount() {
    clearInterval(this.updateInterval)
  }

  async getLeaderboard() {
    //TODO: Session cookie needed
    await fetchJson(this.adventOfCodeUrl, this.leaderboardExtractor)
  }

  leaderboardExtractor = (leaderboard) => {
    this.setState({
      leaderboard: leaderboard
    })
  }

  render() {
    const { leaderboard } = this.state

    return (
      leaderboard ? (
        <AdventOfCodeSquid
          leaderboard={leaderboard}
        />
      ) : <LoadingSpinner/>
    )
  }
}

export { AdventOfCodeSquidContainer as AdventOfCodeSquid }