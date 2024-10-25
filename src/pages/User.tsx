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
            <p>How long will you be gone for?</p>
            <button onClick={goToAssets}>Check my Rewards</button>

            <DemoContainer components={['TimePicker']}>
                <TimePicker label="Basic time picker" />
            </DemoContainer>
        </div>
    );
};

export default User;
