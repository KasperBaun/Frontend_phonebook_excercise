import { useState } from 'react';

const Filter = (props) => {
const [personName, setPersonName] = useState('')

const handlePersonNameChange = (event) => {
    setPersonName(event.target.value);
}

const setFilteredPersonsToShow = (event) => {
    event.preventDefault()
    const filteredList = props.persons.filter(person => person.name.toLowerCase().includes(personName.toLowerCase()))
    if(personName===''){
        window.alert("Wrong input for name in search")
        props.setPersons(props.persons)
        return;
    }
    if(filteredList.length == 0){
        window.alert("No person named "+ personName +" in the phonebook!")
        props.setPersons(props.persons)
        setPersonName('')
    } else{
        props.setPersons(filteredList)
    }
}


return(
    <div>
        <h2>Search for a person in the phonebook</h2>
        <form onSubmit={setFilteredPersonsToShow}>
                <label >Name:</label>
                <input value={personName} 
                onChange={handlePersonNameChange}
                />
                <br></br>
                <button type="submit">Search</button>
            </form> 
    </div>


)
}


export default Filter;