import React, { Component } from 'react'
import UserList from './user-list'

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>My App</h1>
        <UserList />
      </div>
    )
  }
}
