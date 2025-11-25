"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-50 p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="text-center max-w-md"
            >
                <motion.div
                    initial={{ rotate: -45, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                        delay: 0.2,
                    }}
                    className="mx-auto w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mb-6"
                >
                    <AlertCircle className="w-12 h-12 text-red-500" />
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl font-bold text-gray-900 mb-2"
                >
                    Something went wrong!
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-600 mb-8"
                >
                    We apologize for the inconvenience. An unexpected error has occurred.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <Button
                        onClick={() => reset()}
                        className="bg-black hover:bg-gray-800 text-white px-8 py-6 rounded-full text-lg transition-all duration-300 hover:scale-105"
                    >
                        Try Again
                    </Button>
                </motion.div>
            </motion.div>
        </div>
    );
}
