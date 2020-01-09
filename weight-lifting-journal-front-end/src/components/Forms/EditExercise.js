import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const EditExercise = ({editing, setEditing, currentExercise, updatedExercise}) => {
    const { register, handleSubmit, errors } = useForm();
    const [exercise, setExercise] = useState(currentExercise)

    const handleInputChange = event => {
        const { name, value } = event.target;

        setExercise({...exercise, [name]: value })
    }
    return (
        <div>
            Editing...
            <form onSubmit={handleSubmit(event => {
                // event.preventDefault()
                updatedExercise(exercise)
            })}>
            <h4>Edit</h4>
            <label>Name</label>
            <input 
            type="text"
            name="name"
            onChange={handleInputChange}
            value={exercise.name}
            ref={register({ required: "Name Required", minLength: {value: 2, message: "Name Too Short"}})}
            />
            {errors.name && <p>{errors.name.message}</p>}
            <label>Reps</label>
            <input 
            type="text"
            name="reps"
            onChange={handleInputChange}
            value={exercise.reps}
            ref={register({required: "Reps required", pattern: {value: /^\d+$/, message: "Please Enter Only Numbers"}})}
            />
            {errors.reps && <p>{errors.reps.message}</p>}
            <label>Sets</label>
            <input 
            type="text"
            name="stes"
            onChange={handleInputChange}
            value={exercise.sets}
            ref={register({required: "Sets required", pattern: {value: /^\d+$/, message: "Please Enter Only Numbers"}})}
            />
            {errors.sets && <p>{errors.sets.message}</p>}
            <label>Weight</label>
            <input 
            type="text"
            name="weight"
            onChange={handleInputChange}
            value={exercise.weight}
            ref={register({required: "Sets required", pattern: {value: /^\d+$/, message: "Please Enter Only Numbers"}})}
            />
            {errors.weight && <p>{errors.weight.message}</p>}
            <button type="submit">Update</button>
            <button onClick={() => setEditing(false)}>Cancel</button>
            </form>
        </div>
    )
}

export default EditExercise;