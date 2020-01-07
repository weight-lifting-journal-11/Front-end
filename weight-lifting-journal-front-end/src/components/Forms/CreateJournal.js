import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addJournal } from '../../actions/primaryActions';


const CreateJournal = ({addJournal, today, addJournalLoading, currentUserID}) => {

    // State for form
    const [journal, setJournal] = useState({
        id: '',
        userId: currentUserID,
        date: '',
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
        addJournal(journal)
        setJournal({
            id: '',
            userId: '',
            date: '',
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

const mapStateToProps = state => {
    return {
        currentUserID: state.userID,
        addJournalLoading: state.addJournalLoading,
    }
}

export default connect (mapStateToProps, {addJournal}) (CreateJournal);