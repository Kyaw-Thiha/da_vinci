import React, { useEffect, useRef, useState } from "react";

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
    {
      coords: [10, 10],
      width: leftRoomWidth,
      height: 90,
      number: "101",
      needClean: false,
      duration: 0,
    },
    {
      coords: [10 + leftRoomWidth + spaceBetweenRooms, 10],
      width: leftRoomWidth,
      height: 90,
      number: "102",
      needClean: false,
      duration: 0,
    },
    {
      coords: [10 + 2 * (leftRoomWidth + spaceBetweenRooms), 10],
      width: leftRoomWidth,
      height: 90,
      number: "103",
      needClean: true,
      duration: 60,
    },
    // Top right
    {
      coords: [leftHallwayX + hallwayWidth + spaceBetweenRooms, 10],
      width: rightRoomWidth,
      height: 90,
      number: "104",
      needClean: true,
      duration: 270,
    },
    {
      coords: [
        leftHallwayX +
          hallwayWidth +
          spaceBetweenRooms +
          rightRoomWidth +
          spaceBetweenRooms,
        10,
      ],
      width: rightRoomWidth,
      height: 90,
      number: "105",
      needClean: true,
      duration: 60,
    },
    {
      coords: [
        leftHallwayX +
          hallwayWidth +
          spaceBetweenRooms +
          2 * (rightRoomWidth + spaceBetweenRooms),
        10,
      ],
      width: rightRoomWidth,
      height: 90,
      number: "106",
      needClean: true,
      duration: 180,
    },
    {
      coords: [
        leftHallwayX +
          hallwayWidth +
          spaceBetweenRooms +
          3 * (rightRoomWidth + spaceBetweenRooms),
        10,
      ],
      width: rightRoomWidth,
      height: 90,
      number: "107",
      needClean: true,
      duration: 270,
    },
    // Bottom left
    {
      coords: [10, 150],
      width: leftRoomWidth,
      height: 90,
      number: "108",
    },
    {
      coords: [10 + leftRoomWidth + spaceBetweenRooms, 150],
      width: leftRoomWidth,
      height: 90,
      number: "109",
      needClean: true,
      duration: 60,
    },
    {
      coords: [10 + 2 * (leftRoomWidth + spaceBetweenRooms), 150],
      width: leftRoomWidth,
      height: 90,
      number: "110",
      needClean: false,
      duration: 0,
    },
    // Bottom right
    {
      coords: [leftHallwayX + hallwayWidth + spaceBetweenRooms, 150],
      width: rightRoomWidth,
      height: 90,
      number: "111",
      needClean: true,
      duration: 180,
    },
    {
      coords: [
        leftHallwayX +
          hallwayWidth +
          spaceBetweenRooms +
          rightRoomWidth +
          spaceBetweenRooms,
        150,
      ],
      width: rightRoomWidth,
      height: 90,
      number: "112",
      needClean: false,
      duration: 0,
    },
    {
      coords: [
        leftHallwayX +
          hallwayWidth +
          spaceBetweenRooms +
          2 * (rightRoomWidth + spaceBetweenRooms),
        150,
      ],
      width: rightRoomWidth,
      height: 90,
      number: "113",
      needClean: true,
      duration: 360,
    },
    {
      coords: [
        leftHallwayX +
          hallwayWidth +
          spaceBetweenRooms +
          3 * (rightRoomWidth + spaceBetweenRooms),
        150,
      ],
      width: rightRoomWidth,
      height: 90,
      number: "114",
      needClean: true,
      duration: 90,
    },
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
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div className="flex h-screen flex-col items-center p-4" ref={containerRef}>
      <h1 className="mb-4 text-2xl font-bold">Hotel Floor Layout</h1>
      <div className="flex w-full justify-center px-4">
        <div style={{ width: dimensions.width, height: dimensions.height }}>
          <svg
            className="h-full w-full border border-black"
            viewBox="0 0 475 250"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Main Hallway */}
            <rect x="0" y="110" width="475" height="30" fill="#f0f0f0" />

            {/* Vertical Hallway */}
            <rect
              x={leftHallwayX}
              y="0"
              width={hallwayWidth}
              height="250"
              fill="#f0f0f0"
            />

            {/* Rooms */}
            {rooms.map((room, index) => (
              <g key={index}>
                <rect
                  x={room.coords[0]}
                  y={room.coords[1]}
                  width={room.width}
                  height={room.height}
                  fill="white"
                  stroke="black"
                />
                <text
                  x={room.coords[0] + room.width / 2}
                  y={room.coords[1] + room.height / 2}
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
