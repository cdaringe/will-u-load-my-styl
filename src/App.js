import 'react-octagon/lib/styles/semantic.css'
import { FavoriteButton } from 'react-octagon'
import { Segment } from 'semantic-ui-react'
import React, { Component } from 'react'

class App extends Component {
  render () {
    return (
      <Segment>
        <FavoriteButton isFavorited />
      </Segment>
    )
  }
}
export default App
