"use client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "./Loader";
import Navbar from "./Navbar";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Loader key="loader" finishLoading={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Navbar />
          {children}
        </>
      )}
    </>
  );
}
