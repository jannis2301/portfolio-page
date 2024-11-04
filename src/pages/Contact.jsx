import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { AnimatedLetters, Loader } from '../components';
import { useTextAnimation } from '../hooks/useTextAnimation';

const Contact = () => {
  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;
  const contactArray = 'Contact me'.split('');
  const letterClass = useTextAnimation();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
        alert('Message sent successfully!');
        window.location.reload(false);
      },
      (error) => {
        console.log(error.text);
        alert('Failed to sent the message, please try again!');
      }
    );
  };

  return (
    <>
      <section className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={contactArray}
              idx={15}
            />
          </h1>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li>
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li>
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="btn form-btn" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </section>
      <Loader />
    </>
  );
};

export default Contact;
