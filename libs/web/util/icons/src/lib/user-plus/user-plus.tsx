import styles from './user-plus.module.css';

/* eslint-disable-next-line */
export interface UserPlusProps {}

export function UserPlus(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="auto"
        d="M21 10.5h-1v-1a1 1 0 00-2 0v1h-1a1 1 0 000 2h1v1a1 1 0 002 0v-1h1a1 1 0 000-2zm-7.7 1.72A4.92 4.92 0 0015 8.5a5 5 0 00-10 0 4.92 4.92 0 001.7 3.72A8 8 0 002 19.5a1 1 0 002 0 6 6 0 0112 0 1 1 0 002 0 8 8 0 00-4.7-7.28zM10 11.5a3 3 0 113-3 3 3 0 01-3 3z"
      ></path>
    </svg>
  );
}

export default UserPlus;
