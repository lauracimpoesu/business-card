import React from 'react';
import Buttons from '../atoms/Buttons';

export default function Header() {
  return (
    <div>
      <h1 className='name'>Laura Cimpoesu</h1>
      <h3 className='job'>Software Developer</h3>
      <p>lauracimpoesu.com</p>
        <Buttons/>
    </div>
  );
}
