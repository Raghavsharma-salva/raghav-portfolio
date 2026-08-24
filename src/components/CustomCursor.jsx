import React from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '../hooks/useMousePosition';
import { useReducedMotion } from '../hooks/useReducedMotion';

export function CustomCursor() {
  const { mousePosition, cursorType, cursorText, isHovered, isTouchDevice } = useMousePosition();
  const prefersReducedMotion = useReducedMotion();

  if (isTouchDevice || prefersReducedMotion) {
    return null;
  }

  // Determine cursor variants and styles
  const isView = cursorType === 'view' || cursorType === 'project';
  const isText = Boolean(cursorText);

  return (
    <>
      {/* Outer context ring / liquid glass pill */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center font-mono text-[10px] font-bold tracking-wider uppercase text-white"
        animate={{
          x: mousePosition.x - (isText || isView ? 36 : isHovered ? 20 : 12),
          y: mousePosition.y - (isText || isView ? 36 : isHovered ? 20 : 12),
          width: isText || isView ? 72 : isHovered ? 40 : 24,
          height: isText || isView ? 72 : isHovered ? 40 : 24,
          backgroundColor: isText || isView ? 'rgba(255, 255, 255, 0.12)' : isHovered ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.03)',
          borderColor: isText || isView ? 'rgba(255, 255, 255, 0.45)' : isHovered ? 'rgba(255, 255, 255, 0.35)' : 'rgba(255, 255, 255, 0.15)',
          scale: mousePosition.x < 0 ? 0 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 28,
          stiffness: 350,
          mass: 0.5,
        }}
        style={{
          borderRadius: '9999px',
          borderWidth: '1px',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          boxShadow: isText || isView ? 'inset 0 1px 1px rgba(255,255,255,0.4), 0 0 20px rgba(255, 255, 255, 0.15)' : 'inset 0 1px 0 rgba(255,255,255,0.2)',
        }}
      >
        {isText ? (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-white drop-shadow-sm select-none"
          >
            {cursorText}
          </motion.span>
        ) : isView ? (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-white drop-shadow-sm select-none font-semibold text-[11px]"
          >
            VIEW
          </motion.span>
        ) : null}
      </motion.div>

      {/* Tiny inner center dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 w-1.5 h-1.5 bg-red-500 rounded-full shadow-sm shadow-red-500/80"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          opacity: isText || isView ? 0 : 1,
          scale: mousePosition.x < 0 ? 0 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 45,
          stiffness: 800,
          mass: 0.1,
        }}
      />
    </>
  );
}
