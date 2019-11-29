import React, { Component } from 'react'
import { PlaceholderSquid } from './PlaceholderSquid'
import { LoadingSpinner } from '../../loadingSpinner/LoadingSpinner'
import { fetchJson } from '../../../common/http'
import { FIVE_MINUTES } from "../../../common/constants";

class PlaceholderSquidContainer extends Component {
  jsonplaceholderUrl = 'https://jsonplaceholder.typicode.com/users/'

  constructor(props) {
    super(props)

    this.state = {
      userList: []
    }
  }

  async componentDidMount() {
    this.loadTodos().then(() => {
      this.interval = setInterval(() => this.loadTodos(), FIVE_MINUTES)
    })
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  async loadTodos() {
    await fetchJson(this.jsonplaceholderUrl, this.extractTodos)
  }

  extractTodos = (userList) => {
    this.setState({
      userList: userList
    });
  }

  render() {
    const { userList } = this.state;

    return (
      userList.length > 0 ? (
        <PlaceholderSquid
          userList={userList}
          />
      ) : <LoadingSpinner />
    )
  }
}

export { PlaceholderSquidContainer as PlaceholderSquid }