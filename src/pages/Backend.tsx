import React, { useEffect, useRef, useState } from 'react';

const Backend: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    const hallwayWidth = 20;
    const spaceBetweenRooms = 5;
    const leftRoomWidth = 55;
    const rightRoomWidth = 60;

    const leftHallwayX = 185 + (210 - 185 - hallwayWidth) / 2;

    const rooms = [
        // Top left
        { x: 10, y: 10, width: leftRoomWidth, height: 90, number: '101' },
        { x: 10 + leftRoomWidth + spaceBetweenRooms, y: 10, width: leftRoomWidth, height: 90, number: '102' },
        { x: 10 + 2 * (leftRoomWidth + spaceBetweenRooms), y: 10, width: leftRoomWidth, height: 90, number: '103' },
        // Top right
        { x: leftHallwayX + hallwayWidth + spaceBetweenRooms, y: 10, width: rightRoomWidth, height: 90, number: '104' },
        { x: leftHallwayX + hallwayWidth + spaceBetweenRooms + rightRoomWidth + spaceBetweenRooms, y: 10, width: rightRoomWidth, height: 90, number: '105' },
        { x: leftHallwayX + hallwayWidth + spaceBetweenRooms + 2 * (rightRoomWidth + spaceBetweenRooms), y: 10, width: rightRoomWidth, height: 90, number: '106' },
        { x: leftHallwayX + hallwayWidth + spaceBetweenRooms + 3 * (rightRoomWidth + spaceBetweenRooms), y: 10, width: rightRoomWidth, height: 90, number: '107' },
        // Bottom left
        { x: 10, y: 150, width: leftRoomWidth, height: 90, number: '108' },
        { x: 10 + leftRoomWidth + spaceBetweenRooms, y: 150, width: leftRoomWidth, height: 90, number: '109' },
        { x: 10 + 2 * (leftRoomWidth + spaceBetweenRooms), y: 150, width: leftRoomWidth, height: 90, number: '110' },
        // Bottom right
        { x: leftHallwayX + hallwayWidth + spaceBetweenRooms, y: 150, width: rightRoomWidth, height: 90, number: '111' },
        { x: leftHallwayX + hallwayWidth + spaceBetweenRooms + rightRoomWidth + spaceBetweenRooms, y: 150, width: rightRoomWidth, height: 90, number: '112' },
        { x: leftHallwayX + hallwayWidth + spaceBetweenRooms + 2 * (rightRoomWidth + spaceBetweenRooms), y: 150, width: rightRoomWidth, height: 90, number: '113' },
        { x: leftHallwayX + hallwayWidth + spaceBetweenRooms + 3 * (rightRoomWidth + spaceBetweenRooms), y: 150, width: rightRoomWidth, height: 90, number: '114' },
    ];

    useEffect(() => {
        const updateDimensions = () => {
            if (containerRef.current) {
                const containerWidth = containerRef.current.clientWidth;
                const containerHeight = containerRef.current.clientHeight;
                const aspectRatio = 5 / 3;
                const horizontalMargin = 32;

                let width = containerWidth - 2 * horizontalMargin;
                let height = width / aspectRatio;

                if (height > containerHeight) {
                    height = containerHeight;
                    width = height * aspectRatio;
                }

                setDimensions({ width, height });
            }
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    return (
        <div className="flex flex-col items-center p-4 h-screen" ref={containerRef}>
            <h1 className="text-2xl font-bold mb-4">Hotel Floor Layout</h1>
            <div className="px-4 w-full flex justify-center">
                <div style={{ width: dimensions.width, height: dimensions.height }}>
                    <svg
                        className="border border-black w-full h-full"
                        viewBox="0 0 475 250"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        {/* Main Hallway */}
                        <rect x="0" y="110" width="475" height="30" fill="#f0f0f0" />

                        {/* Vertical Hallway */}
                        <rect x={leftHallwayX} y="0" width={hallwayWidth} height="250" fill="#f0f0f0" />

                        {/* Rooms */}
                        {rooms.map((room, index) => (
                            <g key={index}>
                                <rect
                                    x={room.x}
                                    y={room.y}
                                    width={room.width}
                                    height={room.height}
                                    fill="white"
                                    stroke="black"
                                />
                                <text
                                    x={room.x + room.width / 2}
                                    y={room.y + room.height / 2}
                                    textAnchor="middle"
                                    dominantBaseline="middle"
                                    fontSize="12"
                                >
                                    {room.number}
                                </text>
                            </g>
                        ))}
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Backend;