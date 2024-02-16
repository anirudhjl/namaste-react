import React from 'react'
import ReactDOM from 'react-dom/client'

const root = React.createElement('div', {},
  React.createElement('div', { id: 'parent1' },
    React.createElement('h1', { id: 'child1' }, 'Child 1'),
    React.createElement('h2', { id: 'child2' }, 'Child 2')
  ),
  React.createElement('div', { id: 'parent2' },
    React.createElement('h1', { id: 'child1' }, 'Child 1'),
    React.createElement('h2', { id: 'child2' }, 'Child 2')
  )
)

// Render root component
const rootContainer = ReactDOM.createRoot(document.getElementById('root'))
rootContainer.render(root)
