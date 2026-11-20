import type { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost';
  size?: 'medium' | 'small';
}

export function Button({ variant = 'primary', size = 'medium', className, ...props }: ButtonProps) {
  const classes = [styles.button, styles[variant], size === 'small' && styles.small, className]
    .filter(Boolean)
    .join(' ');
  return <button type="button" className={classes} {...props} />;
}
