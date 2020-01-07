import React from 'react';

const JournalEntryCard = ({name, reps, sets, weight, id, exercise, removeExercise, editExercise}) => {
    
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
            <button onClick={() => removeExercise(id)}>Delete</button>
            <button onClick={() => editExercise(exercise)}>Edit</button>
        </div>
    )
}

export default JournalEntryCard;