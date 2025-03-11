import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const LetterAnimation = ({ 
  children, 
  index, 
  wordIndex, 
  isGlowing, 
  initialAnimationComplete 
}: { 
  children: string;
  index: number;
  wordIndex: number;
  isGlowing: boolean;
  initialAnimationComplete: boolean;
}) => {
  const delay = (wordIndex * 0.25 + index * 0.025);

  return (
    <motion.span
      className="relative inline-block"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.15,
        delay,
        ease: "easeOut"
      }}
    >
      <motion.span 
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.15,
          delay,
          ease: "easeOut"
        }}
      >
        {children}
      </motion.span>
      <motion.span
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={!initialAnimationComplete ? { opacity: [0, 1, 0] } : { opacity: isGlowing ? 1 : 0 }}
        transition={!initialAnimationComplete ? {
          duration: 0.3,
          delay,
          ease: "easeOut"
        } : {
          duration: 0.3,
          ease: "easeInOut"
        }}
        style={{
          textShadow: '0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(255,255,255,0.4)'
        }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
};

export default function Home() {
  const heroText = [
    "We",
    "don't",
    "automate",
    "for",
    "you,",
    "we",
    "automate",
    "with",
    "you"
  ];

  const [initialAnimationComplete, setInitialAnimationComplete] = useState(false);
  const [currentGlowIndex, setCurrentGlowIndex] = useState(-1);
  const totalLetters = heroText.join('').length;

  useEffect(() => {
    const totalWords = heroText.length;
    const lastWordLength = heroText[totalWords - 1].length;
    const totalAnimationTime = 
      (totalWords * 0.25) + // Word delays
      (lastWordLength * 0.025) + // Last word's letters
      0.15 + // Last letter animation duration
      0.1; // Buffer

    const timer = setTimeout(() => {
      setInitialAnimationComplete(true);
    }, totalAnimationTime * 1000);

    return () => clearTimeout(timer);
  }, [heroText]);

  useEffect(() => {
    if (!initialAnimationComplete) return;

    const interval = setInterval(() => {
      setCurrentGlowIndex(prev => {
        if (prev >= totalLetters - 1) {
          return -1; // Reset to start after pause
        }
        return prev + 1;
      });
    }, 150); // Slightly faster pace (0.15s per letter)

    return () => clearInterval(interval);
  }, [initialAnimationComplete, totalLetters]);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    button.style.setProperty('--mouse-x', `${x}%`);
    button.style.setProperty('--mouse-y', `${y}%`);
  };

  let globalLetterIndex = -1;

  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 py-32 lg:px-8">
      <div className="depth-gradient" />
      <div className="noise absolute inset-0" />
      
      <div className="relative z-10 mx-auto max-w-[95rem] text-center">
        <div className="space-y-8 select-none">
          <h1 className="relative mx-auto max-w-[64rem] font-sans text-6xl font-bold leading-[1.1] tracking-[-0.02em] sm:text-7xl lg:text-8xl">
            {heroText.map((word, wordIndex) => (
              <React.Fragment key={wordIndex}>
                <span className="inline-block">
                  {word.split('').map((letter, letterIndex) => {
                    globalLetterIndex++;
                    return (
                      <LetterAnimation 
                        key={letterIndex} 
                        index={letterIndex} 
                        wordIndex={wordIndex}
                        isGlowing={initialAnimationComplete && globalLetterIndex === currentGlowIndex}
                        initialAnimationComplete={initialAnimationComplete}
                      >
                        {letter}
                      </LetterAnimation>
                    );
                  })}
                </span>
                {' '}
                {(wordIndex === 4 || wordIndex === 2) && <br className="hidden sm:block" />}
              </React.Fragment>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.25, duration: 0.8 }}
            className="mx-auto max-w-2xl text-xl text-white/70"
          >
            Leveraging quantitative trading expertise and cutting-edge AI, we build enterprise-grade automation systems that streamline operations, boost efficiency, and deliver measurable ROI within weeks.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.35, duration: 0.8 }}
            className="flex justify-center"
          >
            <motion.button 
              onClick={() => document.getElementById('offers')?.scrollIntoView({ behavior: 'smooth' })} 
              onMouseMove={handleMouseMove}
              className="button-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center gap-2">
                Explore Offers <ArrowRight className="h-4 w-4" />
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}