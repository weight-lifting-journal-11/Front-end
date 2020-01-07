import React, { useEffect, useState} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Loading from './Loading';
import JournalCard from './JournalCard';
import CreateJournal from '../Forms/CreateJournal'
import EditJournal from '../Forms/EditJournal'

const JournalList = ( currentUserID ) => {
    // Set state for api data
    const [journals, setJournals] = useState([]);
    // Set state for loading
    const [loading, setLoading] = useState(true);
    // Set state for editing
    const [editing, setEditing] = useState(false);
    const initialJournalState = { id: null, useId: null, date: '', region: ''}
    const [currentJournal, setCurrentJournal] = useState(initialJournalState);

    // Edit Journal
    const editJournal = journal => {
        setEditing(true);
        setCurrentJournal({id: journal.id, userId: journal.userId, date: journal.date, region: journal.region})
    }
    // Update Journal
    const updatedJournal = (id, updatedJournal) => {
        setEditing(false);
        setJournals(journals.map(journal => (journal.id === id ? updatedJournal : journal) ))
    }
    // Removes Journal
    const removeJournal = id => {
        setJournals(journals.filter(journal => journal.id !== id))
    }

    // axios call
    useEffect(() => {
        setLoading(true)
        axios
        .get(`https://weight-lifting-journal-11.herokuapp.com/api/journals/users/${currentUserID}`, {token: localStorage.getItem('token')})
        .then(response => {
            setLoading(false);
            setJournals(response.data)
            console.log(response)
        })
        .catch(error => console.log(error))
    }, [])

    if (loading) return <Loading />

    return (
        
        <div>
            {editing ? (
                <EditJournal
                editing={editing}
                setEditing={setEditing}
                currentJournal={currentJournal}
                updatedJournal={updatedJournal}
                />
            ) : (
                // CreateJournal form to create a new workout
                <CreateJournal />
            )}
            <h1>Journal list</h1>
            {journals.map(journal => (
                <JournalCard 
                key={journal.id} 
                date={journal.date} 
                region={journal.region}
                id={journal.id}
                removeJournal={removeJournal}
                editJournal={editJournal}
                journal={journal}
                />
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        currentUserID: state.userID
    }
}

export default connect (mapStateToProps)(JournalList);