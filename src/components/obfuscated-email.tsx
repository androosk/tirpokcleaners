"use client";

import { ReactNode } from "react";
import { Email } from "react-obfuscate-email";

export const ObfuscatedEmail = ({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) => {
  return (
    <Email
      email="libertyjasmine@yahoo.com"
      className={
        className || "text-center tracking-wider text-2xl md:text-3xl underline"
      }
    >
      {children || "liberty@tirpok.com"}
    </Email>
  );
};
