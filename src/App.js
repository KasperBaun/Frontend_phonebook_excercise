import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import { useState } from 'react';

const App = ( props  ) => {
  const [persons, setPersons] = useState(props.persons)


  return (
    <div>
      <h2>Phonebook</h2>

      {/*<Filter />*/}

      <h3>Add a new</h3>

      <PersonForm persons={persons} /> 

      <h3>Numbers</h3>

      <Persons persons={persons} />
    </div>
  )
}

export default App