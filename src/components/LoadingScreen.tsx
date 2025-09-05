import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Initializing...");

  const loadingSteps = [
    { text: "Setting up the board...", duration: 800 },
    { text: "Preparing pieces...", duration: 600 },
    { text: "Loading strategies...", duration: 700 },
    { text: "Ready to play!", duration: 500 },
  ];

  useEffect(() => {
    let currentStep = 0;
    let currentProgress = 0;

    const interval = setInterval(() => {
      if (currentStep < loadingSteps.length) {
        const step = loadingSteps[currentStep];
        setLoadingText(step.text);

        const stepProgress = 100 / loadingSteps.length;
        const targetProgress = (currentStep + 1) * stepProgress;

        const progressInterval = setInterval(() => {
          currentProgress += 2;
          setProgress(Math.min(currentProgress, targetProgress));

          if (currentProgress >= targetProgress) {
            clearInterval(progressInterval);
            currentStep++;
          }
        }, step.duration / (stepProgress / 2));
      } else {
        clearInterval(interval);
        setTimeout(() => {
          onLoadingComplete();
        }, 500);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.0, ease: "easeInOut" }}
    >
      <div className="relative z-10 text-center">
        <motion.div
          className="mb-8"
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img
            src="/logo.png"
            alt="En Passant Logo"
            className="w-24 h-24 mx-auto"
          />
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="bg-white bg-clip-text text-transparent">
            En Passant
          </span>
        </motion.h1>

        <motion.p
          className="text-lg text-gray-300 mb-12 font-montserrat"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Think Ahead. Move Smart. Win Together.
        </motion.p>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <p className="text-yellow-400 text-lg font-montserrat font-medium">
            {loadingText}
          </p>
        </motion.div>

        <motion.div
          className="w-80 mx-auto mb-8"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </div>
          <div className="text-right mt-2">
            <span className="text-yellow-400 text-sm font-montserrat font-medium">
              {Math.round(progress)}%
            </span>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          {["♔", "♕", "♖", "♗", "♘", "♙"].map((piece, index) => (
            <motion.div
              key={piece}
              className="text-2xl text-yellow-400/60"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut",
              }}
            >
              {piece}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
