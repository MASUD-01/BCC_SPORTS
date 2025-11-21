import { addDays } from 'date-fns';
export const fadeInUp = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.2 },
};

export const pageChangeAnimation = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, x: -100, transition: { duration: 0.3 } },
};

export const referenceType = [
  { label: 'Mr', value: 'Mr' },
  { label: 'Ms', value: 'Ms' },
  { label: 'Mrs', value: 'Mrs' },
  { label: 'Master', value: 'Master' },
  { label: 'Miss', value: 'Miss' },
];

const Dep_date = addDays(new Date(), 3);
const Ret_date = addDays(new Date(), 6);

export const FLIGHT_DURATION_EXPIRED = 60 * 1000 * 15;

export const HOTEL_CURRENCY = 'BDT';
export const HOTEL_NATIONALITY = 'BD';
export const HOTEL_DURATION_EXPIRED = 60 * 1000 * 15;

export const TWO_FA_ERROR_MESSAGE = 'Two factor authentication is required for this account';
