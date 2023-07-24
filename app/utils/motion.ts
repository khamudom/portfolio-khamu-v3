interface textVariantProps {
  delay: number;
}

export const textVariant = ({ delay }: textVariantProps) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

interface fadeInProps {
  direction: string;
  type: string;
  delay: number;
  duration: number;
}

export const fadeIn = ({ direction, type, delay, duration }: fadeInProps) => {
  return {
    hidden: {
      x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  };
};

interface zoomInProps {
  delay: number;
  duration: number;
}

export const zoomIn = ({ delay, duration }: zoomInProps) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'tween',
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  };
};

interface slideInProps {
  direction: string;
  type: string;
  delay: number;
  duration: number;
}

export const slideIn = ({ direction, type, delay, duration }: slideInProps) => {
  return {
    hidden: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  };
};

interface staggerContainerProps {
  staggerChildren?: number;
  delayChildren?: number;
}

export const staggerContainer = ({
  staggerChildren,
  delayChildren,
}: staggerContainerProps) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};
