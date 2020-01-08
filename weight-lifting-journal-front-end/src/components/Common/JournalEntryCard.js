import React from 'react';
import { connect } from 'react-redux'
import { deleteExercise } from '../../actions/primaryActions';

const JournalEntryCard = ({name, reps, sets, weight, id, exercise, deleteExercise, editExercise}) => {
    
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Reps</th>
                        <th>Sets</th>
                        <th>Weight</th>
                    </tr>
                    <tr>
                        <td>{name}</td>
                        <td>{reps}</td>
                        <td>{sets}</td>
                        <td>{weight}</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={() => deleteExercise(id)}>Delete</button>
            {console.log(id)}
            <button onClick={() => editExercise(exercise)}>Edit</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        exercises: state.exercises
    }
}

export default connect (mapStateToProps, {deleteExercise} )(JournalEntryCard);