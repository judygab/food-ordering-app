import * as React from 'react';
import clsx from 'clsx';

const variants = {
  hero: 'text-5xl font-bold text-white',
  title: 'text-4xl text-white',
  subtitle: 'text-3xl',
  paragraph: 'text-xl',
};

const Text = ({ children, className, variant = 'title', ...rest }) => {
  return (
    <p className={clsx(variants[variant], className)} {...rest}>
      {children}
    </p>
  );
};

export default Text;
