import React, { ReactNode } from 'react';

import './modal.css';

export type ModalProps = {
  active: boolean;
  setActive: any;
  children?: ReactNode;
  className?: string;
};

export const Modal: React.FC<ModalProps> = ({
  active,
  setActive,
  children,
}) => {
  return (
    <div
      className={active ? 'modal active' : 'modal'}
      // className={styles.modal}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? 'modal_content active' : 'modal_content'}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
