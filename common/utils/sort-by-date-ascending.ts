import { isBefore } from "date-fns";

export const sortByDateAscending = (dateOne: Date, dateTwo: Date) =>
  isBefore(dateOne, dateTwo) ? 1 : -1;
