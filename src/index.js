import React from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/SearchBar'
import VideoDetail from './components/VideoDetail'
import VideoList from './components/VideoList'

const { youTubeApiKey } = require('../secrets')

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
    }

    YTSearch({ key: youTubeApiKey, term: 'surfboards' }, videos => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      })
    })
  }

  render () {
    const { videos, selectedVideo } = this.state
    
    return (
      <div>
        <SearchBar />
        <VideoDetail video={selectedVideo} />
        <VideoList
          onSelectVideo={selectedVideo => this.setState({ selectedVideo })}
          videos={videos}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))