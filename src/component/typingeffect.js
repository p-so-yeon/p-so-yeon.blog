import React, { useState, useEffect } from "react";

const TypingEffect = ({ texts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (currentIndex < texts.length) {
      const interval = setInterval(() => {
        setDisplayText(
          texts[currentIndex].substring(0, displayText.length + 1)
        );

        if (displayText.length === texts[currentIndex].length) {
          clearInterval(interval);
          setTimeout(() => {
            setCurrentIndex(currentIndex + 1);
          }, 1000); // 다음 문자열로 넘어가는 딜레이
        }
      }, 100);

      return () => {
        clearInterval(interval);
      };
    }
  }, [currentIndex, displayText, texts]);

  return <div>{displayText}</div>;
};

export default TypingEffect;
