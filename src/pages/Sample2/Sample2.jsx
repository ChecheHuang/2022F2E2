import React from 'react'

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import DragDrop from './DragDrop'

function Sample2() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ width: '100vw', height: '100vh', textAlign: 'center' }}>
        <DragDrop />
      </div>
    </DndProvider>
  )
}

export default Sample2
