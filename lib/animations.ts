import { type MotionProps } from 'framer-motion';

// Fade in animation for sections
export const fadeIn = (delay: number = 0): MotionProps => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }
});

// Stagger animation for children elements
export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Item animation for stagger children
export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1]
    } 
  }
};

// Animation for scrolling number counters
export const counterAnimation = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.8,
      ease: "easeOut" 
    }
  }
};

// Hover animation for cards
export const cardHoverAnimation = {
  rest: { 
    scale: 1,
    transition: { 
      duration: 0.2, 
      ease: "easeOut" 
    }
  },
  hover: { 
    scale: 1.03,
    transition: { 
      duration: 0.2, 
      ease: "easeIn" 
    }
  }
};

// Animation for the hero section background
export const heroBgAnimation = {
  initial: { scale: 1.2, opacity: 0 },
  animate: { 
    scale: 1, 
    opacity: 1,
    transition: { 
      duration: 1.5, 
      ease: "easeOut" 
    }
  }
};

// Button hover animation
export const buttonHoverAnimation = {
  rest: { 
    scale: 1,
    transition: { 
      duration: 0.2, 
      ease: "easeOut" 
    }
  },
  hover: { 
    scale: 1.05,
    transition: { 
      duration: 0.2, 
      ease: "easeIn" 
    }
  }
};