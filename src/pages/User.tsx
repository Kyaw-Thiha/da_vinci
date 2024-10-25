import { useState, useEffect } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

const User = () => {
    const navigate = useNavigate();
    const [showScan, setShowScan] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowScan(false);
        }, 1200); // Increased to 3 seconds to allow for slower animation

        return () => clearTimeout(timer);
    }, []);

    const goToAssets = () => {
        navigate({ to: '/assets' });
    };

    if (showScan) {
        return (
            <div className="scan-screen">
                <div className="scan-content">
                    <div className="checkmark-circle">
                        <div className="checkmark draw"></div>
                    </div>
                    <p className="scan-text">Scanned!</p>
                </div>
            </div>
        );
    }

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