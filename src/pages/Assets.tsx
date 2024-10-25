import React from 'react';

// Mock data for rewards
const rewards = [
    {
        id: 1,
        title: "Complimentary Breakfast",
        description: "Enjoy a free breakfast during your stay.",
        imageUrl: "https://media.cntraveler.com/photos/5a380338bbb64f1f2f4ef8de/master/pass/MAG18-JANFEB-HOTEL-BREAKFAST-hranek.jpg",
    },
    {
        id: 2,
        title: "Free Spa Day",
        description: "Relax and unwind with a complimentary spa day.",
        imageUrl: "https://connecticutexplorer.com/wp-content/uploads/2021/07/shutterstock_232040587.jpg",
    },
    // Add more reward objects here
];

const Assets: React.FC = () => {
    return (
        <div>
            <h1>Assets Page</h1>
            <p>This is the Assets page.</p>

            <div>
                {rewards.map((reward) => (
                    <div key={reward.id} style={{
                        display: 'flex',
                        alignItems: 'center',
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        padding: '16px',
                        margin: '8px 0',
                        maxWidth: '600px'
                    }}>
                        <img src={reward.imageUrl} alt={reward.title} style={{
                            width: '100px',
                            height: '100px',
                            borderRadius: '8px',
                            marginRight: '16px'
                        }}/>
                        <div style={{flex: 1}}>
                            <h2>{reward.title}</h2>
                            <p>{reward.description}</p>
                            <button style={{
                                padding: '8px 16px',
                                border: 'none',
                                borderRadius: '4px',
                                background: '#007bff',
                                color: 'white',
                                cursor: 'pointer'
                            }}>
                                Redeem
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Assets;
