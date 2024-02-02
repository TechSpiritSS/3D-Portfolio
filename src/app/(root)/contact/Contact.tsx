// @ts-nocheck

'use client';

import Alert from '@/components/Alert';
import Loader from '@/components/Loader';
import { socialLinks } from '@/constants';
import useAlert from '@/hooks/useAlert';
import Fox from '@/models/Fox';
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import Image from 'next/image';
import Link from 'next/link';
import { ChangeEvent, Suspense, useRef, useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [currentAnimation, setCurrentAnimation] = useState('idle');
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);
  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('hit');

    emailjs
      .send(
        process.env.NEXT_PUBLIC_APP_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Sidharth Sethi',
          from_email: form.email,
          to_email: 'techspiritss@duck.com',
          message: form.message,
        },
        process.env.NEXT_PUBLIC_APP_EMAILJS_PUBLICKEY
      )
      .then(() => {
        showAlert({
          show: true,
          text: 'Message sent successfully!',
          type: 'success',
        });
      })
      .catch(() => {
        showAlert({
          show: true,
          text: 'Something went wrong!',
          type: 'danger',
        });
      })
      .finally(() => {
        setIsLoading(false);
        setCurrentAnimation('idle');
        setForm({
          name: '',
          email: '',
          message: '',
        });

        formRef.current.reset();

        setTimeout(() => {
          hideAlert();
        }, 3000);
      });
  };
  const handleFocus = () => {
    setCurrentAnimation('walk');
  };
  const handleBlur = () => {
    setCurrentAnimation('idle');
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-container h-[100vh]">
      {alert.show && <Alert {...alert} />}

      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text flex justify-center">Get in Touch</h1>

        <div
          className="flex items-center gap-4 mt-10
       justify-center text-black-500 font-semibold
        "
        >
          {socialLinks.map((link) => (
            <Link
              href={link.link}
              key={link.name}
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer transition duration-300 ease-in-out transform hover:scale-110"
            >
              <Image
                src={link.iconUrl}
                alt={link.name}
                width={48}
                height={48}
              />
            </Link>
          ))}
        </div>

        <p className="text-black-500 font-semibold mt-7 flex justify-center">
          Or drop me a message here
        </p>

        <form
          className="w-full flex flex-col gap-7 mt-7"
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Sidharth"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="techspiritss@duck.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Message
            <input
              type="text"
              name="message"
              className="input"
              placeholder="Enter your message..."
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type="submit"
            className="btn"
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h=[550px] h=[350px]">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.625, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
