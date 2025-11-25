"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-50 p-4">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
            >
                <motion.h1
                    className="text-9xl font-bold text-gray-200"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        delay: 0.2,
                    }}
                >
                    404
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <h2 className="text-2xl font-semibold text-gray-800 mt-4">
                        Page Not Found
                    </h2>
                    <p className="text-gray-600 mt-2 mb-8 max-w-md mx-auto">
                        Oops! The page you are looking for seems to have wandered off.
                        Let&apos;s get you back on track.
                    </p>
                    <Link href="/">
                        <Button
                            asChild
                            className="bg-black hover:bg-gray-800 text-white px-8 py-6 rounded-full text-lg transition-all duration-300 hover:scale-105"
                        >
                            <motion.span whileTap={{ scale: 0.95 }}>
                                Return Home
                            </motion.span>
                        </Button>
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
}
