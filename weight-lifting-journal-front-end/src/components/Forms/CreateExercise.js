import React, {useState} from 'react';
import { connect } from 'react-redux';
import { addExercise } from '../../actions/primaryActions';

const CreateExercise = ({addExercise, journalId}) => {
    const userID = localStorage.getItem('userID')
    // State for form
    const [exercise, setExercise] = useState({
        journalId: journalId,
        userId: userID,
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
        console.log('this is journalID and the id from journalEntry', journalId)
    }
    // Handle form submit
    const handleSubmit = event => {
        event.preventDefault();
        addExercise(exercise);
        setExercise({
            journalId: journalId,
            userId: userID,
            name: '',
            reps: '',
            sets: '',
            weight: ''
        })
    }

    return (
        <div>
            <h4>Add exercise</h4>
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

const mapStateToProps = state => {
    return {
        exercises: state.exercises,
    }
}

export default connect (mapStateToProps, {addExercise})(CreateExercise);