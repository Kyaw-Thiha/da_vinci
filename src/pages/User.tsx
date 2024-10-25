import { useNavigate } from '@tanstack/react-router';

const User = () => {
    const navigate = useNavigate();

    const goToAssets = () => {
        navigate({ to: '/assets' });
    };

    return (
        <div>
            <h1>User Page</h1>
            <p>Welcome to the User page!</p>
            <button onClick={goToAssets}>Go to Assets Page</button>
        </div>
    );
};

export default User;
