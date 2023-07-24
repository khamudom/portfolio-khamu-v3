import React, { ReactNode } from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  title?: string;
  href?: string;
  rel?: string;
  target?: string;
  className?: string;
  disabled?: boolean;
  download?: boolean;
  children?: ReactNode;
  variant?: 'default' | 'icon';
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
};

const Button = ({
  children,
  href,
  rel,
  target,
  className,
  title,
  type = 'button',
  variant,
  download,
  ...props
}: ButtonProps) => {
  if (href) {
    return (
      <a
        className={styles.btn}
        href={href}
        target={target}
        rel={rel}
        download={download}
        {...props}
      >
        {children}
      </a>
    );
  } else {
    return (
      <button
        className={`${styles.btn} ${
          variant === 'icon' ? `${styles.iconBtn}` : ''
        } ${className}`}
        type={type}
        title={title}
        {...props}
      >
        <span className={styles.content}>{children}</span>
      </button>
    );
  }
};

export default Button;
