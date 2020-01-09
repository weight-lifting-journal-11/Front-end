import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const EditJournal = ({editing, setEditing, currentJournal, updatedJournal}) => {
    const { register, handleSubmit, errors } = useForm();
    const [journal, setJournal] = useState(currentJournal)

    const handleInputChange = event => {
        const { name, value } = event.target;

        setJournal({...journal, [name]: value })
    }
    return (
        <div>
            <form onSubmit={handleSubmit(event => {
                // event.preventDefault()
                updatedJournal(journal.id, journal)
            })}>
            <h4>Edit</h4>
            <label>Name</label>
            <input 
            type="text"
            name="region"
            value={journal.region}
            onChange={handleInputChange}
            ref={register({ required: "Workout Name Required", minLength: { value: 2, message: "Workout Name Too Short"}})}
            />
            {errors.region && <p>{errors.region.message}</p>}
            <button type="submit">Update</button>
            <button onClick={() => setEditing(false)}>Cancel</button>
            </form>
        </div>
    )
}

export default EditJournal;