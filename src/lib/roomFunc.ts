export interface Room {
  coords: [x: number, y: number];
  width: number;
  height: number;
  number: string;
  needClean: boolean;
  duration: number;
}

const rooms: Array<Room> = [];
export const changeRoomStatus = (number: string, time: Date) => {
  const room = rooms.find((o) => o.number === number) ?? rooms[0];

  room.needClean = true;
  room.duration = Date.now() - time.getTime();
};
