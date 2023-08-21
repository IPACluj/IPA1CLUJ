import React, { useState, useEffect } from "react";

interface TypewriterProps {
  text: string;
}

const Typewriter: React.FC<TypewriterProps> = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {

    
  
    if (currentIndex <= text.length) {
      const typingTimer = setTimeout(() => {
        setDisplayText(text.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 250); // Adjust typing speed (milliseconds)

      return () => clearTimeout(typingTimer);
    }


    setTimeout(() => {
      resetTypewriter();
    }, 1500);


  }, [currentIndex, text]);

  const resetTypewriter = () => {
    setDisplayText("_");

    setCurrentIndex(0);
  };

  return <p>{displayText}</p>;
};

export default Typewriter;
