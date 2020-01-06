import React from 'react';

// Components
import Navigation from './Navigation';
import JournalList from './JournalList';

const Dashboard = () => {

    return (
        // This is for display
        <div>
            <Navigation />
            <JournalList />
            
        </div>
    )
}

export default Dashboard;