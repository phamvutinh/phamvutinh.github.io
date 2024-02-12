import React from 'react';

const Contact = () => {
  return (
    <div className="min-w-full fixed left-[3.5vw] -translate-y-1/2 top-[50%] flex">
      <div className="basis-1/3" />
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
        <div className="mt-[5vh]">
          <h5>email:</h5>
          <a
            className="text-4xl block mt-3"
            href="mailto:phamvu.tinh99@gmail.com"
            target="_blank"
          >
            phamvu.tinh99@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
