import React from 'react';
import { useInView } from 'react-intersection-observer';

const ScrollAnimator = ({ children, animationClass, threshold = 0.1, triggerOnce = true }) => {
  const { ref, inView } = useInView({
    threshold: threshold, // Percentage of element in view to trigger
    triggerOnce: triggerOnce, // Only trigger once
  });

  return (
    <div ref={ref} className={`scroll-animate-target ${inView ? animationClass : ''}`}>
      {children}
    </div>
  );
};

export default ScrollAnimator; 