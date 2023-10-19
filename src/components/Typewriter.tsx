import { useEffect, useState } from "react";

type TypewriterProps = {
  text: string;
  delay: number;
  infinite: boolean;
};
function Typewriter(props: TypewriterProps) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout: any;

    if (currentIndex < props.text.length) {
      timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + props.text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, props.delay);
    } else if (props.infinite) {
      setCurrentIndex(0);
      setCurrentText("");
    }
    return () => clearTimeout(timeout);
  }, [currentIndex, props.delay, props.infinite, props.text]);

  return <span>{currentText}</span>;
}

export default Typewriter;
