import React from 'react';
import { router } from '../routes/routes'; // Import the router instance

const User: React.FC = () => {
    const goToAssets = () => {
        router.navigate('/assets'); // Navigate to the Assets page
    };

    return (
        <div>
            <h1>User Page</h1>
            <p>Welcome to the User page!</p>
            <button onClick={goToAssets}>Go to Assets Page</button> {/* Button to go to Assets */}
        </div>
    );
};

export default User;

