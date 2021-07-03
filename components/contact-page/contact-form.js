import { useState } from 'react';
import cls from './contact-form.module.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: '',
  });

  function onChangeHandler(event) {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  }

  function sendMessageHandler(event) {
    event.preventDefault();

    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({ ...formData }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  return (
    <section className={cls.contact}>
      <h1>How can I help you?</h1>
      <form className={cls.form} onSubmit={sendMessageHandler}>
        <div className={cls.controls}>
          <div className={cls.control}>
            <label htmlFor='email'>Your email</label>
            <input
              type='email'
              id='email'
              required
              value={formData.enteredEmail}
              onChange={onChangeHandler}
            />
          </div>
          <div className={cls.control}>
            <label htmlFor='name'>Your name</label>
            <input
              type='text'
              id='name'
              required
              value={formData.enteredName}
              onChange={onChangeHandler}
            />
          </div>
        </div>
        <div className={cls.controls}>
          <label htmlFor='message'>Your message</label>
          <textarea
            id='message'
            rows='5'
            required
            value={formData.enteredMessage}
            onChange={onChangeHandler}
          />
        </div>
        <div className={cls.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
