const hallwayWidth = 20;
const spaceBetweenRooms = 5;
const leftRoomWidth = 55;
const rightRoomWidth = 60;

const leftHallwayX = 185 + (210 - 185 - hallwayWidth) / 2;

export interface Room {
  coords: [x: number, y: number];
  width: number;
  height: number;
  number: string;
  needClean: boolean;
  duration: number;
}

export const rooms: Array<Room> = [
  // Top left
  {
    coords: [10, 10],
    width: leftRoomWidth,
    height: 70,
    number: "101",
    needClean: false,
    duration: 0,
  },
  {
    coords: [10 + leftRoomWidth + spaceBetweenRooms, 10],
    width: leftRoomWidth,
    height: 70,
    number: "102",
    needClean: false,
    duration: 0,
  },
  {
    coords: [10 + 2 * (leftRoomWidth + spaceBetweenRooms), 10],
    width: leftRoomWidth,
    height: 70,
    number: "103",
    needClean: true,
    duration: 60,
  },
  // Top right
  {
    coords: [leftHallwayX + hallwayWidth + spaceBetweenRooms, 10],
    width: rightRoomWidth,
    height: 70,
    number: "104",
    needClean: true,
    duration: 240,
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
    height: 70,
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
    height: 70,
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
    height: 70,
    number: "107",
    needClean: true,
    duration: 240,
  },
  // Middle left
  {
    coords: [10, 100],
    width: leftRoomWidth,
    height: 70,
    number: "108",
    needClean: false,
    duration: 0,
  },
  {
    coords: [10 + leftRoomWidth + spaceBetweenRooms, 100],
    width: leftRoomWidth,
    height: 70,
    number: "109",
    needClean: true,
    duration: 60,
  },
  {
    coords: [10 + 2 * (leftRoomWidth + spaceBetweenRooms), 100],
    width: leftRoomWidth,
    height: 70,
    number: "110",
    needClean: false,
    duration: 0,
  },
  // Middle right
  {
    coords: [leftHallwayX + hallwayWidth + spaceBetweenRooms, 100],
    width: rightRoomWidth,
    height: 70,
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
      100,
    ],
    width: rightRoomWidth,
    height: 70,
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
      100,
    ],
    width: rightRoomWidth,
    height: 70,
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
      100,
    ],
    width: rightRoomWidth,
    height: 70,
    number: "114",
    needClean: true,
    duration: 120,
  },
  // Bottom left
  {
    coords: [10, 190],
    width: leftRoomWidth,
    height: 70,
    number: "115",
    needClean: true,
    duration: 120,
  },
  {
    coords: [10 + leftRoomWidth + spaceBetweenRooms, 190],
    width: leftRoomWidth,
    height: 70,
    number: "116",
    needClean: false,
    duration: 0,
  },
  {
    coords: [10 + 2 * (leftRoomWidth + spaceBetweenRooms), 190],
    width: leftRoomWidth,
    height: 70,
    number: "117",
    needClean: true,
    duration: 60,
  },
  // Bottom right
  {
    coords: [leftHallwayX + hallwayWidth + spaceBetweenRooms, 190],
    width: rightRoomWidth,
    height: 70,
    number: "118",
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
      190,
    ],
    width: rightRoomWidth,
    height: 70,
    number: "119",
    needClean: true,
    duration: 180,
  },
  {
    coords: [
      leftHallwayX +
        hallwayWidth +
        spaceBetweenRooms +
        2 * (rightRoomWidth + spaceBetweenRooms),
      190,
    ],
    width: rightRoomWidth,
    height: 70,
    number: "120",
    needClean: false,
    duration: 0,
  },
  {
    coords: [
      leftHallwayX +
        hallwayWidth +
        spaceBetweenRooms +
        3 * (rightRoomWidth + spaceBetweenRooms),
      190,
    ],
    width: rightRoomWidth,
    height: 70,
    number: "121",
    needClean: true,
    duration: 180,
  },
];
