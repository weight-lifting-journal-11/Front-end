import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addJournal } from '../../actions/primaryActions';


const CreateJournal = ({addJournal, today, addJournalLoading, displayNewJournal}) => {
    const userID = localStorage.getItem('userID')
    // State for form
    const [journal, setJournal] = useState({
        userId: userID,
        date: 'today',
        region: ''
    })
    // Handle input change
    const handleChange = event => {
        setJournal({
            ...journal,
            userId: userID,
            date: 'today',
            [event.target.name]: event.target.value
        })
        console.log(journal)
    }
    // Handle form submit
    const handleSubmit = event => {
        event.preventDefault();
        addJournal(journal);
        setJournal({
            userId: '',
            date: '',
            region: ''
        })
    }

    return (
        <div>
            <h4>Add Journal Entry</h4>
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