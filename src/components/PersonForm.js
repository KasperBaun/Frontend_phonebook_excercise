import { useState } from 'react'

const PersonForm = ( props ) => {
    const [newPerson, setNewPerson] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const handlePersonChange = (event) => {
        setNewPerson(event.target.value);
    }

    const handleNumberChange = (event) => {
      setNewNumber(event.target.value);
    }

    /* Function to add a new person to props.persons */
      const addPerson = (event) => {
        event.preventDefault()
        const newPersonObject = {
          id: props.persons.length + 1,
          name: newPerson,
          number: newNumber,
          date: new Date().toISOString(),
          show : true,
        }
        const doesNameExist = props.persons.filter(person => person.name === newPersonObject.name)
        if(doesNameExist.length>0){
          window.alert(newPersonObject.name +" already exists!")
        } else {
          props.setPersons(props.persons.concat(newPersonObject))
          setNewPerson('')
        }
      }


    return (
        <div>
            <form onSubmit={addPerson}>
                <label >Name:</label>
                <input value={newPerson} 
                onChange={handlePersonChange}
                />
                <br></br>
                <label>Telephone number:</label>
                <input value = {newNumber}
                onChange={handleNumberChange}
                />
                <br></br>
                <button type="submit">Add new person</button>
            </form> 
      </div>
    )
  }
  
  export default PersonForm