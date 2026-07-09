import React from 'react';

const BASE =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm border-[1.5px] border-transparent font-body text-[15px] font-semibold px-6 py-[13px] transition duration-150 ease-out active:translate-y-px disabled:cursor-not-allowed disabled:opacity-50';

const VARIANTS = {
  primary: 'bg-ink text-paper hover:bg-coral-ink hover:shadow-pop',
  secondary: 'border-ink bg-transparent text-ink hover:bg-ink hover:text-paper',
  ghost: 'border-transparent bg-transparent px-3 text-ink-soft hover:text-ink',
};

/**
 * variant: 'primary' | 'secondary' | 'ghost'
 * as: allows rendering as a plain button or wrapping a Link via `as={Link}`
 */
export default function Button({
  children,
  variant = 'primary',
  as: Component = 'button',
  className = '',
  ...rest
}) {
  return (
    <Component className={`${BASE} ${VARIANTS[variant]} ${className}`} {...rest}>
      {children}
    </Component>
  );
}
