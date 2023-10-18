import React from 'react';
import { Outlet } from 'react-router-dom';

const EnrolledMainDashboard = () => {
    return (
        <div>
           <nav>
            nav here
           </nav>
           <Outlet>

           </Outlet>
        
        </div>
    );
};

export default EnrolledMainDashboard;