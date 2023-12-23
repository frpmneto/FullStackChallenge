import { useState } from 'react'
import NavBar from './components/NavBar'
import Graph from './components/Graph'
import Body from './components/Body'

function App() {

  return (
    <div className='overflow-x-hidden'>
      <NavBar></NavBar>

      <Body></Body>
    </div>
  )
}

export default App