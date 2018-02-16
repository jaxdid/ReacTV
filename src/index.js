import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/SearchBar'
const { youTubeApiKey } = require('../secrets')

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))