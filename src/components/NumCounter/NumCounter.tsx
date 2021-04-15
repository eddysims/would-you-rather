import { useEffect, useState } from "react";

interface NumCounterProps {
  /**
   * number to count up to.
   */
  readonly number: number;
}

export function NumCounter({ number }: NumCounterProps) {
  const easeOutQuad = (t) => t * (2 - t);
  const frameDuration = 1000 / 60;
  const countTo = number;
  const duration = 1500;
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frame = 0;
    const totalFrames = Math.round(duration / frameDuration);
    const counter = setInterval(() => {
      frame += 1;
      const progress = easeOutQuad(frame / totalFrames);
      setCount(countTo * progress);

      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);
  }, [number]);

  return <>{Math.floor(count)}</>;
}
