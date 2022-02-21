import { useState } from 'react'
import Person from './Person'

const PersonForm = ( props ) => {
    const [persons, setPersons] = useState(props.persons)
    const [newPerson, setNewPerson] = useState('')
    const [showAll, setShowAll] = useState(true)

    const handlePersonChange = (event) => {
        console.log(event.target.value)
        setNewPerson(event.target.value)
      }
    /* Function to add a new person to props.persons */
      const addPerson = (event) => {
        event.preventDefault()
        const newPersonObject = {
          content: newPerson,
          date: new Date().toISOString(),
          show : true,
          id: persons.length + 1,
        }
      
        setPersons(persons.concat(newPersonObject))
        setNewPerson('')
      }

      const personsToShow = showAll
    ? persons
    : persons.filter(person => person.show)



    return (
        <div>
            
            <div>
                <button onClick={() => setShowAll(!showAll)}>
                show {showAll ? 'important' : 'all' }
                </button>
            </div>
            
        
            <ul>
                {personsToShow.map(person => 
                <Person key={person.id} person={person} />
                )}
            </ul>

            <form onSubmit={addPerson}>
                <input value={newPerson} 
                onChange={handlePersonChange}
                />
                <button type="submit">add</button>
            </form> 

      </div>
    )
  }
  
  export default PersonForm