import React, { DOMAttributes } from 'react';

import classNames from 'classnames';

import { CircleLoader } from 'react-spinners';

import styles from './Button.module.css';

export type ButtonType = 'button' | 'submit' | 'reset';

export type VariantType = 'welcome' | 'showMore';

export type ButtonProps = {
  variant: VariantType;
  className?: string;
  disabled?: boolean;
  type?: ButtonType;
  isLoading?: boolean;
  name?: string;
  id?: string;
};
const variants = {
  welcome: 'welcome',
  showMore: 'showMore',
};
export const Button: React.FC<
  ButtonProps & DOMAttributes<HTMLButtonElement>
> = ({
  variant,
  children,
  disabled,
  className = '',
  type,
  isLoading,
  name,
  ...props
}) => {
  const buttonClass = variant
    ? `${styles[variants[variant]]} ${className}`
    : className;
  /* eslint-disable react/button-has-type */
  return (
    <button
      name={name}
      className={classNames(buttonClass, {
        button__disabled: disabled,
      })}
      disabled={disabled}
      type={type || 'button'}
      {...props}
    >
      {isLoading ? <CircleLoader color="#36d7b7" size={100} /> : children}
    </button>
  );
};
