import React from 'react' 
import ProjectList from '../project/ProjectList'
import Notification from './Notifications'

const Dashboard = () => {
    return(
        <div className="dash">
            <ProjectList />
            <Notification />
        </div>
    )
}

export default Dashboard