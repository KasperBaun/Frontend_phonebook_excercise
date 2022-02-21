import ReactDOM from 'react-dom'
import App from './App'

const persons = [
  {
    id: 1,
    content: 'Henrik Andersen',
    date: '2019-05-30T17:30:31.098Z',
    show: true
  },
  {
    id: 2,
    content: 'Kasper Baun',
    date: '2019-05-30T18:39:34.091Z',
    show: false
  },
  {
    id: 3,
    content: 'Lars Larsen',
    date: '2019-05-30T19:20:14.298Z',
    show: true
  }
]

ReactDOM.render(
  <App props={persons} />,
  document.getElementById('root')
)