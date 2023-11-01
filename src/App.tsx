import React from 'react'
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Gallery from './pages/Gallery'

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Gallery />
    </DndProvider>
  )
}

export default App