import React, { useState } from 'react';

const EditExercise = ({editing, setEditing, currentExercise, updatedExercise}) => {
    const [exercise, setExercise] = useState(currentExercise)

    const handleInputChange = event => {
        const { name, value } = event.target;

        setExercise({...exercise, [name]: value })
    }
    return (
        <div>
            Editing...
            <form onSubmit={event => {
                event.preventDefault()
                updatedExercise(exercise.id, exercise)
            }}>
            <h2>Edit</h2>
            <label>Name</label>
            <input 
            type="text"
            name="name"
            onChange={handleInputChange}
            value={exercise.name}
            />
            <label>Reps</label>
            <input 
            type="text"
            name="reps"
            onChange={handleInputChange}
            value={exercise.reps}
            />
            <label>Sets</label>
            <input 
            type="text"
            name="stes"
            onChange={handleInputChange}
            value={exercise.sets}
            />
            <label>Weight</label>
            <input 
            type="text"
            name="weight"
            onChange={handleInputChange}
            value={exercise.weight}
            />
            <button type="submit">Update</button>
            <button onClick={() => setEditing(false)}>Cancel</button>
            </form>
        </div>
    )
}

export default EditExercise;