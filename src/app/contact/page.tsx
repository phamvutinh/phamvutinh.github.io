import React from 'react';
import ContactForm from './components/ContactForm';

const Contact = () => {
  return (
    <div className="min-w-full fixed left-[3.5vw] -translate-y-1/2 top-[50%] flex">
      <div className="basis-1/3">This is place for model 3D</div>
      <div className="basis-1/2">
        <div className="pb-[5vh]">
          <h2 className="text-5xl font-semibold mb-5">
            let&apos;s start a project together
          </h2>
          <p>
            or want to have a cup of coffee and chit chat, just drop me a
            message.
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
