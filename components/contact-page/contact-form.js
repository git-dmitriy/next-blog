import { useState, useEffect } from 'react';
import cls from './contact-form.module.css';
import Notification from '../ui/notification';

async function sendContactData(formData) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify({ ...formData }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }
}

function ContactForm() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: '',
  });
  const [requestStatus, setRequestStatus] = useState();
  const [requestError, setRequestError] = useState();

  useEffect(() => {
    let timer;
    if (requestStatus === 'success' || requestStatus === 'error') {
      timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [requestStatus]);

  function onChangeHandler(event) {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  }

  async function sendMessageHandler(event) {
    event.preventDefault();
    setRequestStatus('pending');
    try {
      await sendContactData(formData);
      setRequestStatus('success');
      setFormData({
        email: '',
        name: '',
        message: '',
      });
    } catch (err) {
      setRequestError(err.message);
      setRequestStatus('error');
    }
  }

  let notification;

  if (requestStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending message...',
      message: 'Your message in on its way',
    };
  }

  if (requestStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Success!',
      message: 'Message sent successfully!',
    };
  }
  if (requestStatus === 'error') {
    notification = {
      status: 'error',
      title: 'Error',
      message: requestError,
    };
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
              value={formData.email}
              onChange={onChangeHandler}
            />
          </div>
          <div className={cls.control}>
            <label htmlFor='name'>Your name</label>
            <input
              type='text'
              id='name'
              required
              value={formData.name}
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
            value={formData.message}
            onChange={onChangeHandler}
          />
        </div>
        <div className={cls.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
}

export default ContactForm;
