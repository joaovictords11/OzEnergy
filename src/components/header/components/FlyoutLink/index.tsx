"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type FlyoutLink = {
  children: React.ReactNode;
  href: string;
  FlyoutContent?: React.ReactNode;
};

const FlyoutLink = ({ children, href, FlyoutContent }: FlyoutLink) => {
  const [showFlyout, setShowFlyout] = useState(false);

  return (
    <div
      onMouseEnter={() => setShowFlyout(true)}
      onMouseLeave={() => setShowFlyout(false)}
      className="relative h-fit w-fit z-50"
    >
      <a href={href} className="relative font-medium text-neutral-700">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 
        origin-left rounded-full bg-orange-500 
        transition-transform duration-300 ease-out"
        />
      </a>
      <AnimatePresence>
        {showFlyout && FlyoutContent && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{ translateX: "-50%" }}
            className="absolute left-1/2 top-12"
          >
            <span className="absolute bg-transparent -top-7 left-24 right-24 h-7" />
            <div className="bg-orange-400 absolute top-0 left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 rotate-45" />
            {FlyoutContent}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FlyoutLink;
