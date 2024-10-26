import { rooms } from "./rooms";

export const changeRoomStatus = (number: string, time: Date) => {
  const room = rooms.find((o) => o.number === number) ?? rooms[0];
  const timeDiff = Date.now() - time.getTime();

  room.needClean = true;
  room.duration = Math.floor(timeDiff / 60) * 60;
};
