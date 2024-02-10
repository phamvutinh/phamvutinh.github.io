import { sendEmail } from '@/app/actions';
import ButtonSubmit from './ButtonSubmit';
import Input from './Input';

const ContactForm = () => {
  return (
    <form action={sendEmail}>
      <div className="flex mt-5">
        <div className="basis-1/2">
          <Input
            name="name"
            label="What's your name?"
            type="text"
            placeholder="Pham Tinh *"
          />
        </div>
        <div className="basis-1/2 ml-6">
          <Input
            name="email"
            label="What's your email?"
            type="text"
            placeholder="phamvu.tinh99@gmail.com *"
          />
        </div>
      </div>
      <div className="mt-5">
        <label
          htmlFor="message"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          Message
        </label>
        <div className="mt-2.5">
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Hello Tinh, can you help me with ... *"
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="mt-5">
        <ButtonSubmit />
      </div>
    </form>
  );
};

export default ContactForm;
