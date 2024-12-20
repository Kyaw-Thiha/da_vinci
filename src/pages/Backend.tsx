import { getPath } from "@/lib/getPath";
import { Point } from "@/lib/interface";
import { rooms } from "@/lib/rooms";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Backend: React.FC = () => {
  const [cleaner, setCleaner] = useState(1);

  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const hallwayWidth = 20;
  const leftHallwayX = 185 + (210 - 185 - hallwayWidth) / 2;

  const [paths, setPaths] = useState<Array<Array<Point>>>([]);
  const [draw, setDraw] = useState(false);
  const toggleDraw = () => setDraw((prevDraw) => !prevDraw);

  const createNumberedMarker = (number: number, x: number, y: number) => (
    <g key={`marker-${number}`}>
      <circle cx={x} cy={y} r="10" fill="teal" />
      <text
        x={x}
        y={y}
        textAnchor="middle"
        dominantBaseline="central"
        fill="white"
        fontSize="12"
      >
        {number}
      </text>
    </g>
  );

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

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  function getPathColor(index: number) {
    if (index == 0) {
      return "teal";
    } else if (index == 1) {
      return "aqua";
    } else if (index == 2) {
      return "yellow";
    } else if (index == 3) {
      return "blue";
    } else {
      return "teal";
    }
  }

  return (
    <div
      className="mb-20 flex min-h-screen flex-col items-center p-4"
      ref={containerRef}
    >
      <h1 className="mb-4 mt-12 text-4xl font-bold md:mb-20">
        Hotel Floor Layout
      </h1>
      <div className="flex w-full justify-center px-4">
        <div style={{ width: dimensions.width, height: dimensions.height }}>
          <motion.svg
            className="h-full w-full border border-black"
            viewBox="0 0 475 250"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Top Horizontal Hallway */}
            <rect x="0" y="80" width="475" height="20" fill="#f0f0f0" />

            {/* Bottom Horizontal Hallway */}
            <rect x="0" y="170" width="475" height="20" fill="#f0f0f0" />

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

            {/* Path */}
            {draw &&
              paths.map((path, pathIndex) => (
                <g key={`path-${pathIndex}`}>
                  <motion.polyline
                    points={path
                      .map(
                        ({ coords }) =>
                          `${coords[0] + rooms[0].width / 2},${coords[1] + rooms[0].height / 2}`,
                      )
                      .join(" ")}
                    fill="none"
                    stroke={getPathColor(pathIndex)}
                    strokeWidth="1.5"
                    opacity={0.6}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      duration: 4,
                      ease: "easeInOut",
                    }}
                  />
                  {path.map(({ coords }, index) =>
                    createNumberedMarker(
                      index + 1,
                      coords[0] + rooms[0].width / 2,
                      coords[1] + rooms[0].height / 2,
                    ),
                  )}
                </g>
              ))}
          </motion.svg>
        </div>
      </div>
      <div className="mt-8 flex flex-row items-center gap-4">
        <Label htmlFor="cleaner">Cleaner No.</Label>
        <Input
          id="cleaner"
          value={cleaner}
          onChange={(e) => {
            setCleaner(parseInt(e.target.value));
          }}
          type="number"
          placeholder="Cleaner"
        />
      </div>

      <button
        className="mt-8 rounded-lg bg-teal-700 px-4 py-2 text-xl text-white hover:bg-teal-800 active:bg-teal-900"
        onClick={() => {
          const generatedPaths = getPath(rooms, cleaner);
          setPaths([...generatedPaths]);

          toggleDraw();
        }}
      >
        Get Path
      </button>
    </div>
  );
};

export default Backend;
