import React, { useState } from 'react';
import { sound } from '../utils/audio';
import { Volume2, VolumeX } from 'lucide-react';

export function AudioToggle({ onToggle }) {
  const [enabled, setEnabled] = useState(() => sound.isEnabled());

  const handleClick = (e) => {
    e.stopPropagation();
    const newState = sound.toggle();
    setEnabled(newState);
    if (onToggle) onToggle(newState);
  };

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
        enabled
          ? 'bg-white text-black font-semibold shadow-md shadow-white/15'
          : 'liquid-glass text-zinc-400 hover:text-white hover:border-white/20'
      }`}
      title={enabled ? 'Mute Sound Effects (Tactile audio ON)' : 'Enable Sound Effects (Tactile audio OFF)'}
      data-cursor="pointer"
    >
      {enabled ? (
        <>
          <Volume2 size={13} className="text-black" />
          <span className="hidden sm:inline">SFX</span>
          {/* Animated sound wave bars */}
          <div className="flex items-end gap-[2px] h-3 w-3">
            <span className="w-[2px] h-2 bg-black animate-pulse" />
            <span className="w-[2px] h-3 bg-black animate-pulse delay-75" />
            <span className="w-[2px] h-1.5 bg-black animate-pulse delay-150" />
          </div>
        </>
      ) : (
        <>
          <VolumeX size={13} />
          <span className="hidden sm:inline">SFX</span>
        </>
      )}
    </button>
  );
}
