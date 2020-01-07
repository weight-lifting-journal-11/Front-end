import React, { useState } from 'react';

const EditJournal = ({editing, setEditing, currentJournal, updatedJournal}) => {
    const [journal, setJournal] = useState(currentJournal)

    const handleInputChange = event => {
        const { name, value } = event.target;

        setJournal({...journal, [name]: value })
    }
    return (
        <div>
            <form onSubmit={event => {
                event.preventDefault()
                updatedJournal(journal.id, journal)
            }}>
            <h2>Edit</h2>
            <label>Name</label>
            <input 
            type="text"
            name="region"
            value={journal.region}
            onChange={handleInputChange}
            />
            <button type="submit">Update</button>
            <button onClick={() => setEditing(false)}>Cancel</button>

            </form>
        </div>
    )
}

export default EditJournal;