import React from 'react';

const JournalEntryCard = ({name, reps, sets, weight}) => {
    
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
        </div>
    )
}

export default JournalEntryCard;