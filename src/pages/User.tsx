import { Dayjs } from "dayjs";
import { useState, useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { Button } from "@mui/material";
import { changeRoomStatus } from "../lib/roomFunc";

const User = () => {
  const navigate = useNavigate();
  const [showScan, setShowScan] = useState(true);
  const [selectedTime, setSelectedTime] = useState<Dayjs | null>(null);
  const [isSent, setIsSent] = useState(false);
  const roomId = 102; // Hardcoded room ID for now

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScan(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const goToAssets = () => {
    navigate({ to: "/assets" });
  };

  const handleSend = () => {
    if (selectedTime) {
      changeRoomStatus(roomId.toString(), selectedTime.toDate());
      setIsSent(true);
      console.log("Sent status:", isSent); // Add this line for debugging
    } else {
      alert("Please select a time before sending.");
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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md max-w-md w-full">
        <h1 className="mb-6 text-2xl font-bold text-center">User Dashboard</h1>
        <p className="mb-4 text-center">How long do you expect to be gone for?</p>
        <div className="mb-6">
          <TimePicker
            label="Select time"
            value={selectedTime}
            onChange={(newValue) => setSelectedTime(newValue)}
            views={["hours", "minutes"]}
            ampm={false}
            className="w-full"
          />
        </div>
        <div className="flex flex-col items-center gap-4">
          <Button
              key={isSent ? 'sent' : 'not-sent'}
              variant="contained"
              onClick={handleSend}
              disabled={isSent}
              style={{
                width: '100%',
                padding: '0.5rem 1rem',
                backgroundColor: isSent ? 'rgb(209 213 219)' : 'rgb(13 148 136)',
                color: isSent ? 'rgb(107 114 128)' : 'white',
                cursor: isSent ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s',
              }}
          >
            {isSent ? "Sent!" : "Send"}
          </Button>
          <Button
              variant="outlined"
              onClick={goToAssets}
              sx={{
                backgroundColor: 'rgb(13 148 136)',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgb(15 118 110)',
                  color: 'white'
                }
              }}
              className="w-full rounded px-4 py-2 transition-colors border-teal-600 hover:bg-teal-700"
          >
            Check my Rewards
          </Button>
        </div>
      </div>
    </div>
  );
};

export default User;