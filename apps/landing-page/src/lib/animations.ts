// Animation variants and constants

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 }
};

export const slideInLeft = {
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0 }
};

export const slideInRight = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 }
};

// Easing curve - natural, refined deceleration
export const easeOutQuint = [0.22, 1, 0.36, 1] as const;
