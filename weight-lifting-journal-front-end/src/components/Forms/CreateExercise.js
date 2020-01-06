import React, {useState} from 'react';

const CreateExercise = ({addNewExercise}) => {

    // State for form
    const [exercise, setExercise] = useState({
        id: '',
        name: '',
        reps: '',
        sets: '',
        weight: ''
    })
    // Handle input change
    const handleChange = event => {
        setExercise({
            ...exercise,
            [event.target.name]: event.target.value
        })
    }
    // Handle form submit
    const handleSubmit = event => {
        event.preventDefault();
        addNewExercise(exercise)
        setExercise({
            id: '',
            name: '',
            reps: '',
            sets: '',
            weight: ''
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input 
                onChange={handleChange}
                name="name"
                type="text"
                value={exercise.name}
                />
                <label>Reps:</label>
                <input
                onChange={handleChange}
                name="reps"
                type="text"
                value={exercise.reps}
                />
                <label>Sets:</label>
                <input
                onChange={handleChange}
                name="sets"
                type="text"
                value={exercise.sets}
                />
                <label>Weight:</label>
                <input
                onChange={handleChange}
                name="weight"
                type="text"
                value={exercise.weight}
                />
                <button>Add</button>
            </form>
        </div>
    )
}

export default CreateExercise;