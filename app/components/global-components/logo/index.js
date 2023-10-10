import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = ({ className }) => {
  return (
    <Link href="/">
      <Image
        src="/green-leaf-logo.svg"
        width="100"
        height="88"
        className={`m-10 ${className}`}
        alt="logo"
      />
    </Link>
  );
};

export default Logo;
