import _ from 'lodash'
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

    this.videoSearch('surfboards')
  }

  videoSearch (query) {
    YTSearch({ key: youTubeApiKey, term: query }, videos => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      })
    })
  }

  render () {
    const { videos, selectedVideo } = this.state
    const throttledVideoSearch = _.debounce(query => this.videoSearch(query), 300)
    
    return (
      <div>
        <div className="header">ReacTV</div>
        <SearchBar onQueryChange={query => throttledVideoSearch(query)} />
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