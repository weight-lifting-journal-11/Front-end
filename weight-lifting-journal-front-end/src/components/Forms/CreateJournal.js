import React, { useState } from 'react';


const CreateJournal = ({addNewJournal, today}) => {

    // State for form
    const [journal, setJournal] = useState({
        id: '',
        userId: '',
        date: today,
        region: ''
    })
    // Handle input change
    const handleChange = event => {
        setJournal({
            ...journal,
            [event.target.name]: event.target.value
        })
    }
    // Handle form submit
    const handleSubmit = event => {
        event.preventDefault();
        addNewJournal(journal)
        setJournal({
            id: '',
            userId: '',
            date: today,
            region: ''
        })
    }

    return (
        <div>
            <h2>Add Journal Entry</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                onChange={handleChange}
                name="region"
                type="text"
                value={journal.region}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default CreateJournal;