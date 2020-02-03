import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import { Header } from './components'
import { Home, About, Services } from './sections'

function App () {
  return <ScrollableAnchor id='home'>
    <div>
      <Header />
      <div>
        <Home />
        <About />
        <Services />
      </div>
    </div>
  </ScrollableAnchor>
}

export default App
