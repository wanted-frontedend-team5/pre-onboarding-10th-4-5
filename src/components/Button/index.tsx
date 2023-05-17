import React from 'react';
import { FaTrash, FaPlusCircle } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5';

type ButtonProps = {
  mode: 'add' | 'remove' | 'search';
  // eslint-disable-next-line react/require-default-props
  handleClick?: () => void;
};

const Button = ({ mode, handleClick }: ButtonProps) => {
  if (mode === 'remove') {
    return (
      <button onClick={() => handleClick!()}>
        <FaTrash className="btn-trash" />
      </button>
    );
  }
  if (mode === 'search') {
    return (
      <div className="input-search">
        <IoSearch className="btn-search" />
      </div>
    );
  }
  return (
    <button className="input-submit" type="submit">
      <FaPlusCircle className="btn-plus" />
    </button>
  );
};

export default Button;
