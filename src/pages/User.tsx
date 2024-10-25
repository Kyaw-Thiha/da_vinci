import { useNavigate } from '@tanstack/react-router';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

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

            <DemoContainer components={['TimePicker']}>
                <TimePicker label="Basic time picker" />
            </DemoContainer>
        </div>
    );
};

export default User;
