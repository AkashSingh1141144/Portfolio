import React, { useState, useEffect } from "react";


const TypingEffect = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]); 
        setIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return <h1 className="text-4xl font-bold text-white [text-shadow:_0_5px_10px_rgb(0_0_0_/_80%)]">{displayedText}</h1>;
};

const Typer = () => {
  return (
    <div>
      <TypingEffect text="I am a Full Stack Developer !" speed={50} />
    </div>
  );
};

export default Typer;
