import { Dayjs } from 'dayjs';
import { useState, useEffect } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { Button } from '@mui/material';
import { changeRoomStatus } from '../lib/roomFunc';

const User = () => {
    const navigate = useNavigate();
    const [showScan, setShowScan] = useState(true);
    const [selectedTime, setSelectedTime] = useState<Dayjs | null>(null);
    const roomId = 102; // Hardcoded room ID for now

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowScan(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);

    const goToAssets = () => {
        navigate({ to: '/assets' });
    };

    const handleSend = () => {
        if (selectedTime) {
            changeRoomStatus(roomId, selectedTime.toDate());
            // You might want to add some feedback to the user here,
            // like a success message or navigation to another page
        } else {
            // Handle case where no time is selected
            alert('Please select a time before sending.');
        }
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
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
            <p className="mb-4">How long will you be gone for?</p>
            <div className="mb-4">
                <TimePicker
                    label="Select time"
                    value={selectedTime}
                    onChange={(newValue) => setSelectedTime(newValue)}
                    views={['hours', 'minutes']}
                />
            </div>
            <Button 
                variant="contained" 
                color="primary" 
                onClick={handleSend}
                className="mb-4"
            >
                Send
            </Button>
            <div>
                <Button 
                    variant="outlined" 
                    onClick={goToAssets}
                    className="mt-4"
                >
                    Check my Rewards
                </Button>
            </div>
        </div>
    );
};

export default User;