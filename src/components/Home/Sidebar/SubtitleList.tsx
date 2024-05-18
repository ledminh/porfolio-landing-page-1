"use client";
/* eslint-disable react/no-unescaped-entities */

import React, { useState, useEffect } from "react";

type Props = {
  subtitles: string[];
};

export default function SubtitleList({ subtitles }: Props) {
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);
  const [currentSubtitle, setCurrentSubtitle] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubtitleIndex(
        (prevIndex) => (prevIndex + 1) % subtitles.length
      );

      setCurrentSubtitle("");
    }, 3000);

    return () => clearInterval(interval);
  }, [subtitles]);

  useEffect(() => {
    const typingEffectInterval = setInterval(() => {
      const subtitle = subtitles[currentSubtitleIndex];

      setCurrentSubtitle((prevSubtitle) => {
        if (prevSubtitle === subtitle) {
          return subtitle;
        } else {
          return subtitle.slice(0, prevSubtitle.length + 1);
        }
      });
    }, 100);

    return () => clearInterval(typingEffectInterval);
  }, [currentSubtitleIndex, subtitles]);

  return (
    <h3 className="font-semibold text-sm">
      <span>I'M </span>
      {currentSubtitle.toLocaleUpperCase()}
      <span className="cursor-blink">|</span>
    </h3>
  );
}
