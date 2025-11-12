import React, { useEffect, useRef } from 'react';
import { useInView, animate } from 'framer-motion';

function Counter({ to }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      // Animate from 0 to the target number
      const controls = animate(0, to, {
        duration: 2, // Animation duration in seconds
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = value.toFixed(0);
          }
        }
      });
      // Cleanup function to stop animation if component unmounts
      return () => controls.stop();
    }
  }, [isInView, to]);

  return <span ref={ref}>0</span>;
}

export default Counter;