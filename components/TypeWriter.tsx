"use client";
import Typewriter from "typewriter-effect";

interface TypeWriterProps {
  strings: string[];
  autoStart?: boolean | undefined;
  loop?: boolean | undefined;
}
const TypeWriter = ({ strings, autoStart, loop }: TypeWriterProps) => {
  return (
    <Typewriter
      options={{
        strings,
        autoStart,
        loop,
      }}
    />
  );
};

export default TypeWriter;
