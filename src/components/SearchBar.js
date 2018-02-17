import React from 'react'

class SearchBar extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      query: ''
    }
  }

  handleInputChange (query) {
    this.setState({ query })
    this.props.onQueryChange(query)
  }

  render () {
    return (
      <div className="search-bar">
        <input
          value={this.state.query}
          onChange={event => this.handleInputChange(event.target.value)}
        />
      </div>
    )
  }
}

export default SearchBar