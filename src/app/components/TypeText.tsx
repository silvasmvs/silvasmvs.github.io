"use client";

import { Typewriter } from "react-simple-typewriter";

export interface TypeTextProps {
    words: string[];
}

export function TypeText({ words }: TypeTextProps) {
  return (
    <h1 className="text-5xl font-medium text-zinc-900 font-[family-name:var(--font-montserrat)]">
      <Typewriter
        words={words}
        loop={5}
        cursor
        cursorStyle="_"
        typeSpeed={110}
        deleteSpeed={90}
        delaySpeed={1000}
      />
    </h1>
  );
}
