import ReactDOM from 'react-dom'
import App from './App'

const persons = [
  {
    id: 1,
    name: 'Henrik Andersen',
    number: "30826684",
    date: '2019-05-30T17:30:31.098Z',
    show: true
  },
  {
    id: 2,
    name: 'Kasper Baun',
    number: "20445530",
    date: '2019-05-30T18:39:34.091Z',
    show: false
  },
  {
    id: 3,
    name: 'Lars Larsen',
    number: "49203945",
    date: '2019-05-30T19:20:14.298Z',
    show: true
  },
  {
    id: 4,
    name: 'Torben Twister',
    number: "84239432",
    date: '2019-05-30T19:20:14.298Z',
    show: true
  },
  {
    id: 5,
    name: 'Dennis Dingo',
    number: "23043349",
    date: '2019-05-30T19:20:14.298Z',
    show: true
  }
]

ReactDOM.render(
  <App persons={persons} />,
  document.getElementById('root')
)