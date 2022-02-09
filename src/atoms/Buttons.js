import React from 'react';
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Buttons() {
  return (
    <>
      <div className='buttons__container'>
        <button className="email">
          <FaEnvelope className='icon' />
          Email
        </button>
        <button className="linkedin">
          <FaLinkedin className='icon' />
          LinkedIn
        </button>
      </div>
    </>
  );
}
