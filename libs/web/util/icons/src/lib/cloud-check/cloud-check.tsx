import styles from './cloud-check.module.css';

/* eslint-disable-next-line */
export interface CloudCheckProps {}

export function CloudCheck(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="auto"
        d="M14.29 14.19L11 17.48l-1.29-1.29a1 1 0 00-1.42 0 1 1 0 000 1.41l2 2a1 1 0 001.42 0l4-4a1 1 0 000-1.41 1 1 0 00-1.42 0zm4.13-5.87a7 7 0 00-13.36 1.9 4 4 0 00-.38 7.65A1 1 0 105.32 16 2 2 0 014 14.1a2 2 0 012-2 1 1 0 001-1 5 5 0 019.73-1.6 1 1 0 00.78.66 3 3 0 01.24 5.84 1 1 0 00.25 2h.25a5 5 0 00.17-9.62z"
      />
    </svg>
  );
}

export default CloudCheck;
