"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { HeroUIProvider } from "@heroui/system";
import { usePathname, useRouter } from "next/navigation";

export function Providers({children}: { children: React.ReactNode }) {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsLoaded(true);
  }, [pathname]);

  return (
    <motion.main
      initial={{ opacity: 0, y: 30 }}
      animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8 }}
    >
      <HeroUIProvider navigate={router.push}>
        {children}
      </HeroUIProvider>
    </motion.main>

  )
}