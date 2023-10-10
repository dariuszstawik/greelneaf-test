"use client";

import { Fade } from "react-awesome-reveal";

export default function ListItem({ children, isLast, className, isNested }) {
  return (
    // <Fade triggerOnce>
    <div className={`flex py-4 ${!isLast && "border-b"} ${className}`}>
      {isNested ? (
        <svg
          className="mr-4 ml-6 mt-1 w-[20px] h-[20px] shrink-0 text-primaryGreen font-bold"
          width={20}
          height={20}
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>
      ) : (
        <svg
          className="mr-4 mt-1 w-[20px] h-[20px] shrink-0"
          width={20}
          height={20}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z"
            fill="#40915e"
          />
        </svg>
      )}
      <p className="my-0">{children}</p>
    </div>
    // </Fade>
  );
}
