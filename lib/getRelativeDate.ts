import { DateTime } from "luxon";

const getRelativeDate = (date: string) => {
  return DateTime.fromISO(date).toRelative();
};

export default getRelativeDate;
