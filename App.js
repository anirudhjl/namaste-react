import React from 'react'
import ReactDOM from 'react-dom/client'

// const heading1 = React.createElement('div', {}, 'I am heading') // returns JS object

const heading2 = React.createElement('div', {},
  React.createElement('div', { id: 'parent1' },
    React.createElement('h1', { id: 'child1' }, 'I am Child 1'),
    React.createElement('h2', { id: 'child2' }, 'I am Child too')
  ),
  React.createElement('div', { id: 'parent2' },
    React.createElement('h1', { id: 'child1' }, 'I am Child 1'),
    React.createElement('h2', { id: 'child2' }, 'I am Child too')
  )
)

const HeadingComponent = () => <h1>I am different</h1>

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render([heading2, <HeadingComponent />])
