import { useState } from 'react'

const PersonForm = ( props ) => {
    const [newPerson, setNewPerson] = useState('')
    const [persons, setPersons] = useState(props.persons)

    const handlePersonChange = (event) => {
        console.log(event.target.value);
        setNewPerson(event.target.value);
        console.log("props.persons is: ", props.persons);
      }
    /* Function to add a new person to props.persons */
      const addPerson = (event) => {
        event.preventDefault()
        const newPersonObject = {
          id: persons.length + 1,
          content: newPerson,
          date: new Date().toISOString(),
          show : true,
        }
      
        setPersons(props.persons.push(newPersonObject))
        setNewPerson('')
      }


    return (
        <div>
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