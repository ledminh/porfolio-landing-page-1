/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */

"use client";

import React, { useState, useEffect } from "react";

type Props = {
  subtitles: string[];
};

export default function SubtitleList({ subtitles }: Props) {
  const [state, setState] = useState({
    currentSubtitleIndex: 0,
    pointer: 0,
    direction: "forward",
  });

  const [timer, setTimer] = useState(0);
  const [nextEventTime, setNextEventTime] = useState(-1);

  const { currentSubtitleIndex, pointer } = state;
  const currentSubtitle = subtitles[currentSubtitleIndex];

  useEffect(() => {
    const tInterval = setInterval(() => {
      setTimer((prevState) => prevState + 1);
    }, 170);

    return () => {
      clearInterval(tInterval);
    };
  }, []);

  useEffect(() => {
    if (timer < nextEventTime) return;

    setState((prevState) => {
      const { currentSubtitleIndex, pointer, direction } = prevState;

      const subtitle = subtitles[currentSubtitleIndex];

      let newPointer = pointer;
      let newDirection = direction;
      let newCurrentSubtitleIndex = currentSubtitleIndex;
      if (direction === "forward") {
        newPointer = pointer + 1;

        if (newPointer === subtitle.length) {
          newDirection = "backward";
          setNextEventTime(timer + 15);
        } else {
          setNextEventTime(-1);
        }
      } else {
        newPointer = pointer - 1;

        if (newPointer === 0) {
          newDirection = "forward";
          setNextEventTime(timer + 5);
          newCurrentSubtitleIndex =
            (currentSubtitleIndex + 1) % subtitles.length;
        } else {
          setNextEventTime(-1);
        }
      }

      return {
        currentSubtitleIndex: newCurrentSubtitleIndex,
        pointer: newPointer,
        direction: newDirection,
      };
    });
  }, [timer]);

  return (
    <h3 className="font-semibold text-sm">
      <span>I'M </span>
      {currentSubtitle.slice(0, pointer).toLocaleUpperCase()}
      <span className="cursor-blink">|</span>
    </h3>
  );
}
