'use client';

import React from 'react';
import { useFormStatus } from 'react-dom';

const ButtonSubmit = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      aria-disabled={pending}
      className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {pending ? 'Loading...' : "Let's talk"}
    </button>
  );
};

export default ButtonSubmit;
